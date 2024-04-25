import logo from "@/assets/logo.png";
import Button from "./ui/Button";
import ThemeSwitch from "./ThemeSwitch";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="flex justify-between items-center">
			<a className="flex justify-between items-center gap-2" href="/">
				<img src={logo} alt="logo" className="h-10"></img>
				<h1 className="text-primary uppercase font-medium">movie portal</h1>
			</a>
			<div className="flex justify-between items-center gap-6">
				<ThemeSwitch />
				<nav>
					<ul className="flex justify-between gap-4">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/movies">Movies</Link>
						</li>
						<li>
							<Link to="/tv-shows">TV Shows</Link>
						</li>
					</ul>
				</nav>
				<Button variant={"default"} size="sm">
					Sign up
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
