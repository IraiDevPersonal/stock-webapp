import { SvgAtributtes } from "@utils/types";
import IconWrapper from "./IconWrapper";

const IconCheck = (props?: SvgAtributtes) => {
	return (
		<IconWrapper {...props}>
			<path
				d="M5 14L8.5 17.5L19 6.5"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</IconWrapper>
	);
};

export default IconCheck;
