import { tw } from "@utils/functions/tailwind";
import Box from "../components/Box";

type Props = {
	className?: string;
	children:
		| React.ReactNode
		| ((defaultMainClassName: string) => React.ReactNode);
};

const Main = ({ children, className }: Props) => {
	return (
		<Box
			as="main"
			className={tw(DEFAULT_CLASSNAME, className)}
		>
			{typeof children === "function" ? children(DEFAULT_CLASSNAME) : children}
		</Box>
	);
};

export default Main;

const DEFAULT_CLASSNAME =
	"flex flex-col w-full max-w-full overflow-x-hidden gap-4 p-4 min-h-screen bg-default-100 bg-white";
