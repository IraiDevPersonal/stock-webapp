export type Product = {
	id: string;
	name: string;
	brand: string;
	stock: number;
	type: string;
	cost: number;
	price: number;
	image: string;
	entryDate: Date;
	category: string;
	discount?: {
		endDate: string;
		value: number;
	};
};
