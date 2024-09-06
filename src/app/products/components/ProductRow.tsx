import Table from "@app/core/components/Table";
import { Product } from "../models/Product";
import { getColAlign } from "@utils/functions/utilities";
import { PRODUCTS_COLUMNS } from "../uitls/constants";
import { displayFormatedNumber } from "@utils/functions/displayFormatedNumber";
import { DateRepository } from "@utils/repositories/DateRepository";
import Chip from "@app/core/components/Chip";

type ProductRowProps = {
	product: Product;
	index: number;
};

function align(key: keyof Product) {
	return getColAlign(PRODUCTS_COLUMNS, key);
}

const ProductRow = ({ index, product }: ProductRowProps) => {
	return (
		<>
			<Table.Cell align={align("#" as any)}> {index + 1}</Table.Cell>
			<Table.Cell align={align("code")}>{product.code}</Table.Cell>
			<Table.Cell
				nowrap
				align={align("name")}
			>
				{product.name}
			</Table.Cell>
			<Table.Cell
				nowrap
				align={align("brand")}
			>
				{product.brand}
			</Table.Cell>
			<Table.Cell
				nowrap
				align={align("category")}
			>
				<Chip
					label={product.category}
					color="primary"
				/>
			</Table.Cell>
			<Table.Cell
				nowrap
				align={align("subCategory")}
			>
				<Chip
					label={product.subCategory}
					color="secondary"
				/>
			</Table.Cell>
			<Table.Cell
				align={align("stock")}
				className="font-bold"
			>
				{product.stock}
			</Table.Cell>
			<Table.Cell
				nowrap
				align={align("cost")}
				className="font-bold text-danger"
			>
				{displayFormatedNumber(product.cost)}
			</Table.Cell>
			<Table.Cell
				nowrap
				align={align("price")}
				className="font-bold text-success"
			>
				{displayFormatedNumber(product.price)}
			</Table.Cell>
			<Table.Cell align={align("createdAt")}>
				{new DateRepository().parse({
					date: product.createdAt,
					format: "dma"
				})}
			</Table.Cell>
		</>
	);
};

export default ProductRow;
