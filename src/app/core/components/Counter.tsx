import { tw } from "@utils/functions/tailwind";
import IconMinus from "../design-system/icons/IconMinus";
import IconPlus from "../design-system/icons/IconPlus";
import Button from "./Button";

type CounterProps = {
	max: number;
	value: number;
	classNames?: Partial<{
		wrapper: string;
		value: string;
	}>;
	onChange(value: number): void;
};

const Counter = ({ max, value, classNames, onChange }: CounterProps) => {
	return (
		<div className={tw("flex items-center gap-2 w-max", classNames?.wrapper)}>
			<Button
				isIconOnly
				variant="light"
				color="default"
				disabled={value <= 0}
				onClick={() => onChange(Math.max(0, value - 1))}
			>
				<IconMinus />
			</Button>
			<span
				title={`Maximo ${max}`}
				className={tw(
					"text-lg font-semibold w-4 text-center",
					classNames?.value
				)}
			>
				{value}
			</span>
			<Button
				isIconOnly
				variant="light"
				color="default"
				disabled={value >= max}
				onClick={() => onChange(Math.min(max, value + 1))}
			>
				<IconPlus />
			</Button>
		</div>
	);
};

export default Counter;
