import LandingStatistics from "./LandingStatistics";
import Button from "../ui/Button";

const LandingContent = () => {
	return (
		<div className="absolute text-white z-2 flex justify-between w-full px-16 m-auto self-center">
			<div className="flex flex-col items-center sm:items-start w-full lg:gap-4">
				<h1 className="md:w-80 lg:w-96 text-[1.4rem] md:text-4xl lg:text-5xl font-semibold text-center md:text-left md:mt-20 lg:mt-0 m-0 mb-2 md:mb-0 leading-6 md:leading-8">
					Let's Make Your Own Cinema
				</h1>
				<h6 className="md:w-80 lg:w-96 text-[0.7rem] lg:text-[0.9rem] mt-0 md:mt-1 font-light text-center sm:text-left leading-3 sm:leading-4">
					You can still access the latest movies and other movies online and of
					a lower price
				</h6>
				<div className="flex justify-center gap-6 mt-3 w-full md:justify-start">
					<Button
						variant={"default"}
						size={"sm"}
						className="text-[0.6rem] md:text-sm"
					>
						Get Started
					</Button>
					<Button
						variant={"ghost"}
						size={"sm"}
						className="text-[0.6rem] md:text-sm"
					>
						More
					</Button>
				</div>
			</div>
			<LandingStatistics className="hidden sm:flex" />
		</div>
	);
};

export default LandingContent;
