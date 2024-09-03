import { red, orange, blue, green, neutral } from "tailwindcss/colors";

export const COLORS = {
	primary: {
		50: "#fcfbea",
		100: "#f8f6c9",
		200: "#f3eb95",
		300: "#ebda59",
		400: "#e2c31f",
		500: "#d4b01e",
		600: "#b78a17",
		700: "#926416",
		800: "#79501a",
		900: "#68421b",
		950: "#3c230c",
		DEFAULT: "#e2c31f"
	},
	secondary: {
		...neutral,
		DEFAULT: neutral[950]
	},
	danger: {
		...red,
		DEFAULT: red[500]
	},
	warning: {
		...orange,
		DEFAULT: orange[500]
	},
	success: {
		...green,
		DEFAULT: green[500]
	},
	info: {
		...blue,
		DEFAULT: blue[500]
	},
	default: {
		...neutral,
		DEFAULT: neutral[700]
	}
};
