import MaintainerTemplate from "@app/core/design-system/MaintainerTemplate";
import { Category } from "../models/Category";
import { CATEGORIES_COLUMNS } from "../uitls/constants";
import CategoryRow from "./CategoryRow";
import CategoryModal from "./CategoryModal";

type CategoryMaintainerProps = {
	items: Category[];
};

const CategoriesMaintainer = ({ items }: CategoryMaintainerProps) => {
	return (
		<>
			<MaintainerTemplate
				title="Categorias"
				tableItems={items}
				tableColumns={CATEGORIES_COLUMNS}
				tableCells={(item, idx) => (
					<CategoryRow
						index={idx}
						item={item}
					/>
				)}
			>
				{CategoryModal}
			</MaintainerTemplate>
		</>
	);
};

export default CategoriesMaintainer;
