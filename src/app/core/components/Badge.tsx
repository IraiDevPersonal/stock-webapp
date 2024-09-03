import { createVariant, tw } from "@utils/functions/tailwind";
import { Color } from "@utils/types";

type BadgeProps = {
	color?: Color;
	value: number;
	className?: string;
};

const Badge = ({ color = "danger", value, className }: BadgeProps) => {
	const displayValue = value > 99 ? "99+" : value;
	return (
		<>
			<span
				title={value.toString()}
				className={tw(
					"h-5 min-w-5 px-1.5 rounded-full leading-none flex items-center text-sm",
					badgeVariant({ color }),
					className
				)}
			>
				{displayValue}
			</span>
		</>
	);
};

export default Badge;

const badgeVariant = ({ color }: { color: Color }) =>
	createVariant({
		color,
		variant: "filled",
		input: {
			filled: {
				secondary: "bg-secondary text-white",
				warning: "bg-warning text-white",
				primary: "bg-primary text-white",
				success: "bg-success text-white",
				default: "bg-default-900/15 text-inherit",
				danger: "bg-danger text-white",
				info: "bg-info text-white"
			}
		}
	});
