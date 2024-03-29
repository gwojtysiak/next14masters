import { getPaginatedListOfProducts } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";

type ProductsLayoutProps = {
	children: React.ReactNode;
	params: {
		page: string[];
	};
};

export default async function ProductsLayout({ children, params }: ProductsLayoutProps) {
	const pageNumber = params.page ? Number(params.page[0]) : 1;
	const products = await getPaginatedListOfProducts();
	const totalPages = Math.ceil(products.length / 20);
	return (
		<>
			<section>{children}</section>
			<Pagination pageNumber={pageNumber} totalPages={totalPages} />
		</>
	);
}