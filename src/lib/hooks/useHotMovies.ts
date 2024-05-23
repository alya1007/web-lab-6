import { HotMoviesContext } from "@/components/context/HotMoviesContext";
import { useContext } from "react";

export const useHotMovies = () => useContext(HotMoviesContext);
