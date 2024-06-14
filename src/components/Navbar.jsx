// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/aj_logo.svg";

const Navbar = () => {
	return (
		<nav className="mb-20 flex items-center justify-between py-6">
			<div className="flex flex-shrink-0 items-center">
				<img className="mx-2 w-10" src={logo} alt="Logo" />
			</div>
			<div className="m-8 flex items-center justify-center gap-4 text-2xl">
				<a href="https://www.linkedin.com/in/adityojulian/" target="_blank">
					<FaLinkedin />
				</a>
				<a href="https://github.com/adityojulian" target="_blank">
					<FaGithub />
				</a>
				<a href="https://www.instagram.com/adityojulian/" target="_blank">
					<FaInstagram />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
