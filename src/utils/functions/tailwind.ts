import { Color, Variant } from "@utils/types";
import { ClassNameValue, twMerge } from "tailwind-merge";

export function tw(...arg: ClassNameValue[]) {
	return twMerge(...arg);
}

export function createVariant<V extends string = Variant>({
	color,
	input,
	variant
}: {
	color: Color;
	variant: V;
	input: Record<V, Record<Color, string>>;
}): string {
	return input[variant][color];
}
