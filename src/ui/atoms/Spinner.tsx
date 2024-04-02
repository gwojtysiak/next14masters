export const Spinner = () => {
	return (
		<div className="flex items-center justify-center" aria-busy="true">
			<div className="relative">
				<div className="h-20 w-20 rounded-full border-2 border-gray-200"></div>
				<div className="absolute left-0 top-0 h-20 w-20 animate-spin rounded-full border-t-2 border-gray-700"></div>
			</div>
		</div>
	);
};