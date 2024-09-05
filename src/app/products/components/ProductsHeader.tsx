import Button from "@app/core/components/Button";
import Header from "@app/core/design-system/Header";
import IconPlus from "@app/core/design-system/icons/IconPlus";

const ProductsHeader = () => {
	return (
		<>
			<Header title="Productos">
				<Button
					isIconOnly
					variant="light"
					color="default"
					title="Crear producto"
				>
					<IconPlus />
				</Button>
			</Header>
		</>
	);
};

export default ProductsHeader;
