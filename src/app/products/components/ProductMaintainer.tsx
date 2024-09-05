import MaintainerTemplate from "@app/core/design-system/MaintainerTemplate";
import { Product } from "../models/Product";
import { PRODUCTS_COLUMNS } from "../uitls/constants";
import ProductRow from "./ProductRow";
import ProductModal from "./ProductModal";

type ProductMaintainerProps = {
	products: Product[];
};

const ProductMaintainer = ({ products }: ProductMaintainerProps) => {
	return (
		<>
			<MaintainerTemplate
				title="Productos"
				tableDataset={products}
				tableColumns={PRODUCTS_COLUMNS}
				tableCells={(item, idx) => (
					<ProductRow
						index={idx}
						product={item}
					/>
				)}
			>
				{ProductModal}
			</MaintainerTemplate>
		</>
	);
};

export default ProductMaintainer;
