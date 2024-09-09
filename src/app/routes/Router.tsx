import PrivateLayout from "@app/core/design-system/layouts/PrivateLayout";
import RootLayout from "@app/core/design-system/layouts/RootLayout";
import React from "react";
import { Redirect, Route, Router as Wouter, Switch } from "wouter";
import { path } from "./path";
import { pagesBuilder, PATHS_WITH_PAGE } from "@app/core/utils/constants";

const Router = () => {
	return (
		<RootLayout>
			<Wouter>
				<PrivateLayout>
					<Navigate />
					<RouterBuilder />
				</PrivateLayout>
			</Wouter>
		</RootLayout>
	);
};
export default Router;

function RouterBuilder() {
	console.log(pagesBuilder(PATHS_WITH_PAGE));
	return (
		<Switch>
			{pagesBuilder(PATHS_WITH_PAGE).map((el) => (
				<React.Fragment key={el.key}>{el.component}</React.Fragment>
			))}
		</Switch>
	);
}

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
