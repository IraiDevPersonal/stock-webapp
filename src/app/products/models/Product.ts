import { Brand } from "@app/brands/models/Brand";
import { Category } from "@app/categories/models/Category";
import { SubCategory } from "@app/subCategories/models/SubCategory";
import { DateValue } from "@utils/types";

export type Product = {
	id: string;
	code: number;
	name: string;
	stock: number;
	cost: number;
	price: number;
	image: string;
	brand: Brand;
	category: Category;
	createdAt: DateValue;
	subCategory: Omit<SubCategory, "category">;
};
