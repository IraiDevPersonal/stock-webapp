import { DateValue } from "@utils/types";
import dayjs from "dayjs";

export class DateRepository {
	private date: DateValue;

	constructor(date: DateValue = dayjs()) {
		this.date = date;
	}

	parse({
		date = this.date,
		format
	}: {
		date?: DateValue;
		format: DateFormat;
	}) {
		return dayjs(date).format(DATE_FORMAT[format]);
	}

	getSeconds(date: DateValue = this.date) {
		const time = this.parse({ date, format: "time_24" });
		const [hours, minutes, seconds] = time.split(":").map(Number);
		return hours * 3600 + minutes * 60 + seconds;
	}

	getDate() {
		return this.date;
	}
}

type DateFormat = keyof typeof DATE_FORMAT;

const DATE_FORMAT = {
	amd: "YYYY/MM/DD",
	dma: "DD/MM/YYYY",
	amdh: "YYYY/MM/DD",
	dmah: "DD/MM/YYYY hh:mm",
	dmonth: "DD MMM",
	time_24: "HH:mm:ss",
	time_12: "hh:mm:ss",
	yy: "YY",
	yyyy: "YYYY",
	mm: "MM",
	mmmm: "MMMM",
	dd: "DD",
	dddd: "DDDD",
	hhmm: "hh:mm",
	hhmmss_12: "hh:mm:ss A",
	ddddmmmYYYY: "ddd D, MMMM YYYY"
};
