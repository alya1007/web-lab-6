import { Movies } from "./movies";
import { v4 as uuidv4 } from 'uuid';
import { genresImages } from "@/assets/genres";

export type Genre = {
    id: string;
	name: string;
	movies: Movies;
	icon: string;
};

export const genres: Genre[] = [
    {
        id: uuidv4(),
        name: "Classical",
        movies: [],
        icon: genresImages.classic
    },
    {
        id: uuidv4(),
        name: "Horror",
        movies: [],
        icon: genresImages.horror
    },
    {
        id: uuidv4(),
        name: "Musical",
        movies: [],
        icon: genresImages.musical
    },
    {
        id: uuidv4(),
        name: "Mystery",
        movies: [],
        icon: genresImages.mystery
    },
    {
        id: uuidv4(),
        name: "Romance",
        movies: [],
        icon: genresImages.romance
    },
    {
        id: uuidv4(),
        name: "Sci-Fi",
        movies: [],
        icon: genresImages.scifi
    },
    {
        id: uuidv4(),
        name: "War",
        movies: [],
        icon: genresImages.war
    },
    {
        id: uuidv4(),
        name: "Western",
        movies: [],
        icon: genresImages.western
    }
]