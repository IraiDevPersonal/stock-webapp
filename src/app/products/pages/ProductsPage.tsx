import { path } from "@app/routes/path";
import { DateRepository } from "@utils/repositories/DateRepository";
import { v4 } from "uuid";
import { Route } from "wouter";
import ProductsMaintainer from "../components/ProductsMaintainer";
import { Product } from "../models/Product";

const ProductsPage = () => {
	return (
		<Route path={path.private.products}>
			<ProductsMaintainer items={PRODUCTS} />
		</Route>
	);
};

export default ProductsPage;

const PRODUCTS: Product[] = [
	{
		id: v4(),
		code: 12345,
		name: "Master Cat Gatitos",
		brand: {
			id: v4(),
			key: "mastercat",
			name: "Master Cat"
		},
		category: {
			id: v4(),
			key: "mascotas",
			name: "Mascotas"
		},
		subCategory: {
			id: v4(),
			key: "alimento_gato",
			name: "Alimento de Gato"
		},
		stock: 10,
		cost: 23000,
		price: 33000,
		createdAt: new DateRepository().getDate(),
		image: ""
	}
];
