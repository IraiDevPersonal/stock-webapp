import { SvgAtributtes } from "@utils/types";
import IconWrapper from "./IconWrapper";

const IconMinus = (props?: SvgAtributtes) => {
	return (
		<IconWrapper {...props}>
			<path
				d="M20 12L4 12"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</IconWrapper>
	);
};

export default IconMinus;
