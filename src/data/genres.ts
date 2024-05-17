import { Movies } from "./movies";
import { genresImages } from "@/assets/genres";

export type Genre = {
	name: string;
	movies: Movies;
	icon: string;
};

export const genres: Genre[] = [
    {
        name: "Classical",
        movies: [],
        icon: genresImages.classic
    },
    {
        name: "Horror",
        movies: [],
        icon: genresImages.horror
    },
    {
        name: "Musical",
        movies: [],
        icon: genresImages.musical
    },
    {
        name: "Mystery",
        movies: [],
        icon: genresImages.mystery
    },
    {
        name: "Romance",
        movies: [],
        icon: genresImages.romance
    },
    {
        name: "Sci-Fi",
        movies: [],
        icon: genresImages.scifi
    },
    {
        name: "War",
        movies: [],
        icon: genresImages.war
    },
    {
        name: "Western",
        movies: [],
        icon: genresImages.western
    }
]