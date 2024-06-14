import { useState } from "react";
import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from "@material-tailwind/react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const tags = ["all", "ai", "mobile", "web", "iot"];

export function ProjectV2() {
	const [activeTab, setActiveTab] = useState("all");

	const filteredProjects =
		activeTab === "all"
			? PROJECTS
			: PROJECTS.filter((project) => project.tag.includes(activeTab));

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

			<Tabs value={activeTab} className="mt-8">
				<TabsHeader
					className="flex flex-wrap my-3 justify-center"
					// className="py-6"
					indicatorProps={{
						className:
							"bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
					}}
				>
					{tags.map((tag) => (
						<Tab
							key={tag}
							value={tag}
							onClick={() => setActiveTab(tag)}
							className={`cursor-pointer m-2 px-4 tracking-widest font-bold hover:text-white hover:-translate-y-2 ${
								activeTab === tag
									? "text-white -translate-y-2 transition-all duration-300"
									: " text-slate-500 transition-all duration-300"
							}`}
							style={{ width: "auto" }}
						>
							{tag.toUpperCase()}
						</Tab>
					))}
				</TabsHeader>
				<TabsBody
					animate={{
						initial: { opacity: 0 },
						mount: { opacity: 1 },
						unmount: { opacity: 0, x: -250 },
					}}
				>
					{tags.map((tag) => (
						<TabPanel
							key={tag}
							value={tag}
							className="py-0"
							style={{ padding: 0 }}
						>
							<div className="w-full gap-6 flex-wrap flex justify-center items-baseline text-neutral-300 py-4">
								{filteredProjects.map((project, index) => (
									<motion.div
										key={index + project.title}
										whileInView={{
											backgroundColor: "rgb(51,65,85,0.3)",
											y: -20,
										}}
										initial={{ y: 0 }}
										transition={{ duration: 0.3 }}
										className="lg:hidden w-full lg:w-96 md:w-65 py-4 px-2 rounded-xl transform transition-all lg:hover:-translate-y-2 lg:hover:bg-slate-700/30 duration-300"
									>
										<motion.div
										// whileInView={{ opacity: 1, x: 0 }}
										// initial={{ x: -20, opacity: 0 }}
										// transition={{ duration: 1 }}
										>
											<img
												className="rounded-2xl p-2"
												src={project.image}
												alt={project.title}
											/>
										</motion.div>
										<motion.div
											// whileInView={{ opacity: 1, x: 0 }}
											// initial={{ x: 20, opacity: 0 }}
											// transition={{ duration: 1 }}
											className="p-2"
										>
											<h2 className="font-bold text-lg mb-2">
												{project.title}
											</h2>
											<p className="text-sm mb-4 tracking-tighter font-light">
												{project.description}
											</p>
											<div className="flex flex-wrap items-start gap-3">
												{project.technologies.map((tech, index) => (
													<span
														key={index}
														className="rounded-xl bg-blue-400/15 px-2 py-1 text-sm font-medium text-blue-400"
													>
														{tech}
													</span>
												))}
											</div>
										</motion.div>
										<motion.div
											// whileInView={{ opacity: 1, x: 0 }}
											// initial={{ x: -20, opacity: 0 }}
											// transition={{ duration: 1 }}
											className="relative inline-flex group m-2"
										>
											{/* <div className="absolute transition-all duration-1000 opacity-70 -inset-px rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div> */}
											<div className="flex flex-wrap gap-3 py-2">
												{Object.entries(project.links).map(
													([key, value], index) => {
														// Check if the link is an external link
														const isExternal = value.startsWith("http");
														return isExternal ? (
															<a
																key={index}
																href={value}
																target="_blank"
																rel="noopener noreferrer"
																className="relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-purple-800 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-purple-600 rounded"
															>
																{key}
															</a>
														) : (
															<Link
																key={index}
																to={value}
																className="relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-purple-800 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-purple-600 rounded"
															>
																{key}
															</Link>
														);
													}
												)}
											</div>
										</motion.div>
									</motion.div>
								))}
								{filteredProjects.map((project, index) => (
									<motion.div
										key={index + project.title}
										className="hidden lg:block w-full lg:w-96 md:w-65 py-4 px-2 rounded-xl transform transition-all lg:hover:-translate-y-2 lg:hover:bg-slate-700/30 duration-300"
									>
										<motion.div
										// whileInView={{ opacity: 1, x: 0 }}
										// initial={{ x: -20, opacity: 0 }}
										// transition={{ duration: 1 }}
										>
											<img
												className="rounded-2xl p-2"
												src={project.image}
												alt={project.title}
											/>
										</motion.div>
										<motion.div
											// whileInView={{ opacity: 1, x: 0 }}
											// initial={{ x: 20, opacity: 0 }}
											// transition={{ duration: 1 }}
											className="p-2"
										>
											<h2 className="font-bold text-lg mb-2">
												{project.title}
											</h2>
											<p className="text-sm mb-4 tracking-tighter font-light">
												{project.description}
											</p>
											<div className="flex flex-wrap items-start gap-3">
												{project.technologies.map((tech, index) => (
													<span
														key={index}
														className="rounded-xl bg-blue-400/15 px-2 py-1 text-sm font-medium text-blue-400"
													>
														{tech}
													</span>
												))}
											</div>
										</motion.div>
										<motion.div
											// whileInView={{ opacity: 1, x: 0 }}
											// initial={{ x: -20, opacity: 0 }}
											// transition={{ duration: 1 }}
											className="relative inline-flex group m-2"
										>
											{/* <div className="absolute transition-all duration-1000 opacity-70 -inset-px rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div> */}
											<div className="flex flex-wrap gap-3 py-2">
												{Object.entries(project.links).map(
													([key, value], index) => {
														// Check if the link is an external link
														const isExternal = value.startsWith("http");
														return isExternal ? (
															<a
																key={index}
																href={value}
																target="_blank"
																rel="noopener noreferrer"
																className="relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-purple-800 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-purple-600 rounded"
															>
																{key}
															</a>
														) : (
															<Link
																key={index}
																to={value}
																className="relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-purple-800 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-purple-600 rounded"
															>
																{key}
															</Link>
														);
													}
												)}
											</div>
											{/* <a
												href={project.learn}
												target="_blank"
												title=""
												role="button"
												className="relative inline-flex items-center justify-center px-3 py-1 text-base font-bold text-white transition-all duration-200 bg-purple-700 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-purple-400 rounded"
											>
												Learn more
											</a> */}
										</motion.div>
									</motion.div>
								))}
							</div>
						</TabPanel>
					))}
					{/* <TabPanel value={activeTab}>
						<div className="w-full gap-6 flex-wrap flex justify-center items-baseline">
							{filteredProjects.map((project, index) => (
								<motion.div
									key={index + project.title}
									className="w-full lg:w-96 md:w-65 py-2 px-2 rounded-xl transform transition-all hover:-translate-y-2 hover:bg-slate-700/30 duration-300"
								>
									<motion.div
										whileInView={{ opacity: 1, x: 0 }}
										initial={{ x: -20, opacity: 0 }}
										transition={{ duration: 1 }}
									>
										<img
											className="rounded-xl p-2"
											src={project.image}
											alt={project.title}
										/>
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
						</div>
					</TabPanel> */}
				</TabsBody>
			</Tabs>

			<p className="flex w-full lg:w-1/2 mt-20 lg:px-10 italic tracking-tighter lg:mt-16 lg:text-md text-neutral-400">
				Lovely built with React and Tailwind CSS, deployed with Vercel. Laxly
				designed in Figma and coded in Visual Studio Code. All text is set in
				the Inter typeface.
			</p>
		</section>
	);
}

export default ProjectV2;
