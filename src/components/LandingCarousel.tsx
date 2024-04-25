import { LandingMoviesImages } from "@/data/movies";
import { useState, useEffect } from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

const LandingCarousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const images: LandingMoviesImages = localStorage.getItem(
		"landingMoviesImages"
	)
		? JSON.parse(localStorage.getItem("landingMoviesImages") as string)
		: [];

	useEffect(() => {
		const intervalId = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 5000);
		return () => clearInterval(intervalId);
	}, [images.length]);

	return (
		<>
			<div className="relative bg-gray-100 overflow-hidden ">
				<TECarousel
					className=" flex transition-transform duration-500 ease-in-out h-100 "
					style={{ transform: `translateX(-${activeIndex * 100}%)` }}
				>
					{images.map((imageUrl, index) => (
						<TECarouselItem
							key={index}
							itemID={index}
							className="w-full h-52 md:h-80 lg:h-[550px] flex-shrink-0"
						>
							<div>Let's make your own cinema</div>
							<img
								src={imageUrl}
								className="w-full h-full object-cover"
								alt={`Slide ${index + 1}`}
							/>
						</TECarouselItem>
					))}
				</TECarousel>
			</div>
		</>
	);
};

export default LandingCarousel;
