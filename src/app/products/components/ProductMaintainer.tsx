import MaintainerTemplate from "@app/core/design-system/MaintainerTemplate";
import { Product } from "../models/Product";
import { PRODUCTS_COLUMNS } from "../uitls/constants";
import ProductRow from "./ProductRow";
import ProductModal from "./ProductModal";

type ProductMaintainerProps = {
	items: Product[];
};

const ProductMaintainer = ({ items }: ProductMaintainerProps) => {
	return (
		<>
			<MaintainerTemplate
				title="Productos"
				tableDataset={items}
				tableColumns={PRODUCTS_COLUMNS}
				tableCells={(item, idx) => (
					<ProductRow
						index={idx}
						item={item}
					/>
				)}
			>
				{ProductModal}
			</MaintainerTemplate>
		</>
	);
};

export default ProductMaintainer;
