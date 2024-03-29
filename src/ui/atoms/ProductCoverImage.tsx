import Link from "next/link";
import { type Product } from "@/types/product";

type ProductCoverImageProps = {
	product: Product;
};

export const ProductCoverImage = ({ product }: ProductCoverImageProps): JSX.Element => (
	<Link href={`/product/${product.id}`}>
		<div className="aspect-square cursor-pointer overflow-hidden rounded-lg border bg-slate-50 hover:bg-slate-50">
			<img
				width={320}
				height={320}
				alt={product.title}
				src={product.image}
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	</Link>
);