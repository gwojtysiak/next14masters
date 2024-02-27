import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "Accessories",
		name: "Produkt 1",
		price: 123,
		coverImage: {
			alt: "",
			src: "/product_1.jpg",
		},
	},
	{
		id: "2",
		category: "Accessories",
		name: "Produkt 2",
		price: 2137,
		coverImage: {
			alt: "",
			src: "/product_2.jpg",
		},
	},
	{
		id: "3",
		category: "Accessories",
		name: "Produkt 3",
		price: 1000,
		coverImage: {
			alt: "",
			src: "/product_3.jpg",
		},
	},
	{
		id: "4",
		category: "Accessories",
		name: "Produkt 4",
		price: 56,
		coverImage: {
			alt: "",
			src: "/product_4.jpg",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
