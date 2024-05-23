import { genresImages } from "@/assets/genres";
import { Movie } from "./movies";

export type Genre = {
    id: string;
	name: string;
	movies: Movie[];
	icon: string;
};

export const genres: Genre[] = [
    {
        id: '8f3f1f7e-8321-4bcb-a8ae-2a3e8c7a1b55',
        name: "Classical",
        movies: [],
        icon: genresImages.classic
    },
    {
        id: '2d0d5b9d-3b9e-40b7-92b6-2e0c334b20ad',
        name: "Horror",
        movies: [],
        icon: genresImages.horror
    },
    {
        id: '7c31e47f-4a22-4327-bb98-3a7d5e58ab45',
        name: "Musical",
        movies: [],
        icon: genresImages.musical
    },
    {
        id: 'f33e1748-d9c6-48e1-93d6-2a1b1f098a97',
        name: "Mystery",
        movies: [],
        icon: genresImages.mystery
    },
    {
        id: '4b8c54cb-3b5b-43b2-8b1c-8d2c579c0e6a',
        name: "Romance",
        movies: [],
        icon: genresImages.romance
    },
    {
        id: '5f2f5f39-4ed2-4c8a-99d8-5a8f7c3c7b45',
        name: "Sci-Fi",
        movies: [],
        icon: genresImages.scifi
    },
    {
        id: 'b1c8f9d4-5c0b-437f-9bca-6e0c47a9a81d',
        name: "War",
        movies: [],
        icon: genresImages.war
    },
    {
        id: '9a4f5a6e-3a1b-4c7b-8b2c-5d8f7a4c7e2a',
        name: "Western",
        movies: [],
        icon: genresImages.western
    }
];
