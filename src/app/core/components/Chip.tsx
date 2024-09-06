import { createVariant, tw } from "@utils/functions/tailwind";
import { Color } from "@utils/types";
import { useId } from "react";

type ChipVariant = "light" | "flat" | "bordered";

type ChipProps = {
	color?: Color;
	variant?: ChipVariant;
	label: React.ReactNode;
	endContent?: JSX.Element;
	startContent?: JSX.Element;
	classNames?: Partial<{
		wrapper: string;
		label: string;
	}>;
};

const Chip = ({
	label,
	classNames,
	endContent,
	startContent,
	variant = "flat",
	color = "default"
}: ChipProps) => {
	const id = useId();
	return (
		<label
			htmlFor={id}
			className={tw(
				"flex items-center justify-center gap-2 rounded-lg text-sm w-max px-2 h-6",
				chipVariant({ color, variant }),
				classNames?.wrapper
			)}
		>
			{startContent}
			<span className={tw("font-semibold", classNames?.label)}>{label}</span>
			{endContent}
		</label>
	);
};

export default Chip;

const chipVariant = (props: { color: Color; variant: ChipVariant }) =>
	createVariant<ChipVariant>({
		...props,
		input: {
			flat: {
				secondary: "bg-secondary/15 text-secondary-600",
				warning: "bg-warning/15 text-warning",
				primary: "bg-primary/15 text-primary-600",
				success: "bg-success/15 text-success",
				default: "bg-default/15 text-default-700",
				danger: "bg-danger/15 text-danger",
				info: "bg-info/15 text-info"
			},
			light: {
				secondary: "text-secondary-600 bg-transparent",
				warning: "text-warning bg-transparent",
				primary: "text-primary-600 bg-transparent",
				success: "text-success bg-transparent",
				default: "text-default-700 bg-transparent",
				danger: "text-danger bg-transparent",
				info: "text-inf0 bg-transparent"
			},
			bordered: {
				secondary:
					"text-secondary-600 border-1 border-secondary bg-transparent",
				warning: "text-warning border-1 border-warning bg-transparent",
				primary: "text-primary-600 border-1 border-primary bg-transparent",
				success: "text-success border-1 border-success bg-transparent",
				default: "text-default-700 border-1 border-default bg-transparent",
				danger: "text-danger border-1 border-danger bg-transparent",
				info: "text-info border-1 border-info bg-transparent"
			}
		}
	});
