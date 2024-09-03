import Button from "@app/core/components/Button";
import IconLogout from "@app/core/design-system/icons/IconLogout";

const Logout = () => {
	return (
		<>
			<Button
				isIconOnly
				variant="light"
				color="default"
				title="Cerrar Sesión"
			>
				<IconLogout />
			</Button>
		</>
	);
};

export default Logout;
