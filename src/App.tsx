import "./App.css";
import {movies} from "./data/movies"

function App() {
	localStorage.setItem("movies", JSON.stringify(movies));

	return (
		<>
			<h1 className="text-7xl font-bold underline">Hello world!</h1>
		</>
	);
}

export default App;
