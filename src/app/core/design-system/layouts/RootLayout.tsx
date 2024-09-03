import { PropsWithChildren, useLayoutEffect } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
	useLayoutEffect(() => {
		const root = document.getElementById("root");
		root?.classList.add(
			"text-default-950",
			"overflow-auto",
			"bg-default-100",
			"min-h-screen",
			"h-screen",
			"flex"
		);
	}, []);

	return <>{children}</>;
};
export default RootLayout;
