import { Movie } from "@/data/movies";
import { useHotMovies } from "@/lib/hooks/useHotMovies";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import CarouselArrows from "../ui/CarouselArrows";
import posterPlaceholder from "@/assets/moviePosterPlaceholder.jpg";

const RecommendedSection = () => {
	const hotMovies: Movie[] = useHotMovies();
	const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);
	const bottomPanelFirstMovie = hotMovies[0] || {};
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
						<div key={movie.id}>
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
			{hotMovies.length > 0 && (
				<div className="flex flex-col md:flex-row w-full">
					<a
						className="bg-cover bg-no-repeat h-72 m-5 rounded-lg p-3 flex flex-col justify-between"
						style={{
							backgroundImage: `url('${
								bottomPanelFirstMovie.images
									? bottomPanelFirstMovie.images[0]
									: posterPlaceholder
							}')`,
						}}
						href="#"
					>
						<div className="p-5 md:p-10 flex flex-col justify-between h-full">
							<div>
								<h1 className="text-xl font-medium text-white">
									{bottomPanelFirstMovie?.title}
								</h1>
								<h3 className="text-sm font-regular text-white/50">
									{bottomPanelFirstMovie?.released}
								</h3>
							</div>
							<p className="text-[0.65rem] mt-10 md:mt-0 md:text-sm font-regular text-white/50 w-full md:w-3/5">
								{bottomPanelFirstMovie?.plot}
							</p>
						</div>
					</a>
					<a
						className="bg-cover bg-no-repeat h-72 m-5 rounded-lg p-3 flex flex-col justify-between"
						style={{
							backgroundImage: `url('${
								bottomPanelSecondMovie?.poster || posterPlaceholder
							}')`,
						}}
						href="#"
					>
						<div className="flex h-full justify-between flex-col p-3 md:p-6">
							<div className="flex w-full justify-between md:flex-col xl:flex-row">
								<h3 className="text-sm font-regular text-white/80">
									{bottomPanelSecondMovie?.released}
								</h3>
								<h3 className="text-sm font-regular text-white/80">
									{bottomPanelSecondMovie?.totalSeasons} seasons
								</h3>
							</div>
							<h1 className="text-xl font-medium w-full mt-16 md:mt-0 xl:w-1/2 text-white">
								{bottomPanelSecondMovie?.title}
							</h1>
						</div>
					</a>
				</div>
			)}
		</div>
	);
};

export default RecommendedSection;
