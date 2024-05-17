import camera from "@/assets/camera.png";
import reel from "@/assets/reel.png";
import reels from "@/assets/reels.png";

type LandingStatisticsProps = {
	className?: string;
};

const LandingStatistics = ({ className }: LandingStatisticsProps) => {
	return (
		<div
			className={` bg-white/10 flex-shrink-0 flex-col gap-6 relative ${className} mx-auto mt-12 md:m-0 w-64 md:w-72`}
		>
			<div className="flex h-12 flex-shrink-0 items-center mx-14 mt-10 text-sm font-extralight gap-5">
				<img className="h-full" src={camera} alt="camera icon" />
				<div>
					<h6>10.000+</h6>
					<h6>Movie Choice</h6>
				</div>
			</div>
			<div className="flex h-12 items-center mx-14 text-sm font-extralight gap-5">
				<img className="h-full" src={reel} alt="reel icon" />
				<div>
					<h6>Best Movies</h6>
				</div>
			</div>
			<div className="flex h-10 items-center mx-14 mb-10 text-sm font-extralight gap-5">
				<img className="h-full" src={reels} alt="reels icon" />
				<div>
					<h6>800+</h6>
					<h6>Series Series</h6>
				</div>
			</div>
			<div className="h-[2.5px] rounded-md absolute top-5 right-10 bg-primary/60 w-full"></div>
			<div className="h-full rounded-md absolute bottom-5 left-5 bg-primary/60 w-[2.5px]"></div>
			<div className="h-full rounded-md absolute top-8 right-5 bg-primary/60 w-[2.5px]"></div>
			<div className="h-[2.5px] rounded-md absolute top-[277px] left-5 bg-primary/60 w-full"></div>
		</div>
	);
};

export default LandingStatistics;
