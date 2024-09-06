import MaintainerTemplate from "@app/core/design-system/MaintainerTemplate";
import { Brand } from "../models/Brand";
import { BRANDS_COLUMNS } from "../utils/constants";
import BrandRow from "./BrandRow";
import BrandModal from "./BrandModal";

type BrandMaintainerProps = {
	items: Brand[];
};

const BrandsMaintainer = ({ items }: BrandMaintainerProps) => {
	return (
		<>
			<MaintainerTemplate
				title="Marcas"
				tableItems={items}
				tableColumns={BRANDS_COLUMNS}
				tableCells={(item, idx) => (
					<BrandRow
						index={idx}
						item={item}
					/>
				)}
			>
				{BrandModal}
			</MaintainerTemplate>
		</>
	);
};

export default BrandsMaintainer;
