import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselArrows from "../ui/CarouselArrows";
import { useHotMovies } from "@/lib/hooks/useHotMovies";
import MovieCard from "./MovieCard";

const HotSection = () => {
	const hotMovies = useHotMovies();

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
						<MovieCard key={movie.id} movie={movie} />
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default HotSection;
