import { path } from "@app/routes/path";
import { v4 } from "uuid";
import { Route } from "wouter";
import SubCategoriesMaintainer from "../components/SubCategoriesMaintainer";
import { SubCategory } from "../models/SubCategory";

const SubCategoriesPage = () => {
	return (
		<Route path={path.private.categories}>
			<SubCategoriesMaintainer items={SUB_CATEGORIES} />
		</Route>
	);
};

export default SubCategoriesPage;

const SUB_CATEGORIES: SubCategory[] = [
	{
		id: v4(),
		key: "mascotas",
		name: "Mascotas"
	}
];
