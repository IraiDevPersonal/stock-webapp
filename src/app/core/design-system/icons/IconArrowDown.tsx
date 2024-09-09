import { SvgAtributtes } from "@utils/types";
import IconWrapper from "./IconWrapper";

const IconArrowDown = (props?: SvgAtributtes) => {
	return (
		<IconWrapper {...props}>
			<path
				d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</IconWrapper>
	);
};

export default IconArrowDown;
