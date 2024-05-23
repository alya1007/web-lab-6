import { Movie } from "@/data/movies";
import { useHotMovies } from "@/lib/hooks/useHotMovies";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import CarouselArrows from "../ui/CarouselArrows";
import posterPlaceholder from "@/assets/moviePosterPlaceholder.jpg";

const RecommendedSection = () => {
	const hotMovies: Movie[] = useHotMovies();
	const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);
	const bottomPanelFirstMovie = hotMovies[0];
	const [bottomPanelSecondMovie, setBottomPanelSecondMovie] = useState<Movie>();

	useEffect(() => {
		const fetchRecommendedMovies = () => {
			const storedMovies = localStorage.getItem("movies");
			if (storedMovies) {
				const movies: Movie[] = JSON.parse(storedMovies);
				const filteredMovies = movies
					.filter(
						(movie) => !hotMovies.some((hotMovie) => hotMovie.id === movie.id)
					)
					.sort((a, b) => {
						if (a.imdbRating && b.imdbRating) {
							return b.imdbRating - a.imdbRating;
						}
						return 0;
					})
					.slice(0, 12);
				setRecommendedMovies(filteredMovies);
				setBottomPanelSecondMovie(filteredMovies.shift());
			}
		};

		if (hotMovies.length > 0) {
			fetchRecommendedMovies();
		}
	}, [hotMovies]);

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 6,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 6,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<div className="w-10/12 mx-auto mt-10">
			<h1 className="font-bold">Recommended</h1>
			<div style={{ position: "relative" }}>
				<Carousel
					responsive={responsive}
					arrows={false}
					renderButtonGroupOutside={true}
					customButtonGroup={<CarouselArrows />}
				>
					{recommendedMovies.map((movie) => (
						<div>
							<a
								key={movie.id}
								className="bg-cover bg-no-repeat h-56 m-5 rounded-lg p-3 flex flex-col justify-between"
								style={{
									backgroundImage: `url('${
										movie.poster || posterPlaceholder
									}')`,
								}}
								href="#"
							></a>
							<h3 className="text-center mx-auto text-[0.75rem] bg-bgPrimaryWhite/60 dark:bg-bgPrimary/60 px-3 py-0 w-fit rounded-md">
								{movie.title}
							</h3>
						</div>
					))}
				</Carousel>
			</div>
			<div className="flex">
				<div></div>
			</div>
		</div>
	);
};

export default RecommendedSection;
