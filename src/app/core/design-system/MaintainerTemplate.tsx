import { TableColumn } from "@utils/types";
import Header from "./Header";
import Table from "../components/Table";
import Main from "./Main";
import Button from "../components/Button";
import IconPlus from "./icons/IconPlus";
import { useDisclosure } from "../hooks/useDisclosure";

type MaintainerTemplateProps<T extends object> = {
	title: string;
	tableDataset: T[];
	tableColumns: TableColumn[];
	tableCells(item: T, idx: number): JSX.Element;
	children?(props: MaintainerChildrenProps): React.ReactNode;
};

export type MaintainerChildrenProps = {
	title: string;
	isOpen: boolean;
	onClose(): void;
};

const MaintainerTemplate = <T extends object>({
	tableColumns,
	tableDataset,
	tableCells,
	children,
	title
}: MaintainerTemplateProps<T>) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Header title={`Mantenedor de ${title}`}>
				{children && (
					<Button
						isIconOnly
						variant="light"
						color="default"
						onClick={onOpen}
						title={`Crear ${title.slice(0, -1)}`}
					>
						<IconPlus />
					</Button>
				)}
				{children?.({ title, isOpen, onClose })}
			</Header>
			<Main>
				<Table
					dataset={tableDataset}
					columns={tableColumns}
					classNames={{
						wrapper: "overflow-auto"
					}}
					emptyContent="No hay items..."
				>
					{tableCells}
				</Table>
			</Main>
		</>
	);
};

export default MaintainerTemplate;
