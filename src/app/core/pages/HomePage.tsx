import { Route } from "wouter";
import Header from "../design-system/Header";
import Main from "../design-system/Main";
import { path } from "@app/routes/path";

const HomePage = () => {
	return (
		<Route path={path.private.home}>
			<>
				<Header title="Pagina de Inicio" />
				<Main>cositas</Main>
			</>
		</Route>
	);
};

export default HomePage;
