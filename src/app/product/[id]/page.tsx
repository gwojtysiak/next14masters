import { type Metadata } from "next";
import { Suspense } from "react";
import { getProductById } from "@/api/product";
import { ProductItem } from "@/ui/molecules/ProductItem";
import { Spinner } from "@/ui/atoms/Spinner";

type Params = {
	params: {
		id: string;
	};
};

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
	const product = await getProductById(params.id);

	return {
		title: product.title,
		description: product.description,
		category: product.category,
		openGraph: {
			title: product.title,
			description: product.description,
			images: [
				{
					url: product.image,
					alt: product.title,
				},
			],
		},
	};
};

export default async function ProductPage({ params }: Params) {
	const productItem = await getProductById(params.id);
	return (
		<section className="md:mx-24">
			<Suspense fallback={<Spinner />}>
				<ProductItem product={productItem} />
			</Suspense>
		</section>
	);
}