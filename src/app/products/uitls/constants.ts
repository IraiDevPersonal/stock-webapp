import { TableColumn } from "@utils/types";
import { Product } from "../models/Product";

export const PRODUCTS_COLUMNS: TableColumn<keyof Product>[] = [
	{ align: "right", children: "#", key: "#" as any },
	{ align: "right", children: "Código", key: "code" },
	{ align: "left", children: "Nombre", key: "name" },
	{ align: "left", children: "Marca", key: "brand" },
	{ align: "left", children: "Categoria", key: "category" },
	{ align: "left", children: "Sub Categoria", key: "type" },
	{ align: "right", children: "Stock", key: "stock" },
	{ align: "right", children: "Precio Costo ($)", key: "cost" },
	{ align: "right", children: "Precio Venta ($)", key: "price" },
	{
		align: "center",
		children: "Fecha Creación",
		key: "createdAt",
		title: "Fecha en la que se agrego al sistema."
	}
];
