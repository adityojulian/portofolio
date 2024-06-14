import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const tags = ["all", "ai", "mobile", "web", "iot"];

const Project = () => {
	const [selectedTag, setSelectedTag] = useState("all");
	const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
	// const [displayedProjects, setDisplayedProjects] = useState(filteredProjects);
	const [showProjects, setShowProjects] = useState(true);

	useEffect(() => {
		const newFilteredProjects =
			selectedTag === "all"
				? PROJECTS
				: PROJECTS.filter((project) => project.tag.includes(selectedTag));

		setShowProjects(false);

		const timer = setTimeout(() => {
			setFilteredProjects(newFilteredProjects);
			setShowProjects(true);
		}, 250); // Adjust the duration to match the exit transition duration

		return () => clearTimeout(timer);
	}, [selectedTag]);

	return (
		<section id="project" className="border-neutral-900 scroll-mt-16">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ y: -50, opacity: 0 }}
				transition={{ duration: 1 }}
				className="mt-20 text-center text-4xl"
			>
				Projects
			</motion.h2>

			<div className="flex flex-wrap my-8 justify-center">
				{tags.map((tag) => (
					<button
						key={tag}
						onClick={() => setSelectedTag(tag)}
						className={`m-2 px-4 tracking-widest font-bold hover:text-white hover:-translate-y-2 ${
							selectedTag === tag
								? "text-white -translate-y-2 transition-all duration-300"
								: " text-slate-500 transition-all duration-300"
						}`}
					>
						{tag.toUpperCase()}
					</button>
				))}
			</div>

			<div className="w-full gap-6 flex-wrap flex justify-center items-baseline">
				<AnimatePresence>
					{showProjects &&
						filteredProjects.map((project, index) => (
							<motion.div
								key={index + selectedTag}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
								className="w-full lg:w-96 md:w-65 py-2 px-2 rounded-xl transform transition-all hover:-translate-y-2 hover:bg-slate-700/30 duration-300"
							>
								<motion.div
									whileInView={{ opacity: 1, x: 0 }}
									initial={{ x: -20, opacity: 0 }}
									transition={{ duration: 1 }}
								>
									<img className="rounded-xl p-2" src={project.image} alt="" />
								</motion.div>
								<motion.div
									whileInView={{ opacity: 1, x: 0 }}
									initial={{ x: 20, opacity: 0 }}
									transition={{ duration: 1 }}
									className="p-2"
								>
									<h2 className="font-bold text-lg mb-2">{project.title}</h2>
									<p className="text-sm mb-4 tracking-tighter font-light">
										{project.description}
									</p>
									<div className="flex flex-wrap items-start gap-1">
										{project.technologies.map((tech, index) => (
											<span
												key={index}
												className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-500"
											>
												{tech}
											</span>
										))}
									</div>
								</motion.div>
								<motion.div
									whileInView={{ opacity: 1, x: 0 }}
									initial={{ x: -20, opacity: 0 }}
									transition={{ duration: 1 }}
									className="relative inline-flex group m-2"
								>
									<div className="absolute transition-all duration-1000 opacity-70 -inset-px rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
									<a
										href={project.learn}
										target="_blank"
										title=""
										role="button"
										className="relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-purple-700 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-purple-400 rounded"
									>
										Learn more
									</a>
								</motion.div>
							</motion.div>
						))}
				</AnimatePresence>
			</div>
			<div className="flex item w-1/2 mt-20 px-10">
				Loosely designed in Figma and coded in Visual Studio Code by yours
				truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All
				text is set in the Inter typeface.
			</div>
		</section>
	);
};

export default Project;
