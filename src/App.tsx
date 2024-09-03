import AlertProvider from "@app/core/components/AlertProvider";
import Router from "@app/routes/Router";
import { Toaster } from "sonner";
import "./index.css";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");

function App() {
	return (
		<>
			<Toaster
				closeButton
				position="top-left"
				duration={3000}
			/>
			<AlertProvider />
			<Router />
		</>
	);
}

export default App;
