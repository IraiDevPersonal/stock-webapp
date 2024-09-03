import { PropsWithChildren } from "react";
import { tw } from "@utils/functions/tailwind";
import Box from "../components/Box";

type HeaderProps = PropsWithChildren<{
	title: string;
	classNames?: {
		wrapper?: string;
		title?: string;
	};
}>;

const Header = ({ title, children, classNames }: HeaderProps) => {
	return (
		<Box
			as="header"
			className={tw("flex items-center gap-4 h-16 py-0", classNames?.wrapper)}
		>
			<h1 className={tw("text-2xl font-bold", classNames?.title)}>{title}</h1>
			{children}
		</Box>
	);
};

export default Header;
