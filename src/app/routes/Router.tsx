import RootLayout from "@app/core/design-system/layouts/RootLayout";
import PrivateLayout from "@app/core/design-system/layouts/PrivateLayout";
import { Redirect, Route, Router as Wouter } from "wouter";
import { path } from "./path";
import ProductsPage from "@app/products/pages/ProductsPage";
import CategoriesPage from "@app/categories/pages/CategoriesPage";

const Router = () => {
	return (
		<RootLayout>
			<Wouter>
				<PrivateLayout>
					<Navigate />
					<ProductsPage />
					<CategoriesPage />
				</PrivateLayout>
			</Wouter>
		</RootLayout>
	);
};
export default Router;

function Navigate() {
	return (
		<Route path="/">
			<Redirect
				replace
				to={path.private.home}
			/>
		</Route>
	);
}
