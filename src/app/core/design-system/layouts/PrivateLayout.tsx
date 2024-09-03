import { PropsWithChildren } from "react";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const PrivateLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Sidebar />
			<div className="flex-1 h-screen max-h-screen overflow-auto">
				{children}
				<Footer />
			</div>
		</>
	);
};

export default PrivateLayout;
