import { tw } from "@utils/functions/tailwind";
import { useId } from "react";

type Props = Partial<{
	icon: JSX.Element;
	className?: string;
	isDisabled: boolean;
	isSelected: boolean;
	children: React.ReactNode;
	onValueChange(value: boolean): void;
}>;

const Toggler = ({
	icon,
	children,
	className,
	isDisabled,
	isSelected,
	onValueChange
}: Props) => {
	const id = useId();
	return (
		<>
			<input
				hidden
				id={id}
				type="checkbox"
				className="peer"
				checked={isSelected}
				disabled={isDisabled}
				onChange={(e) => onValueChange?.(e.target.checked)}
			/>

			<label
				htmlFor={id}
				className={tw(
					"h-10 flex items-center gap-2 px-3 rounded-small cursor-pointer transition-colors",
					"peer-disabled:bg-transparent peer-disabled:text-default-400",
					"peer-disabled:cursor-not-allowed peer-disabled:select-none",
					"bg-default peer-checked:bg-primary w-max text-small",
					className
				)}
			>
				{icon ?? (
					// <IconCheck size={ICON_SIZE.DEFAULT} />
					<span>C</span>
				)}
				{children}
			</label>
		</>
	);
};
export default Toggler;
