import { LandingMoviesImages } from "@/data/movies";
import { useState, useEffect } from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import LandingContent from "./LandingContent";

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
			<div className="relative bg-gray-100 overflow-hidden mt-5 sm:m-0">
				<TECarousel
					className=" flex transition-transform duration-500 ease-in-out h-100 "
					style={{ transform: `translateX(-${activeIndex * 100}%)` }}
				>
					{images.map((imageUrl, index) => (
						<TECarouselItem
							key={index}
							itemID={index}
							className="relative w-full h-52 md:h-80 lg:h-[550px] flex-shrink-0 z-0"
							style={{
								backgroundImage: `url(${imageUrl})`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								backgroundPosition: "center",
								position: "relative",
							}}
						></TECarouselItem>
					))}
				</TECarousel>
				<div className="absolute inset-0 flex">
					<div className="absolute top-0 dark:top-[100px] md:dark:top-[200px] bottom-0 left-0 right-0 dark:bg-gradient-to-b from-transparent to-bgPrimaryWhite dark:to-bgPrimary opacity-100 blur-[0px]"></div>
					<div className="absolute top-0 dark:bottom-[100px] md:dark:bottom-[200px] left-0 right-0 dark:bg-gradient-to-t from-transparent to-bgPrimaryWhite dark:to-bgPrimary opacity-100 blur-[0px]"></div>
					<LandingContent />
				</div>
			</div>
		</>
	);
};

export default LandingCarousel;
