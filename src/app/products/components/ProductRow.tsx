import Table from "@app/core/components/Table";
import { Product } from "../models/Product";
import { getColAlign } from "@utils/functions/utilities";
import { PRODUCTS_COLUMNS } from "../utils/constants";
import { displayFormatedNumber } from "@utils/functions/displayFormatedNumber";
import { DateRepository } from "@utils/repositories/DateRepository";
import Chip from "@app/core/components/Chip";

type ProductRowProps = {
	item: Product;
	index: number;
};

function align(key: keyof Product) {
	return getColAlign(PRODUCTS_COLUMNS, key);
}

const ProductRow = ({ index, item }: ProductRowProps) => {
	return (
		<>
			<Table.Cell align={align("#" as any)}> {index + 1}</Table.Cell>
			<Table.Cell align={align("code")}>{item.code}</Table.Cell>
			<Table.Cell
				nowrap
				align={align("name")}
			>
				{item.name}
			</Table.Cell>
			<Table.Cell
				nowrap
				align={align("brand")}
			>
				{item.brand.name}
			</Table.Cell>
			<Table.Cell
				nowrap
				align={align("category")}
			>
				<Chip
					label={item.category.name}
					color="primary"
				/>
			</Table.Cell>
			<Table.Cell
				nowrap
				align={align("subCategory")}
			>
				<Chip
					label={item.subCategory.name}
					color="secondary"
				/>
			</Table.Cell>
			<Table.Cell
				align={align("stock")}
				className="font-bold"
			>
				{item.stock}
			</Table.Cell>
			<Table.Cell
				nowrap
				align={align("cost")}
				className="font-bold text-danger"
			>
				{displayFormatedNumber(item.cost)}
			</Table.Cell>
			<Table.Cell
				nowrap
				align={align("price")}
				className="font-bold text-success"
			>
				{displayFormatedNumber(item.price)}
			</Table.Cell>
			<Table.Cell align={align("createdAt")}>
				{new DateRepository().parse({
					date: item.createdAt,
					format: "dma"
				})}
			</Table.Cell>
		</>
	);
};

export default ProductRow;
