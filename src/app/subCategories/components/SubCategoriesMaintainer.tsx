import MaintainerTemplate from "@app/core/design-system/MaintainerTemplate";
import { SubCategory } from "../models/SubCategory";
import { CATEGORIES_COLUMNS } from "../uitls/constants";
import SubCategoryRow from "./SubCategoryRow";
import SubCategoryModal from "./SubCategoryModal";

type SubCategoryMaintainerProps = {
	items: SubCategory[];
};

const SubCategoriesMaintainer = ({ items }: SubCategoryMaintainerProps) => {
	return (
		<>
			<MaintainerTemplate
				title="Sub Categorias"
				tableDataset={items}
				tableColumns={CATEGORIES_COLUMNS}
				tableCells={(item, idx) => (
					<SubCategoryRow
						index={idx}
						item={item}
					/>
				)}
			>
				{SubCategoryModal}
			</MaintainerTemplate>
		</>
	);
};

export default SubCategoriesMaintainer;
