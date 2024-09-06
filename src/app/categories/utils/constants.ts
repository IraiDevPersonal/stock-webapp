import { TableColumn } from "@utils/types";
import { Category } from "../models/Category";

export const CATEGORIES_COLUMNS: TableColumn<keyof Category>[] = [
	{ align: "right", children: "#", key: "#" as any },
	{ align: "left", children: "identificador", key: "key" },
	{ align: "left", children: "Nombre", key: "name" }
];
