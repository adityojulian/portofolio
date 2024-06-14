import aboutImg from "../assets/about_photo.jpg";
import { ABOUT_TEXT_1, ABOUT_TEXT_2, ABOUT_TEXT_3 } from "../constants";
import { motion } from "framer-motion";

const About = () => {
	return (
		<section id="about" className="border-neutral-900 scroll-mt-16">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ y: -50, opacity: 0 }}
				transition={{ duration: 0.5 }}
				className="my-20 text-center text-4xl"
			>
				About
				<span className=" text-neutral-500"> Me</span>
			</motion.h2>
			<div className="flex flex-wrap">
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 0.5 }}
					className="w-full lg:w-1/2 lg:p-8"
				>
					<div className="flex items-center justify-center">
						<img
							className="rounded-2xl"
							src={aboutImg}
							alt="about"
							width={500}
							height={500}
						/>
					</div>
				</motion.div>
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 100 }}
					transition={{ duration: 0.5 }}
					className="w-full lg:w-1/2"
				>
					<div className="flex flex-wrap justify-center lg:justify-start">
						<p className="my-2 max-w-xl pt-6 pb-2 font-light tracking-tighter">
							{ABOUT_TEXT_1}
						</p>
						<p className="my-2 max-w-xl pb-2 font-light tracking-tighter">
							{ABOUT_TEXT_2}
						</p>
						<p className="my-2 max-w-xl font-light tracking-tighter">
							{ABOUT_TEXT_3}
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
