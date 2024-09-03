import { tw } from "@utils/functions/tailwind";
import { FilterToggleItem } from "@utils/types";
import ArrayMap from "./ArrayMap";
import Button from "./Button";

type FilterToggleButtonsProps = {
	onSelectValue?(value: FilterToggleItem["value"]): void;
	options: FilterToggleItem[];
	value?: string;
	classNames?: Partial<{
		wrapper: string;
		item: string;
	}>;
};

type Option = FilterToggleItem & { isActive: boolean };

const ToggleButtons = ({
	value,
	options,
	classNames,
	onSelectValue
}: FilterToggleButtonsProps) => {
	return (
		<>
			<ArrayMap
				as="ul"
				dataset={options.map<Option>((el) => ({
					...el,
					isActive: value === el.value
				}))}
				className={tw("flex flex-wrap items-center gap-2", classNames?.wrapper)}
			>
				{(item) => (
					<Button
						key={item.value}
						className={classNames?.item}
						endContent={item.endContent}
						startContent={item.startContent}
						onClick={() => onSelectValue?.(item.value)}
						color={item.isActive ? "primary" : "default"}
					>
						{item.label}
					</Button>
				)}
			</ArrayMap>
		</>
	);
};

export default ToggleButtons;
