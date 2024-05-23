import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselArrows from "./CarouselArrows";
import { Movie } from "@/data/movies";
import { useEffect, useState } from "react";

const HotSection = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	const movies: Movie[] = JSON.parse(localStorage.getItem("movies") || "[]");
	const [hotMovies, setHotMovies] = useState<Movie[]>([]);

	useEffect(() => {
		const hotMovies = movies
			.filter((movie) => movie.type === "movie")
			.sort((a, b) => parseInt(b.year) - parseInt(a.year))
			.slice(0, 7);
		setHotMovies(hotMovies);
	}, [movies]);

	return (
		<div className="w-10/12 mx-auto mt-10">
			<h1 className="font-bold">Hot Movies</h1>
			<div style={{ position: "relative" }}>
				<Carousel
					responsive={responsive}
					arrows={false}
					renderButtonGroupOutside={true}
					customButtonGroup={<CarouselArrows />}
				>
					{hotMovies.map((movie) => (
						<a
							key={movie.id}
							className="bg-cover bg-no-repeat h-56 m-5 rounded-lg p-3 flex flex-col justify-between"
							style={{ backgroundImage: `url('${movie.poster}')` }}
							href="#"
						>
							<h3 className="bg-bgPrimary/60 px-4 py-1 w-fit rounded-lg">
								{movie.year}
							</h3>
							<h3 className="bg-bgPrimary/60 px-4 py-1 w-fit rounded-lg">
								{movie.title}
							</h3>
						</a>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default HotSection;
