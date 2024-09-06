import Input from "@app/core/components/Input";
import MaintainerModalTemplate from "@app/core/design-system/MaintainerModalTemplate";
import { MaintainerChildrenProps } from "@app/core/design-system/MaintainerTemplate";
import { SubCategory } from "../models/SubCategory";
import Select from "@app/core/components/Select";

type SubCategorytModalProps = MaintainerChildrenProps & {
	initialState?: SubCategory;
};

const SubCategoryModal = ({
	title,
	initialState,
	...props
}: SubCategorytModalProps) => {
	return (
		<MaintainerModalTemplate
			{...props}
			classNames={{
				wrapper: "max-w-sm"
			}}
			title={title.slice(0, -1)}
			hasUpdateModal={!!initialState}
		>
			<Input
				fullwidth
				label="identificador"
			/>
			<Input
				fullwidth
				label="Nombre"
			/>
			<Select
				fullwidth
				label="Categoria"
			/>
		</MaintainerModalTemplate>
	);
};

export default SubCategoryModal;
