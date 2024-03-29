import { type Product } from "@/types/product";
import { formatMoney } from "@/utils";

type ProductDescriptionProps = {
	product: Product;
};

export const ProductDescription = ({
	product: { title, category, price },
}: ProductDescriptionProps) => (
	<div className="mt-2 flex justify-between">
		<div>
			<p className="text-sm font-semibold text-gray-700">{title}</p>
			<p className="text-sm text-gray-500">
				<span className="sr-only">Kategoria:</span>
				{category}
			</p>
		</div>
		<p className="text-sm font-medium text-gray-700">
			<span className="sr-only">Cena:</span> {formatMoney(price / 100)}
		</p>
	</div>
);