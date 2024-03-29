import { type Product } from "@/types/product";

export const getProductById = async (id: Product["id"]) => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);

	const product = await (response.json()) as Product;
	return product;
};