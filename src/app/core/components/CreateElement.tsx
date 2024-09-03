import { HtmlElements } from "@utils/types";
import { createElement } from "react";

type Props<T extends HTMLElement | unknown = HTMLElement> = {
	ref: React.RefObject<HTMLElement>;
	children: React.ReactNode;
	className: string;
	as: HtmlElements;
} & React.HTMLAttributes<T>;

const CreateElement = ({ as = "div", children, ...props }: Partial<Props>) => {
	return createElement(as, props, children);
};

export default CreateElement;
