import { filtersImages } from "@/assets/filters";

export type Filter = {
	id: string;
	name: string;
	icon: string;
    filtersList: string[];
};

const filters: Filter[] = [
    {
        id: 'd6b4c5e7-5a0f-4c8d-9f1a-7a8b5e2f4c3d',
        name: "Year",
        icon: filtersImages.year,
        filtersList: ["2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012"],
    },
    {
        id: '1e8a4b7d-4b3e-4e9b-9c2d-3b6a7f4e5d1c',
        name: "Genre",
        icon: filtersImages.genre,
        filtersList: ["Classical", "Horror", "Musical", "Mystery", "Romance", "Sci-Fi", "War", "Western"],
    },
    {
        id: 'f2d5e3c6-7b8f-4e1d-8c5a-2b4e7f8c9d6a',
        name: "Rating",
        icon: filtersImages.rating,
        filtersList: ["1", "2", "3", "4", "5"],
    },
    {
        id: 'a7d5f8c9-3b2e-4c7a-8d5e-9b2f4e1c6a5b',
        name: "Vote",
        icon: filtersImages.like,
        filtersList: ["1", "2", "3", "4", "5"],
    },
];

export default filters;
