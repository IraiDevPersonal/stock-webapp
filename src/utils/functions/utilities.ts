import { Align, TableColumn } from "@utils/types";

export function getColAlign<T extends string>(
	dataset: TableColumn[],
	key: T,
	defaultAlign: Align = "center"
) {
	return dataset.find((item) => item.key === key)?.align ?? defaultAlign;
}
