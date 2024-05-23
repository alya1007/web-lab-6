import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
	return (
		<footer className="bg-[#101010] text-white py-8 mt-20">
			<div className="container mx-auto px-4">
				<div className="w-full flex flex-col md:flex-row justify-center gap-6 md:gap-10 lg:gap-24 mx-auto px-10 text-center md:text-start lg:px-20">
					<div>
						<h2 className="text-sm text-primary mb-2 font-semibold">
							Contact Us
						</h2>
						<p className="mb-2 text-sm">Email: info@moviedatabase.com</p>
						<p className="mb-2 text-sm">Phone: +1 (123) 456-7890</p>
						<p className="text-sm">
							Address: 123 Movie St, Film City, CA 12345
						</p>
					</div>
					<div>
						<h2 className="text-sm text-primary mb-2 font-semibold">
							Quick Links
						</h2>
						<ul className="text-sm">
							<li className="mb-2">
								<a href="/" className="hover:text-gray-400">
									Home
								</a>
							</li>
							<li className="mb-2">
								<a href="/about" className="hover:text-gray-400">
									About Us
								</a>
							</li>
							<li className="mb-2">
								<a href="/movies" className="hover:text-gray-400">
									Movies
								</a>
							</li>
							<li className="mb-2">
								<a href="/contact" className="hover:text-gray-400">
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="text-sm text-primary mb-2 font-semibold">
							Latest News
						</h2>
						<ul className="text-sm">
							<li className="mb-2">
								<a href="/news/1" className="hover:text-gray-400">
									Exciting Movie Releases in 2024
								</a>
							</li>
							<li className="mb-2">
								<a href="/news/2" className="hover:text-gray-400">
									Behind the Scenes of Blockbusters
								</a>
							</li>
							<li className="mb-2">
								<a href="/news/3" className="hover:text-gray-400">
									Interviews with Top Directors
								</a>
							</li>
							<li className="mb-2">
								<a href="/news/4" className="hover:text-gray-400">
									Upcoming Film Festivals
								</a>
							</li>
						</ul>
					</div>
					<div className=" flex flex-col justify-between">
						<div className="flex flex-col">
							<h2 className="text-sm text-primary mb-2 font-semibold">
								Get In Touch
							</h2>
							<div className="flex space-x-4 items-center justify-center md:justify-start">
								<a
									href="https://facebook.com"
									className="text-white hover:text-gray-400"
								>
									<FaFacebookF size={20} />
								</a>
								<a
									href="https://twitter.com"
									className="text-white hover:text-gray-400"
								>
									<FaTwitter size={20} />
								</a>
								<a
									href="https://instagram.com"
									className="text-white hover:text-gray-400"
								>
									<FaInstagram size={20} />
								</a>
								<a
									href="https://linkedin.com"
									className="text-white hover:text-gray-400"
								>
									<FaLinkedinIn size={20} />
								</a>
							</div>
						</div>
						<div className="text-sm mt-10 md:mt-0">
							<p>&copy; 2024 Movie Database. All rights reserved.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-primary w-full h-[0.5px] mt-7"></div>
		</footer>
	);
};

export default Footer;
