// import "./App.css";
import Navbar from "./components/Navbar";
import { landingMoviesImages, movies } from "./data/movies";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	localStorage.setItem("movies", JSON.stringify(movies));
	localStorage.setItem(
		"landingMoviesImages",
		JSON.stringify(landingMoviesImages)
	);

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}>
					<Route index element={<Home />} />
					<Route path="movies" element={<Home />} />
					<Route path="tv-shows" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
