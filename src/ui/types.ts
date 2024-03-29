export type ProductItemType = {
	id: string;
	category: string;
	name: string;
	price: number;
	description: string,
    rating: Rating
    coverImage: {
        src: string,
        alt: string,
    };
    longDescription: string;
};

type Rating = {
    rate: number;
    count: number;
}