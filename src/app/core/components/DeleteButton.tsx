import { Color, Variant } from "@utils/types";
import IconTrash from "../design-system/icons/IconTrash";
import Button from "./Button";
import { AlertStore } from "../stores/AlertStore";

type DeleteButtonProps = {
	shouldShowAlertDialog?: boolean;
	alert?: Partial<{
		shouldSetIsLoading: boolean;
		children: React.ReactNode;
		confirmLabel: string;
		title: string;
	}>;
	fullwidth?: boolean;
	disabled?: boolean;
	variant?: Variant;
	onDelete(): void;
	label?: string;
	color?: Color;
};

const DeleteButton = ({
	shouldShowAlertDialog = true,
	color = "default",
	variant = "light",
	fullwidth,
	onDelete,
	disabled,
	alert,
	label
}: DeleteButtonProps) => {
	const createAlert = AlertStore((s) => s.createAlert);

	const handleDelete = () => {
		if (shouldShowAlertDialog) {
			createAlert({
				shouldSetIsLoading: alert?.shouldSetIsLoading,
				title: alert?.title ?? "Atención",
				children: alert?.children,
				isOpen: true,
				confirm: {
					label: alert?.confirmLabel,
					handler: () => onDelete()
				}
			});
			return;
		}
		onDelete();
	};

	return (
		<>
			<Button
				endContent={label ? <IconTrash /> : undefined}
				onClick={handleDelete}
				fullwidth={fullwidth}
				isIconOnly={!label}
				disabled={disabled}
				variant={variant}
				color={color}
			>
				{label ?? <IconTrash />}
			</Button>
		</>
	);
};

export default DeleteButton;
