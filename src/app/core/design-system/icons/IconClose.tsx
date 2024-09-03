import { SvgAtributtes } from "@utils/types";
import IconWrapper from "./IconWrapper";

const IconClose = (props?: SvgAtributtes) => {
	return (
		<IconWrapper {...props}>
			<path
				d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</IconWrapper>
	);
};

export default IconClose;
