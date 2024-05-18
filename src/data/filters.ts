import { v4 as uuidv4 } from 'uuid';
import { filtersImages } from "@/assets/filters";

export type Filter = {
	id: string;
	name: string;
	icon: string;
    filtersList: string[];
};

const filters: Filter[] = [
    {
        id: uuidv4(),
        name: "Year",
        icon: filtersImages.year,
        filtersList: ["2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012"],
    },
    {
        id: uuidv4(),
        name: "Genre",
        icon: filtersImages.genre,
        filtersList: ["Classical", "Horror", "Musical", "Mystery", "Romance", "Sci-Fi", "War", "Western"],
    },
    {
        id: uuidv4(),
        name: "Rating",
        icon: filtersImages.rating,
        filtersList: ["1", "2", "3", "4", "5"],
    },
    {
        id: uuidv4(),
        name: "Vote",
        icon: filtersImages.like,
        filtersList: ["1", "2", "3", "4", "5"],
    },
];

export default filters;