import Main from "@app/core/design-system/Main";
import { path } from "@app/routes/path";
import { Route } from "wouter";
import ProductsHeader from "../components/ProductsHeader";

const ProductsPage = () => {
	return (
		<Route path={path.private.home}>
			<ProductsHeader />
			<Main>Stock</Main>
		</Route>
	);
};

export default ProductsPage;
