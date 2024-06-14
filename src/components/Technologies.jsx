import { RiReactjsLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMqtt } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});

const Technologies = () => {
	return (
		<section id="tech" className="border-neutral-800 scroll-mt-16">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ y: -50, opacity: 0 }}
				transition={{ duration: 1 }}
				className="my-20 text-center text-4xl"
			>
				Technologies
			</motion.h2>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ x: -100, opacity: 0 }}
				transition={{ duration: 1 }}
				className="flex flex-wrap items-center justify-center gap-6"
			>
				<motion.div
					variants={iconVariants(2.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-2 border-neutral-600 p-4"
				>
					<RiReactjsLine className="text-7xl text-cyan-400" />
				</motion.div>
				<motion.div
					variants={iconVariants(3)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-2 border-neutral-600 p-4"
				>
					<SiRedux className="text-7xl text-purple-400" />
				</motion.div>
				<motion.div
					variants={iconVariants(5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-2 border-neutral-600 p-4"
				>
					<SiMongodb className="text-7xl text-green-500" />
				</motion.div>
				<motion.div
					variants={iconVariants(2)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-2 border-neutral-600 p-4"
				>
					<FaNodeJs className="text-7xl text-green-600" />
				</motion.div>
				<motion.div
					variants={iconVariants(6)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-2 border-neutral-600 p-4"
				>
					<SiExpress className="text-7xl" />
				</motion.div>
				<motion.div
					variants={iconVariants(2.5)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-2 border-neutral-600 p-4"
				>
					<SiMqtt className="text-7xl text-purple-900" />
				</motion.div>
				<motion.div
					variants={iconVariants(4)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-2 border-neutral-600 p-4"
				>
					<SiMicrosoftazure className="text-7xl text-blue-400" />
				</motion.div>
				<motion.div
					variants={iconVariants(3)}
					initial="initial"
					animate="animate"
					className="rounded-2xl border-2 border-neutral-600 p-4"
				>
					<SiFlutter className="text-7xl" />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Technologies;
