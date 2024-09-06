export type Path = {
	path: string;
	label: string;
	items?: Path[];
	icon: JSX.Element;
	page: React.ReactNode;
};
