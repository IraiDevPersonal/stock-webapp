import { tw } from "@utils/functions/tailwind";
import { Color } from "@utils/types";

type CircularProgressProps = {
	classNames?: Partial<{
		progress: string;
		label: string;
		base: string;
	}>;
	label?: React.ReactNode;
	strokeWidth?: number;
	isInfinite?: boolean;
	progress?: number;
	color?: Color;
	size?: number;
};

const CircularProgress = ({
	label,
	size = 50,
	classNames,
	progress = 0,
	strokeWidth = 4,
	color = "success",
	isInfinite = false
}: CircularProgressProps) => {
	if (isInfinite) {
		progress = 20;
	}

	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset = circumference - (progress / 100) * circumference;

	return (
		<div className="flex items-center justify-center relative">
			<svg
				width={size}
				height={size}
				viewBox={`0 0 ${size} ${size}`}
				className={tw(isInfinite ? "animate-spin" : "transform -rotate-90")}
			>
				<circle
					r={radius}
					fill="none"
					cx={size / 2}
					cy={size / 2}
					strokeWidth={strokeWidth}
					className={tw("stroke-default-200", classNames?.base)}
				/>
				<circle
					r={radius}
					fill="none"
					cx={size / 2}
					cy={size / 2}
					strokeWidth={strokeWidth}
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
					className={tw(
						"transition-all duration-300",
						progressColor[color],
						classNames?.progress
					)}
				/>
			</svg>
			<span
				style={{
					top: "50%",
					left: "50%",
					fontSize: size / 4,
					textAnchor: "middle"
				}}
				className={tw(
					"fill-default-600 absolute -translate-x-1/2 -translate-y-1/2",
					classNames?.label
				)}
			>
				{label ?? progress}
			</span>
		</div>
	);
};

export default CircularProgress;

const progressColor: Record<Color, string> = {
	danger: "stroke-danger",
	default: "stroke-default-950",
	info: "stroke-info",
	primary: "stroke-primary",
	secondary: "stroke-secondary",
	success: "stroke-success",
	warning: "stroke-warning"
};
