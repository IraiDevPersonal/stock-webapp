import Profile from "@app/profile/components/Profile";
import { tw } from "@utils/functions/tailwind";
import { DateRepository } from "@utils/repositories/DateRepository";
import { Link, useRoute } from "wouter";
import ArrayMap from "../components/ArrayMap";
import Box from "../components/Box";
import { Path } from "../models/Path";
import { PATHS } from "../utils/constants";
import { useDisclosure } from "../hooks/useDisclosure";

const Sidebar = () => {
	const date = new DateRepository();
	return (
		<Box
			as="aside"
			className="flex flex-col gap-8 w-72 h-screen min-h-screen p-0 pt-4 border-r border-default-300"
		>
			<header className="px-4">
				<h1 className="text-3xl font-bold pb-4">
					Stock<span className="text-primary">App</span>
				</h1>

				<div className="flex flex-col gap-1.5">
					<small className="capitalize text-default-700">
						{date.parse({ format: "ddddmmmYYYY" })}
					</small>
				</div>
			</header>

			<nav>
				<NavigationBuilder items={PATHS} />
			</nav>

			<footer className="mt-auto">
				<Profile />
			</footer>
		</Box>
	);
};

export default Sidebar;

function ActiveLink(item: Omit<Path, "page">) {
	const [isActive] = useRoute(item.path);
	return (
		<Link
			asChild
			to={item.path}
			key={item.path}
		>
			<li className={styles(isActive)}>
				<figure>{item.icon}</figure>
				{item.label}
			</li>
		</Link>
	);
}

function WithSubItems({ items, label }: { label: string; items: Path[] }) {
	const { isOpen, onOpenChange } = useDisclosure();
	return (
		<li
			className={styles()}
			onClick={onOpenChange}
		>
			{label}
			{isOpen && (
				<ul>
					{items.map((item) => (
						<ActiveLink
							key={item.path}
							{...item}
						/>
					))}
				</ul>
			)}
		</li>
	);
}

function NavigationBuilder({ items }: { items: Omit<Path, "page">[] }) {
	return (
		<ArrayMap
			as="ul"
			dataset={items}
			className="space-y-1"
		>
			{({ items: childrenItems = [], ...item }) => {
				if (childrenItems.length > 0) {
					return (
						<WithSubItems
							key={item.label}
							label={item.label}
							items={childrenItems}
						/>
					);
				}

				return (
					<ActiveLink
						key={item.path}
						{...item}
					/>
				);
			}}
		</ArrayMap>
	);
}

function styles(isActive?: boolean, extra?: string) {
	return tw(
		"flex items-center gap-2.5 font-medium p-2.5 pl-4 w-5/6 rounded-r-xl hover:bg-default-100",
		"transition-colors duration-300 cursor-pointer",
		isActive && "text-white bg-primary hover:bg-primary-500",
		extra
	);
}
