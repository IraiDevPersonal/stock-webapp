import { ICON_SIZE } from "@utils/constants";
import { SvgAtributtes } from "@utils/types";

const IconWrapper = ({ children, ...props }: SvgAtributtes) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={ICON_SIZE}
			height={ICON_SIZE}
			fill={"none"}
			{...props}
		>
			{children}
		</svg>
	);
};

export default IconWrapper;
