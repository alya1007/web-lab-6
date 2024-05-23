import { createContext, useEffect, useState, ReactNode } from "react";
import { Movie } from "@/data/movies";

export const HotMoviesContext = createContext<Movie[]>([]);

export const HotMoviesProvider = ({ children }: { children: ReactNode }) => {
	const [hotMovies, setHotMovies] = useState<Movie[]>([]);

	useEffect(() => {
		const storedMovies = localStorage.getItem("movies");
		if (storedMovies) {
			try {
				const movies: Movie[] = JSON.parse(storedMovies);
				const hotMovies = movies
					.filter((movie) => movie.type === "movie")
					.sort((a, b) => parseInt(b.year) - parseInt(a.year))
					.slice(0, 7);
				setHotMovies(hotMovies);
			} catch (error) {
				console.error("Error parsing movies from localStorage", error);
			}
		}
	}, []);

	return (
		<HotMoviesContext.Provider value={hotMovies}>
			{children}
		</HotMoviesContext.Provider>
	);
};
