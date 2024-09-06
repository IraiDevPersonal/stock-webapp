import { path } from "@app/routes/path";
import IconHome from "../design-system/icons/IconHome";
import { Path } from "../models/Path";
import ProductsPage from "@app/products/pages/ProductsPage";
import CategoriesPage from "@app/categories/pages/CategoriesPage";
import SubCategoriesPage from "@app/subCategories/pages/SubCategoriesPage";
import BrandsPage from "@app/brands/pages/BrandsPage";

export const PATHS_WITH_PAGE: (Path & { page: React.ReactNode })[] = [
	{
		icon: IconHome(),
		label: "Home",
		path: path.private.home,
		page: ProductsPage()
	},
	{
		icon: IconHome(),
		label: "Categorias",
		path: path.private.categories,
		page: CategoriesPage()
	},
	{
		icon: IconHome(),
		label: "Sub Categorias",
		path: path.private.subCategories,
		page: SubCategoriesPage()
	},
	{
		icon: IconHome(),
		label: "Marcas",
		path: path.private.brands,
		page: BrandsPage()
	}
];

export const buildPages = () =>
	PATHS_WITH_PAGE.map((el) => ({
		key: el.path,
		component: el.page
	}));

export const PATHS: Path[] = PATHS_WITH_PAGE.map((el) => {
	return {
		icon: el.icon,
		path: el.path,
		label: el.label
	};
});
