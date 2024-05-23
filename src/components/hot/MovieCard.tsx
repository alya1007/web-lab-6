import { Movie } from "@/data/movies";
import posterPlaceholder from "@/assets/moviePosterPlaceholder.jpg";

const MovieCard = ({ movie }: { movie: Movie }) => {
	return (
		<a
			key={movie.id}
			className="bg-cover bg-no-repeat h-56 m-5 rounded-lg p-3 flex flex-col justify-between"
			style={{ backgroundImage: `url('${movie.poster || posterPlaceholder}')` }}
			href="#"
		>
			<h3 className="text-[0.75rem] bg-bgPrimaryWhite/60 dark:bg-bgPrimary/60 px-3 py-0 w-fit rounded-md">
				{movie.year}
			</h3>
			<h3 className="bg-bgPrimaryWhite/60 dark:bg-bgPrimary/60 px-4 py-1 w-fit rounded-lg">
				{movie.title}
			</h3>
		</a>
	);
};

export default MovieCard;
