import { type Product } from "@/types/product";

const apiUrl = process.env.API_URL || "https://naszsklep-api.vercel.app/api";

export const getPaginatedListOfProducts = async (take?: number, offset?: number) => {
	const takeQueryParam = take ? `?take=${take}` : "";
	const offsetQueryParam = offset ? `&offset=${offset}` : "";
	const url = `${apiUrl}/products${takeQueryParam}${offsetQueryParam}`;

	const response = await fetch(`${url}`);

	if (!response.ok) {
		throw new Error("Failed to fetch products");
	}

	const productsRes = (await response.json()) as Product[];

	const products = productsRes.map((product): Product => {
		return {
			id: product.id,
			title: product.title,
			description: product.description,
			image: product.image,
			price: product.price,
			category: product.category,
			rating: product.rating,
			longDescription: product.longDescription,
		};
	});

	return products;
};