import FilterBar from "@/components/filter/FiltersBar";
import Genres from "@/components/genres/Genres";
import HotSection from "@/components/hot/HotSection";
import LandingCarousel from "@/components/landing/LandingCarousel";
import LandingStatistics from "@/components/landing/LandingStatistics";
import RecommendedSection from "@/components/recommended/RecommendedSection";

const Home = () => {
	return (
		<>
			<LandingCarousel />
			<LandingStatistics className="flex sm:hidden" />
			<Genres />
			<FilterBar />
			<HotSection />
			<RecommendedSection />
		</>
	);
};

export default Home;
