import { Genre } from "@/data/genres";

const GenreCard = ({ genre }: { genre: Genre }) => {
	return (
		<div className="genre-card">
			<h3>{genre.name}</h3>
		</div>
	);
};

export default GenreCard;
