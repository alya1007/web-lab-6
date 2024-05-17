import logo from "@/assets/logo.png";
import Button from "./ui/Button";
import ThemeSwitch from "./ui/ThemeSwitch";
import { Link } from "react-router-dom";
import { useState } from "react"; // import state

const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

	return (
		<div className="flex items-center justify-between text-xs md:px-20 md:py-8 px-6 py-4">
			<a className="flex justify-between items-center gap-2" href="/">
				<img src={logo} alt="logo" className="h-10"></img>
				<h1 className="text-primary uppercase font-medium hidden md:block md:text-base">
					movie portal
				</h1>
			</a>
			<div className="flex gap-8 items-center md:text-base">
				<ThemeSwitch />
				<nav>
					<section className="MOBILE-MENU flex lg:hidden">
						<div
							className="HAMBURGER-ICON space-y-1.5 hover:cursor-pointer"
							onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
						>
							<span className="block h-[3px] w-7 rounded-md bg-ternary"></span>
							<span className="block h-[3px] w-7 rounded-md bg-ternary"></span>
							<span className="block h-[3px] w-7 rounded-md bg-ternary"></span>
						</div>

						<div
							className={
								isNavOpen ? "showMenuNav dark:bg-bgPrimary" : "hideMenuNav"
							}
						>
							{" "}
							<div
								className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
								onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
							>
								<svg
									className="h-8 w-8 text-ternary dark:text-white hover:cursor-pointer"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1="18" y1="6" x2="6" y2="18" />
									<line x1="6" y1="6" x2="18" y2="18" />
								</svg>
							</div>
							<ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center min-h-[250px] justify-between gap-4">
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
						</div>
					</section>

					<ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
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
			<style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
		</div>
	);
};

export default Navbar;
