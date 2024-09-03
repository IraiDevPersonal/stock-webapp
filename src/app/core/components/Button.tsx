import { Color, ButtonAtributtes, Variant } from "@utils/types";
import { createVariant, tw } from "@utils/functions/tailwind";

type Props = ButtonAtributtes &
	Partial<{
		startContent: React.ReactNode;
		endContent: React.ReactNode;
		isIconOnly: boolean;
		isLoading: boolean;
		fullwidth: boolean;
		variant: Variant;
		color: Color;
	}>;

const Button = ({
	variant = "filled",
	color = "primary",
	startContent,
	endContent,
	isIconOnly,
	isLoading,
	fullwidth,
	className,
	children,
	...props
}: Props) => {
	return (
		<button
			type="button"
			{...props}
			disabled={props.disabled || isLoading}
			className={tw(
				"flex items-center gap-2 rounded-xl w-max justify-center focus:outline-primary",
				"disabled:bg-default-200 disabled:text-default-400 font-medium",
				"px-3 h-9",
				buttonVariant({ color, variant }),
				fullwidth && "w-full",
				className,
				isIconOnly && "w-9 min-w-9 px-0",
				"transition-colors duration-300"
			)}
		>
			{isLoading ? <span className="animate-spin">L</span> : startContent}
			{!(isIconOnly && isLoading) && children}
			{endContent}
		</button>
	);
};

export default Button;

const buttonVariant = (props: { color: Color; variant: Variant }) =>
	createVariant({
		...props,
		input: {
			filled: {
				secondary: "bg-secondary hover:bg-opacity-80 text-white",
				warning: "bg-warning hover:bg-opacity-80 text-white",
				primary: "bg-primary hover:bg-opacity-80 text-white",
				success: "bg-success hover:bg-opacity-80 text-white",
				default: "bg-default-200 hover:bg-opacity-80 text-inherit",
				danger: "bg-danger hover:bg-opacity-80 text-white",
				info: "bg-info hover:bg-opacity-80 text-white"
			},
			light: {
				secondary:
					"disabled:bg-transparent disabled:text-default-300 text-secondary hover:bg-secondary/10",
				warning:
					"disabled:bg-transparent disabled:text-default-300 text-warning hover:bg-warning/10",
				primary:
					"disabled:bg-transparent disabled:text-default-300 text-primary hover:bg-primary/10",
				success:
					"disabled:bg-transparent disabled:text-default-300 text-success hover:bg-success/10",
				default:
					"disabled:bg-transparent disabled:text-default-300 text-default hover:bg-default/10",
				danger:
					"disabled:bg-transparent disabled:text-default-300 text-danger hover:bg-danger/10",
				info: "disabled:bg-transparent disabled:text-default-300 text-info hover:bg-info/10"
			}
		}
	});
