import { tw } from "@utils/functions/tailwind";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

type Props = {
	showDivider?: boolean;
	trigger: React.ReactNode;
	children: React.ReactNode;
	align?: "center" | "end" | "start";
	side?: "bottom" | "top" | "right" | "left";
};

export default function Dropdown({
	children,
	trigger,
	showDivider,
	align = "end",
	side = "bottom"
}: Props) {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger className="outline-none">
				{trigger}
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content
					side={side}
					align={align}
					sideOffset={5}
					className={tw(
						"min-w-[220px] bg-white rounded-xl shadow-md p-1",
						"data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade",
						"data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
						"will-change-[opacity,transform] duration-300",
						showDivider && "divide-y divide-default-200"
					)}
				>
					{children}
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}

type DropdownItemProps = {
	endContent?: React.ReactNode;
	startContent?: React.ReactNode;
} & DropdownMenu.DropdownMenuItemProps;

Dropdown.Item = function DropdownItem({
	children,
	className,
	endContent,
	startContent,
	...props
}: DropdownItemProps) {
	return (
		<DropdownMenu.Item
			{...props}
			className={tw(
				"flex items-center gap-2 outline-none p-1.5 hover:bg-default-100 text-default",
				"data-[disabled]:cursor-default data-[disabled]:bg-transparent data-[disabled]:text-default-400",
				"cursor-pointer rounded-lg max-w-xl",
				"transition-colors duration-300",
				className
			)}
		>
			{startContent}
			<span className="flex-1 truncate">{children}</span>
			{endContent}
		</DropdownMenu.Item>
	);
};
