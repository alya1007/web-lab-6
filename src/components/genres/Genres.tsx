import { Genre } from "@/data/genres";
import GenreCard from "./GenreCard";
import { useWindowSize } from "usehooks-ts";

const Genres = () => {
	const genres: Genre[] = JSON.parse(localStorage.getItem("genres") || "[]");
	const { width } = useWindowSize();

	const getGenresToDisplay = () => {
		if (width >= 1280) return genres.slice(0, 8); // xl
		if (width >= 1024) return genres.slice(0, 6); // lg
		if (width >= 768) return genres.slice(0, 6); // md
		if (width >= 640) return genres.slice(0, 6); // sm
		return genres.slice(0, 4); // Default
	};

	const displayedGenres = getGenresToDisplay();

	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-x-12 sm:gap-y-5 gap-y-4 md:gap-x-10 lg:gap-x-16 lg:gap-y-12 xl:gap-x-24 xl:gap-y-12 w-9/12 sm:w-10/12 mx-auto mt-12">
			{displayedGenres.map((genre) => (
				<GenreCard genre={genre} key={genre.id} />
			))}
		</div>
	);
};

export default Genres;
