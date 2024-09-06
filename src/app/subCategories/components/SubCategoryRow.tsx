import Table from "@app/core/components/Table";
import { getColAlign } from "@utils/functions/utilities";
import { SubCategory } from "../models/SubCategory";
import { CATEGORIES_COLUMNS } from "../uitls/constants";

type SubCategoryRowProps = {
	item: SubCategory;
	index: number;
};

function align(key: keyof SubCategory) {
	return getColAlign(CATEGORIES_COLUMNS, key);
}

const SubCategoryRow = ({ index, item }: SubCategoryRowProps) => {
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

export default SubCategoryRow;
