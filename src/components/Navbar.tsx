import logo from "@/assets/logo.png";

const Navbar = () => {
	return (
		<div className="flex justify-between items-center">
			<a className="flex justify-between items-center gap-2" href="/">
				<img src={logo} alt="logo" className="h-10"></img>
				<h1 className="text-primary uppercase font-medium">movie portal</h1>
			</a>
			<nav>
				<ul className="flex justify-between">
					<li>Home</li>
					<li>Movies</li>
					<li>TV Shows</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
