import RootLayout from "@app/core/design-system/layouts/RootLayout";
import PrivateLayout from "@app/core/design-system/layouts/PrivateLayout";
import { Redirect, Route, Router as Wouter } from "wouter";
import { path } from "./path";

const Router = () => {
	return (
		<RootLayout>
			<Wouter>
				<PrivateLayout>
					<Navigate />
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
