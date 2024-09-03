import { SvgAtributtes } from "@utils/types";
import IconWrapper from "./IconWrapper";

const IconFoodTable = (props?: SvgAtributtes) => {
	return (
		<IconWrapper {...props}>
			<ellipse
				cx="12"
				cy="6.5"
				rx="10"
				ry="3"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M12 20.5C12.8284 20.5 13.5898 20.2551 14.1904 19.8455C14.4774 19.6498 14.5909 19.242 14.4189 18.9153C14.0734 18.2595 13.3308 17.5 12 17.5C10.6692 17.5 9.92656 18.2595 9.58115 18.9153C9.40905 19.242 9.52257 19.6498 9.8096 19.8455C10.4102 20.2551 11.1716 20.5 12 20.5Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
			<path
				d="M12 17.5V9.5"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</IconWrapper>
	);
};

export default IconFoodTable;
