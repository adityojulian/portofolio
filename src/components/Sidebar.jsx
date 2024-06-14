import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const container = (delay) => ({
	hidden: { x: -100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5, delay: delay },
	},
});

const Sidebar = () => {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");
			let currentSection = "";

			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.clientHeight;
				if (window.scrollY >= sectionTop - sectionHeight / 4) {
					currentSection = section.getAttribute("id");
				}
			});

			setActiveSection(currentSection);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Set the initial active section

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="flex flex-col items-center lg:items-start">
			<motion.h2
				variants={container(0)}
				initial="hidden"
				whileInView="visible"
				className={`font-bold tracking-tight lg:mt-16 lg:text-4xl ${
					activeSection !== "" ? "block" : "hidden"
				}`}
			>
				Adityo Julian
			</motion.h2>
			<motion.h2
				variants={container(0)}
				initial="hidden"
				whileInView="visible"
				className={`italic tracking-tighter lg:mt-16 lg:text-md text-neutral-400 lg:mb-3 lg:pr-8 ${
					activeSection !== "" ? "hidden" : "block"
				}`}
			>
				Lovely built with React and Tailwind CSS, deployed with Vercel. Laxly
				designed in Figma and coded in Visual Studio Code. All text is set in
				the Inter typeface.
			</motion.h2>
			<motion.span
				variants={container(0.25)}
				initial="hidden"
				whileInView="visible"
				className={`bg-gradient-to-r from-pink-300 to-blue-500 bg-clip-text text-2xl tracking-tight text-transparent mb-3 ${
					activeSection !== "" ? "block" : "hidden"
				}`}
			>
				Full Stack Developer
			</motion.span>
			<a
				href="#about"
				className={`group flex items-center py-1 ${
					activeSection === "about" ? "text-slate-200" : "text-slate-500"
				}`}
			>
				<span
					className={`nav-indicator mr-4 h-px ${
						activeSection === "about" ? "w-16 bg-slate-200" : "w-8 bg-slate-600"
					} transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
				></span>
				<span className="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200">
					About
				</span>
			</a>
			<a
				href="#tech"
				className={`group flex items-center py-1 ${
					activeSection === "tech" ? "text-slate-200" : "text-slate-500"
				}`}
			>
				<span
					className={`nav-indicator mr-4 h-px ${
						activeSection === "tech" ? "w-16 bg-slate-200" : "bg-slate-600 w-8"
					} transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
				></span>
				<span className="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200">
					Technologies
				</span>
			</a>
			<a
				href="#experience"
				className={`group flex items-center py-1 ${
					activeSection === "experience" ? "text-slate-200" : "text-slate-500"
				}`}
			>
				<span
					className={`nav-indicator mr-4 h-px ${
						activeSection === "experience"
							? "w-16 bg-slate-200"
							: "bg-slate-600 w-8"
					} transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
				></span>
				<span className="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200">
					Experiences
				</span>
			</a>
			<a
				href="#project"
				className={`group flex items-center py-1 ${
					activeSection === "project" ? "text-slate-200" : "text-slate-500"
				}`}
			>
				<span
					className={`nav-indicator mr-4 h-px ${
						activeSection === "project"
							? "w-16 bg-slate-200"
							: "bg-slate-600 w-8"
					} transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
				></span>
				<span className="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200">
					Projects
				</span>
			</a>
		</div>
	);
};

export default Sidebar;
