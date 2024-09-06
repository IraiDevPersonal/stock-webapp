import PrivateLayout from "@app/core/design-system/layouts/PrivateLayout";
import RootLayout from "@app/core/design-system/layouts/RootLayout";
import { buildPages } from "@app/core/utils/constants";
import React from "react";
import { Redirect, Route, Router as Wouter } from "wouter";
import { path } from "./path";

const Router = () => {
	return (
		<RootLayout>
			<Wouter>
				<PrivateLayout>
					<Navigate />
					{buildPages().map((el) => (
						<React.Fragment key={el.key}>{el.component}</React.Fragment>
					))}
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
