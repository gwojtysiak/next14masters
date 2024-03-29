import { type Product } from "@/types/product";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductDescription } from "@/ui/atoms/ProductDescription";

type ProductListItemProps = {
	product: Product;
};

export const ProductListItem = ({ product }: ProductListItemProps) => (
	<li>
		<article>
			<ProductCoverImage product={product} />
			<ProductDescription product={product} />
		</article>
	</li>
);