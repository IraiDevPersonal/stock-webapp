import { path } from "@app/routes/path";
import { v4 } from "uuid";
import { Route } from "wouter";
import { Product } from "../models/Product";
import ProductMaintainer from "../components/ProductMaintainer";

const ProductsPage = () => {
	return (
		<Route path={path.private.home}>
			<ProductMaintainer products={PRODUCTS} />
		</Route>
	);
};

export default ProductsPage;

const PRODUCTS: Product[] = [
	{
		id: v4(),
		code: 12345,
		name: "Master Cat Gatitos",
		brand: "Master Cat",
		category: "Mascotas",
		type: "Gato",
		stock: 10,
		cost: 23000,
		price: 33000,
		createdAt: new Date(),
		image: ""
	}
];
