import Table from "@app/core/components/Table";
import { getColAlign } from "@utils/functions/utilities";
import { Brand } from "../models/Brand";
import { BRANDS_COLUMNS } from "../utils/constants";

type BrandRowProps = {
	item: Brand;
	index: number;
};

function align(key: keyof Brand) {
	return getColAlign(BRANDS_COLUMNS, key);
}

const BrandRow = ({ index, item }: BrandRowProps) => {
	return (
		<>
			<Table.Cell align={align("#" as any)}> {index + 1}</Table.Cell>
			<Table.Cell align={align("key")}>{item.key}</Table.Cell>
			<Table.Cell
				nowrap
				align={align("name")}
			>
				{item.name}
			</Table.Cell>
		</>
	);
};

export default BrandRow;
