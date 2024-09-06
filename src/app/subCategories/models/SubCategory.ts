import { Category } from "@app/categories/models/Category";

export type SubCategory = {
	id: string;
	key: string;
	name: string;
	category: Category;
};
