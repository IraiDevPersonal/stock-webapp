import { SvgAtributtes } from "@utils/types";
import IconWrapper from "./IconWrapper";

const IconPlus = (props?: SvgAtributtes) => (
	<IconWrapper {...props}>
		<path
			d="M12 4V20M20 12H4"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</IconWrapper>
);

export default IconPlus;
