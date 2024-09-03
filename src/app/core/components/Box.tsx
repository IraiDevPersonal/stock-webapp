import CreateElement from "./CreateElement";
import { tw } from "@utils/functions/tailwind";
import { HtmlElements } from "@utils/types";

type Props<T extends HTMLElement = HTMLDivElement> = {
	as: HtmlElements;
	className: string;
	children: React.ReactNode;
	ref: React.RefObject<HTMLElement>;
} & React.HTMLAttributes<T>;

const Box = <T extends HTMLElement>({
	as,
	children,
	className,
	ref,
	...props
}: Partial<Props<T>>) => {
	return (
		<CreateElement
			{...props}
			as={as}
			ref={ref}
			className={tw("p-4 bg-white", className)}
		>
			{children}
		</CreateElement>
	);
};

export default Box;
