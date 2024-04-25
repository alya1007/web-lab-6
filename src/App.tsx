// import "./App.css";
import ThemeSwitch from "./components/ThemeSwitch";
import { movies } from "./data/movies";

function App() {
	localStorage.setItem("movies", JSON.stringify(movies));

	return (
		<div className="app bg-slate-200 dark:bg-black h-screen w-full p-6 transition-colors duration-500 ease-in-out">
			<div className="flex flex-col items-center h-full justify-between">
				<h1 className="text-slate-800 ">Hello World</h1>
				<ThemeSwitch />
			</div>
		</div>
	);
}

export default App;
