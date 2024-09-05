import Modal from "../components/Modal";
import { MaintainerChildrenProps } from "./MaintainerTemplate";

type MaintainerModalTemplateProps = MaintainerChildrenProps & {
	children: React.ReactNode;
	hasUpdateModal?: boolean;
	classNames?: Partial<{
		wrapper: string;
		body: string;
	}>;
};

const MaintainerModalTemplate = ({
	hasUpdateModal,
	classNames,
	children,
	title,
	...props
}: MaintainerModalTemplateProps) => {
	return (
		<Modal
			{...props}
			classNames={{
				wrapper: classNames?.wrapper
			}}
		>
			<Modal.Title>
				{hasUpdateModal ? "Editar" : "Crear"} {title}
			</Modal.Title>
			<Modal.Body className={classNames?.body}>{children}</Modal.Body>
			<Modal.Actions
				cancel={{
					handler: () => {
						props.onClose();
					}
				}}
				action={{
					label: "Guardar",
					type: "submit"
				}}
			/>
		</Modal>
	);
};

export default MaintainerModalTemplate;
