import { Genre } from "@/data/genres";
import rightArrow from "@/assets/rightArrow.png";

const GenreCard = ({ genre }: { genre: Genre }) => {
	return (
		<div className="bg-bgSecondary/20 dark:bg-bgSecondary rounded-lg flex items-center">
			<div className="bg-bgPrimaryWhite dark:bg-bgPrimary md:m-4 lg:m-5 rounded-lg p-3 md:w-14 lg:w-16 m-5 w-14">
				<img src={genre.icon} />
			</div>
			<div className="flex flex-col flex-grow justify-center">
				<h1 className="md:text-sm lg:text-md">{genre.name}</h1>
				<div className="flex items-center justify-between mr-5">
					<p className="text-xs md:text-[0.6rem] lg:text-sm">
						{genre.movies.length > 0
							? `${genre.movies.length}+ Movies`
							: "57+ Movies"}
					</p>
					<div>
						<img
							src={rightArrow}
							alt="right arrow"
							className="w-4 md:w-3 lg:w-4"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GenreCard;
