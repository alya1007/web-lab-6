import rightArrow from "@/assets/rightArrow.png";
import leftArrow from "@/assets/leftArrow.png";

const CarouselArrows = ({ next, previous }: any) => {
	return (
		<div
			className="carousel-button-group mb-4  gap-4 flex justify-end 
        items-center w-full"
		>
			<button className="block w-4 xl:w-[1.5%]" onClick={() => previous()}>
				<img src={leftArrow} alt="left arrow" />
			</button>
			<button className="block w-4 xl:w-[1.5%]" onClick={() => next()}>
				<img src={rightArrow} alt="right arrow" />
			</button>
		</div>
	);
};

export default CarouselArrows;
