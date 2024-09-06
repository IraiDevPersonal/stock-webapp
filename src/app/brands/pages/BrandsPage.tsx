import { path } from "@app/routes/path";
import { v4 } from "uuid";
import { Route } from "wouter";
import BrandsMaintainer from "../components/BrandsMaintainer";
import { Brand } from "../models/Brand";

const BrandsPage = () => {
	return (
		<Route path={path.private.brands}>
			<BrandsMaintainer items={BRANDS} />
		</Route>
	);
};

export default BrandsPage;

const BRANDS: Brand[] = [
	{
		id: v4(),
		key: "mascotas",
		name: "Mascotas"
	}
];
