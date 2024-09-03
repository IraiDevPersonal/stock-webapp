import { path } from "@app/routes/path";
import IconHome from "../design-system/icons/IconHome";
import { Path } from "../models/path";

export const PATHS: Path[] = [
	{
		icon: IconHome(),
		label: "Home",
		path: path.private.home
	}
];
