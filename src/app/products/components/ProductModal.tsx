import MaintainerModalTemplate from "@app/core/design-system/MaintainerModalTemplate";
import { MaintainerChildrenProps } from "@app/core/design-system/MaintainerTemplate";
import { Product } from "../models/Product";
import Input from "@app/core/components/Input";
import Select from "@app/core/components/Select";

type ProductModalProps = MaintainerChildrenProps & {
	initialState?: Product;
};

const ProductModal = ({ title, initialState, ...props }: ProductModalProps) => {
	return (
		<MaintainerModalTemplate
			{...props}
			classNames={{
				wrapper: "max-w-4xl",
				body: "grid grid-cols-2 gap-x-4"
			}}
			title={title.slice(0, -1)}
			hasUpdateModal={!!initialState}
		>
			<Input
				fullwidth
				label="Código"
			/>
			<Input
				fullwidth
				label="Nombre"
			/>
			<Select
				fullwidth
				label="Marca"
			/>
			<Select
				fullwidth
				label="Categoria"
			/>
			<Select
				fullwidth
				label="Tipo"
			/>
			<Input
				fullwidth
				label="Stock"
			/>
			<Input
				fullwidth
				label="Precio Costo"
			/>
			<Input
				fullwidth
				label="Precio Venta"
			/>
			<Input
				fullwidth
				type="date"
				label="Fecha Creación"
			/>
		</MaintainerModalTemplate>
	);
};

export default ProductModal;
