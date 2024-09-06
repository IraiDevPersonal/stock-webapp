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

export const PATHS_WITH_PAGE: Path[] = [
	{
		icon: IconHome(),
		label: "Inicio",
		path: path.private.home,
		page: "Inicio"
	},
	{
		icon: IconProduct(),
		label: "Mantenedores",
		path: "",
		page: ProductsPage(),
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
	items: BuilderPage[];
};

const builderPages = (items: Path[]): BuilderPage[] =>
	items.map((el) => ({
		key: el.path,
		component: el.page,
		items: builderPages(el.items ?? [])
	}));

export const routerBuilder = () =>
	builderPages(PATHS_WITH_PAGE).flatMap(({ items, ...el }) => [el, ...items]);

export const PATHS: Omit<Path, "page">[] = PATHS_WITH_PAGE.map((el) => {
	return {
		icon: el.icon,
		path: el.path,
		label: el.label,
		items: el.items
	};
});
