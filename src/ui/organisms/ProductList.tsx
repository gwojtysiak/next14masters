import { type Product } from "@/types/product";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

type ProductListProps = {
	products: Product[];
};

export const ProductList = ({ products }: ProductListProps) => (
	<ul
		className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4"
		data-testid="products-list"
	>
		{products.map((product) => (
			<ProductListItem key={product.id} product={product} />
		))}
	</ul>
);