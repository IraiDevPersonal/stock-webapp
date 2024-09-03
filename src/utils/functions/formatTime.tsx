import { TimerFormat } from "@utils/types";

export function formatTime(
	inputSeconds: number,
	format: TimerFormat = "hh:mm:ss"
) {
	const hours = Math.floor(inputSeconds / 3600);
	const minutes = Math.floor((inputSeconds % 3600) / 60);
	const seconds = inputSeconds % 60;

	switch (format) {
		case "hh:mm:ss":
			return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
		case "mm:ss":
			return `${String(minutes + hours * 60).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
		case "hh:mm":
			return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
		default:
			return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
	}
}
