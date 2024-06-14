import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
	return (
		<section id="experience" className=" border-neutral-900 scroll-mt-16">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ y: -50, opacity: 0 }}
				transition={{ duration: 1 }}
				className="my-20 text-center text-4xl"
			>
				Experiences
			</motion.h2>
			<div>
				{EXPERIENCES.map((experience, index) => (
					<div key={index} className="mb-8 flex flex-wrap justify-center">
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ x: -100, opacity: 0 }}
							transition={{ duration: 1 }}
							className="w-full max-w-xl lg:w-1/4"
						>
							<p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
						</motion.div>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ x: 100, opacity: 0 }}
							transition={{ duration: 1 }}
							className="w-full max-w-xl lg:w-3/4"
						>
							<h6 className="mb-2 font-semibold">
								{experience.role} -{" "}
								<span className="text-sm text-purple-100">
									{experience.company}
								</span>
							</h6>
							<p className="mb-4 text-neutral-400">{experience.description}</p>
							<div className="flex flex-wrap items-start gap-1">
								{experience.technologies.map((tech, index) => (
									<span
										key={index}
										className="rounded-xl bg-blue-400/15 px-2 py-1 text-sm font-medium text-blue-400"
									>
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Experience;
