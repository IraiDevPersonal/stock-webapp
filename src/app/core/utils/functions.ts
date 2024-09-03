export function calculatePriceWithDiscount(
	price: number,
	discount: number = 0
) {
	const discoundValue = price * (discount / 100);
	return price - discoundValue;
}
