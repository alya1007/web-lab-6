import "./App.css";
import { movies } from "./data/movies";
import Home from "./pages/Home";

function App() {
	localStorage.setItem("movies", JSON.stringify(movies));

	return <Home />;
}

export default App;
