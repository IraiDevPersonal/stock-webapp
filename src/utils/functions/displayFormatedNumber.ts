export function displayFormatedNumber(
	input: number,
	options?: {
		showCurrency: boolean;
	}
) {
	const init: Intl.NumberFormatOptions | undefined = options?.showCurrency
		? { style: "currency", currency: "CLP" }
		: undefined;
	return input.toLocaleString("es-CL", init);
}
