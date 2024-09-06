import Input from "@app/core/components/Input";
import MaintainerModalTemplate from "@app/core/design-system/MaintainerModalTemplate";
import { MaintainerChildrenProps } from "@app/core/design-system/MaintainerTemplate";
import { Brand } from "../models/Brand";

type BrandtModalProps = MaintainerChildrenProps & {
	initialState?: Brand;
};

const BrandModal = ({ title, initialState, ...props }: BrandtModalProps) => {
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
		</MaintainerModalTemplate>
	);
};

export default BrandModal;
