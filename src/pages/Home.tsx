import FilterBar from "@/components/filter/FiltersBar";
import Genres from "@/components/genres/Genres";
import LandingCarousel from "@/components/landing/LandingCarousel";
import LandingStatistics from "@/components/landing/LandingStatistics";

const Home = () => {
	return (
		<>
			<LandingCarousel />
			<LandingStatistics className="flex sm:hidden" />
			<Genres />
			<FilterBar />
		</>
	);
};

export default Home;
