import { path } from "@app/routes/path";
import { v4 } from "uuid";
import { Route } from "wouter";
import CategoriesMaintainer from "../components/CategoriesMaintainer";
import { Category } from "../models/Category";

const CategoriesPage = () => {
	return (
		<Route path={path.private.categories}>
			<CategoriesMaintainer items={CATEGORIES} />
		</Route>
	);
};

export default CategoriesPage;

const CATEGORIES: Category[] = [
	{
		id: v4(),
		key: "mascotas",
		name: "Mascotas"
	}
];
