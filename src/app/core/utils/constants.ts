import { path } from "@app/routes/path";
import IconHome from "../design-system/icons/IconHome";
import { Path } from "../models/Path";
import ProductsPage from "@app/products/pages/ProductsPage";
import CategoriesPage from "@app/categories/pages/CategoriesPage";
import SubCategoriesPage from "@app/subCategories/pages/SubCategoriesPage";
import BrandsPage from "@app/brands/pages/BrandsPage";
import IconProduct from "../design-system/icons/IconProduct";
import IconCategory from "../design-system/icons/IconCategory";
import IconBrand from "../design-system/icons/IconBrand";
import IconSubCategory from "../design-system/icons/IconSubCategory";

export const PATHS_WITH_PAGE: (Path & { page: React.ReactNode })[] = [
	{
		icon: IconProduct(),
		label: "Home",
		path: path.private.home,
		page: ProductsPage()
	},
	{
		icon: IconCategory(),
		label: "Categorias",
		path: path.private.categories,
		page: CategoriesPage()
	},
	{
		icon: IconSubCategory(),
		label: "Sub Categorias",
		path: path.private.subCategories,
		page: SubCategoriesPage()
	},
	{
		icon: IconBrand(),
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
