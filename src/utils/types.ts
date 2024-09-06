// export type DateFormats = keyof typeof DATE_FORMATS
// export type LocalStorageKeys = keyof typeof LOCAL_STORAGE_KEYS

import { Dayjs } from "dayjs";

export type TimerFormat = "hh:mm:ss" | "mm:ss" | "hh:mm";
export type HttpMethod = "get" | "post" | "put" | "delete";
export type ErrorType = "cancelled" | "unexpected";
export type Align = CellAtributtes["align"];
export type Valign = CellAtributtes["valign"];
export type CellAtributtes = JsxAtributtes["td"];
export type InputAtributtes = JsxAtributtes["input"];
export type ButtonType = ButtonAtributtes["type"];
export type ButtonAtributtes = JsxAtributtes["button"];
export type Size = "lg" | "md" | "sm" | "xs";
export type JsxAtributtes = JSX.IntrinsicElements;
export type HtmlElements = keyof JSX.IntrinsicElements;
export type InputType = "date" | "time" | "text" | "password";
export type SvgAtributtes = React.SVGProps<SVGSVGElement>;
export type Color =
	| "secondary"
	| "warning"
	| "primary"
	| "success"
	| "default"
	| "danger"
	| "info";
export type Variant = "filled" | "light";
export type JsxFormEvent = React.FormEvent<HTMLFormElement>;
export type KeyDownEvent =
	| React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
	| KeyboardEvent;

export type DateValue = Dayjs;

export type TableColumn<T = React.Key> = JsxAtributtes["th"] & {
	key?: T;
	children: React.ReactNode;
	// styles: {
	// 	width?: number;
	// 	minWidth?: number;
	// 	maxWidth?: number | string
	// };
};

export type Option = {
	value: string;
	label: string;
};

export type FilterToggleItem = {
	value: string;
	label: string;
	endContent?: React.ReactNode;
	startContent?: React.ReactNode;
};
