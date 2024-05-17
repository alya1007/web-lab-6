import LandingCarousel from "@/components/LandingCarousel";
import LandingStatistics from "@/components/LandingStatistics";

const Home = () => {
	return (
		<>
			<LandingCarousel />
			<LandingStatistics className="flex sm:hidden" />
		</>
	);
};

export default Home;
