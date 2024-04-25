import logo from "@/assets/logo.png";
import Button from "./ui/Button";
import ThemeSwitch from "./ThemeSwitch";

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
						<li>Home</li>
						<li>Movies</li>
						<li>TV Shows</li>
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
