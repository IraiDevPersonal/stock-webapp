import { DateValue } from "@utils/types";

export type Product = {
	id: string;
	code: number;
	name: string;
	brand: string;
	stock: number;
	cost: number;
	price: number;
	image: string;
	category: string;
	subCategory: string;
	createdAt: DateValue;
};
