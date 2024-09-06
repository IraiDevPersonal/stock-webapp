import { Category } from "@app/categories/models/Category";
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
	category: Category;
	subCategory: string;
	createdAt: DateValue;
};
