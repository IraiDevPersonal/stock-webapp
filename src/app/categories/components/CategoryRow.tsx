import Table from "@app/core/components/Table";
import { getColAlign } from "@utils/functions/utilities";
import { Category } from "../models/Category";
import { CATEGORIES_COLUMNS } from "../utils/constants";

type CategoryRowProps = {
	item: Category;
	index: number;
};

function align(key: keyof Category) {
	return getColAlign(CATEGORIES_COLUMNS, key);
}

const CategoryRow = ({ index, item }: CategoryRowProps) => {
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

export default CategoryRow;
