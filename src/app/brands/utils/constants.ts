import { TableColumn } from "@utils/types";
import { Brand } from "../models/Brand";

export const BRANDS_COLUMNS: TableColumn<keyof Brand>[] = [
	{ align: "right", children: "#", key: "#" as any },
	{ align: "left", children: "identificador", key: "key" },
	{ align: "left", children: "Nombre", key: "name" }
];
