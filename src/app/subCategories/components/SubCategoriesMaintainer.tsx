import MaintainerTemplate from "@app/core/design-system/MaintainerTemplate";
import { SubCategory } from "../models/SubCategory";
import { SUB_CATEGORIES_COLUMNS } from "../utils/constants";
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
				tableItems={items}
				tableColumns={SUB_CATEGORIES_COLUMNS}
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
