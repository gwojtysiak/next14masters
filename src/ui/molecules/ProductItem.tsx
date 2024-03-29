import { type Product } from "@/types/product";
import { Icon } from "@/ui/atoms/Icon";
import { formatMoney } from "@/utils";

type ProductItemProps = {
	product: Product;
};

export const ProductItem = ({ product }: ProductItemProps) => {
	return (
		<div className="flex w-full flex-col gap-24 md:flex-row">
			<div className="flex flex-shrink-0 justify-center rounded-xl bg-gray-100 px-24 py-12">
				<img
					className="object-cover mix-blend-multiply"
					src={product.image}
					alt={product.title}
					width={400}
				/>
			</div>
			<div className="flex flex-1 flex-col justify-between">
				<div className="flex flex-col">
					<p>{product.category}</p>
					<div className="flex items-center gap-4 md:gap-24">
						<h1 className="mt-2 text-4xl font-bold">{product.title}</h1>
						<p className="rounded-md bg-gray-500 px-2 text-xl text-white">
							{formatMoney(product.price / 100)}
						</p>
					</div>
					<p className="mt-4 text-sm text-gray-500">
						rating: {product.rating.rate} / {product.rating.count} reviews
					</p>
					<p className="text-md mt-4 italic text-gray-500">{product.description}</p>
					<p className="text-md mt-4">{product.longDescription}</p>
				</div>
				<div className="mt-8 flex justify-end gap-4">
					<button className="flex items-center gap-4  rounded-xl border p-4 shadow-md transition-all hover:scale-105">
						Add to cart
						<Icon src="../../cart.svg" onClick={() => {}} alt="" />
					</button>
				</div>
			</div>
		</div>
	);
};