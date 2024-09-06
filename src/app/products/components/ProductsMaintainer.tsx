import MaintainerTemplate from "@app/core/design-system/MaintainerTemplate";
import { Product } from "../models/Product";
import { PRODUCTS_COLUMNS } from "../utils/constants";
import ProductRow from "./ProductRow";
import ProductModal from "./ProductModal";

type ProductMaintainerProps = {
	items: Product[];
};

const ProductsMaintainer = ({ items }: ProductMaintainerProps) => {
	return (
		<>
			<MaintainerTemplate
				title="Productos"
				tableItems={items}
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

export default ProductsMaintainer;
