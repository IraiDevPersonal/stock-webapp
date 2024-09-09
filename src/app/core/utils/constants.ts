import BrandsPage from "@app/brands/pages/BrandsPage";
import CategoriesPage from "@app/categories/pages/CategoriesPage";
import ProductsPage from "@app/products/pages/ProductsPage";
import { path } from "@app/routes/path";
import SubCategoriesPage from "@app/subCategories/pages/SubCategoriesPage";
import IconBrand from "../design-system/icons/IconBrand";
import IconCategory from "../design-system/icons/IconCategory";
import IconHome from "../design-system/icons/IconHome";
import IconProduct from "../design-system/icons/IconProduct";
import IconSubCategory from "../design-system/icons/IconSubCategory";
import { Path } from "../models/Path";
import HomePage from "../pages/HomePage";

export const PATHS_WITH_PAGE: Path[] = [
	{
		icon: IconHome(),
		label: "Inicio",
		path: path.private.home,
		page: HomePage()
	},
	{
		icon: IconProduct(),
		label: "Mantenedores",
		path: "",
		page: null,
		items: [
			{
				icon: IconProduct(),
				label: "Productos",
				path: path.private.products,
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
				page: BrandsPage(),
				items: [
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
				]
			}
		]
	}
];

type BuilderPage = {
	key: string;
	component: React.ReactNode;
};

export const pagesBuilder = (items: Path[]): BuilderPage[] =>
	items.flatMap((el) => {
		return [
			{
				key: el.path,
				component: el.page
			},
			...pagesBuilder(el.items ?? [])
		].filter((el) => el.key !== "");
	});

const pathsBuilder = (items: Path[]): Path[] => {
	return items.map((el) => ({
		page: null,
		icon: el.icon,
		path: el.path,
		label: el.label,
		items: pathsBuilder(el.items ?? [])
	}));
};

export const PATHS = pathsBuilder(PATHS_WITH_PAGE);
