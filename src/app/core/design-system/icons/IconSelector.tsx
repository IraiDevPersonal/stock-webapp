import { SvgAtributtes } from "@utils/types";
import IconWrapper from "./IconWrapper";

const IconSelector = (props?: SvgAtributtes) => (
	<IconWrapper {...props}>
		<path
			d="M8 6.99997C8 6.99997 10.946 3.00001 12 3C13.0541 2.99999 16 7 16 7"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M16 17C16 17 13.054 21 12 21C10.9459 21 8 17 8 17"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</IconWrapper>
);

export default IconSelector;
