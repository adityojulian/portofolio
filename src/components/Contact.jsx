import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
	return (
		<div className="border-neutral-900 lg:text-left text-center lg:pb-4 lg:my-0 my-20">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ y: -20, opacity: 0 }}
				transition={{ duration: 0.5 }}
				className="lg:font-bold tracking-tight lg:mt-16 text-4xl mb-5"
			>
				Get in Touch
			</motion.h2>
			<div className="tracking-tighter mb-5">
				<motion.p
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ x: -10, opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="my-1"
				>
					{CONTACT.address}
				</motion.p>
				<motion.p
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ x: 10, opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="my-1"
				>
					{CONTACT.phoneNo}
				</motion.p>
				<motion.a
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ x: -10, opacity: 0 }}
					transition={{ duration: 0.5 }}
					href="mailto:adityojulian.twm@gmail.com"
					className="border-b"
				>
					{CONTACT.email}
				</motion.a>
			</div>
			<div className="flex lg:items-start lg:justify-start items-center justify-center gap-4 text-2xl">
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
		</div>
	);
};

export default Contact;
