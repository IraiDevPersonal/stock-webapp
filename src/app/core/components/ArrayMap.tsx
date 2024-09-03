import CreateElement from "./CreateElement";
import { HtmlElements } from "@utils/types";

type ArrayMapProps<T> = {
	dataset: T[];
	as?: HtmlElements;
	className?: string;
	emptyContent?: React.ReactNode;
	children(item: T, index: number): React.ReactNode;
};

function ArrayMap<T>({
	as,
	dataset,
	children,
	className,
	emptyContent = "No hay items..."
}: ArrayMapProps<T>) {
	const content =
		dataset.length === 0
			? emptyContent
			: dataset.map((item, idx) => children(item, idx));

	if (as) {
		return (
			<CreateElement
				as={as}
				className={className}
			>
				{content}
			</CreateElement>
		);
	}

	return content;
}

export default ArrayMap;
