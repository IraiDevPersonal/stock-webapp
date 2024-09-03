import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import million from "million/compiler";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [million.vite({ auto: true }), react()],
	resolve: {
		alias: {
			"@app": path.resolve(__dirname, "src/app"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@configs": path.resolve(__dirname, "src/configs")
		}
	}
});
