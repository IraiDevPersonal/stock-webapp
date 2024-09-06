import { TableColumn } from "@utils/types";
import { SubCategory } from "../models/SubCategory";

export const CATEGORIES_COLUMNS: TableColumn<keyof SubCategory>[] = [
	{ align: "right", children: "#", key: "#" as any },
	{ align: "left", children: "identificador", key: "key" },
	{ align: "left", children: "Nombre", key: "name" }
];
