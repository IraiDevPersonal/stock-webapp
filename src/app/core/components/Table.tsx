import { tw } from "@utils/functions/tailwind";
import { JsxAtributtes, TableColumn } from "@utils/types";
import { PropsWithChildren } from "react";
import { TableVirtuoso } from "react-virtuoso";

type TableProps<T> = {
	dataset: T[];
	isLoading?: boolean;
	emptyContent?: string;
	columns: TableColumn[];
	renderFooter?(): JSX.Element;
	renderFilter?(): JSX.Element;
	children(item: T, index: number): JSX.Element;
	sizing?: {
		width?: number;
		height: number;
	};
	classNames?: {
		table?: string;
		column?: string;
		emptyContent?: string;
		filtersRow?: string;
		columnsRow?: string;
	};
};

function Table<T>({
	sizing,
	dataset,
	columns,
	classNames,
	emptyContent,
	children,
	renderFilter,
	renderFooter
}: TableProps<T>) {
	const isEmpty = dataset.length === 0;
	// width: columns.reduce((acc, cur) => acc + (cur.width ?? 0), 0)
	return (
		<>
			<TableVirtuoso
				data={dataset}
				className={classNames?.table}
				fixedFooterContent={() => renderFooter?.()}
				itemContent={(idx, item) => children(item, idx)}
				style={{ ...sizing, height: isEmpty ? 40 : (sizing?.height ?? 400) }}
				fixedHeaderContent={() => (
					<>
						{renderFilter !== undefined && (
							<tr className={tw("font-normal", classNames?.filtersRow)}>
								{renderFilter()}
							</tr>
						)}

						<tr className={tw("font-bold", classNames?.columnsRow)}>
							{columns.map(({ key, children, ...column }) => (
								<th
									key={key}
									className={tw(
										"p-2 first-letter:uppercase",
										classNames?.column
									)}
									{...column}
								>
									{children}
								</th>
							))}
						</tr>
					</>
				)}
			/>
			{isEmpty && (
				<span
					className={tw(
						"pl-2 italic text-default-500 first-letter:uppercase",
						classNames?.emptyContent
					)}
				>
					{emptyContent ?? "No hay items..."}
				</span>
			)}
		</>
	);
}

export default Table;

type TableCellProps = PropsWithChildren & JsxAtributtes["td"];

Table.Cell = function TableCell({
	children,
	className,
	...props
}: TableCellProps) {
	return (
		<td
			valign="top"
			align="left"
			className={tw(
				"px-2 py-1 font-normal border-t border-default-300",
				className
			)}
			{...props}
		>
			{children}
		</td>
	);
};
