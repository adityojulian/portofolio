import lftrack from "../assets/projects/lftrack.png";
import medassist from "../assets/projects/medassist.png";
import revumate from "../assets/projects/revumate.png";
import remis from "../assets/projects/remis.png";
import receipify from "../assets/projects/receipify.png";
import portofolio from "../assets/projects/portofolio.png";

export const HERO_CONTENT = `Experience seeker ready to pour time and passion within the IT industry with a solid four-year knowledge of computer science supported by outstanding organizational, leadership, project management, and software development abilities reflected by various leadership positions with a chairman of the computer science student association as one of them, along with diverse mobile and web application development projects. Currently pursuing a master's degree in Systems Engineering for the Internet of Things at the University College London.`;

// export const ABOUT_TEXT_1 = `I've come to realize that learning is not just about acquiring new skills; it's also about shaping who I am. Learning new ideas, tools, mindsets, and subjects gives me the framework on how to think and express my insights based on different perspectives. This passion recently led me to an exciting project where I combined edge devices equipped with sensors and software techniques for the first time to develop a Smart Crash Cart for hospitals. This experience underscored for me how approaching problems from different perspectives can lead to novel solutions, deepening my eagerness to learn new things.`;
export const ABOUT_TEXT_1 = `I've come to realize that learning is not just about acquiring new skills; it's also about shaping who I am. Learning new ideas, tools, mindsets, and subjects gives me the framework on how to think and express my insights based on different perspectives.`;
export const ABOUT_TEXT_2 = `My expertise spans web and mobile app development, but my heart beats for machine learning and artificial intelligence. I've delved into natural language processing, computer vision and optimization projects, working with algorithms such as CNNs, LSTMs, Transformers, BERT, YOLO, MobileNet, and more. Currently, I'm focused on a novel approach of implementing model-based Reinforcement Learning for optimizing Irrigation Scheduling.`;
export const ABOUT_TEXT_3 = `When I'm not immersed in tech, I enjoy capturing the essence of life through street photography and staying active with a game of badminton.`;

export const EXPERIENCES = [
	{
		year: "Oct 2022 - Jun 2023",
		role: "Head of App Development",
		company: "Indonesian Student and Resident Association in Birmingham",
		description: `I pioneered a web application for the Indonesian Student and Society in Birmingham, serving as their central information hub and a census-gathering platform for Indonesians in Birmingham. I designed the project's tech stack and architecture, delivered responsive full-stack features using MongoDB, React, Redux, and Node.js, and deployed the web app to DigitalOcean with SSL certificates and domain configuration, all while adopting an agile approach.`,
		technologies: [
			"Javascript",
			"React.js",
			"Redux",
			"MongoDB",
			"Node.js",
			"DigitalOcean",
		],
	},
	{
		year: "Feb 2021 - Feb 2022",
		role: "Chairman",
		company: "Computer Science Student Association at Gadjah Mada University",
		description: `As Chairman of the Computer Science Association at Universitas Gadjah Mada (HIMAKOM UGM) from February 2021 to February 2022, I led a team to ensure organizational efficiency and consistency. I reviewed performance, identified strategic challenges, and set impactful standards. We grasped numerous opportunities by maintaining strong relationships with IT companies and securing over 10 partnerships. In response to the pandemic, we transitioned all programs online and established 5+ new programs to enhance students' IT skills and entrepreneurship.`,
		technologies: [],
	},
];

export const PROJECTS = [
	{
		title: "LFTrack",
		image: lftrack,
		description:
			"This Flutter-based cross-platforms mobile application is designed to streamline the way Lateral Flow Tests (LFTs) are processed and managed by forcing as minimum user interaction as possible while maintaining user-friendly interface and intuitiveness. The app, through integrated light model (TFLite) and data management technologies, enables users to scan LFTs using their smartphone cameras, automatically interpret the results, and seamlessly store these results in a secure database.",
		technologies: [
			"Dart",
			"Flutter",
			"GetX",
			"TensorFlow Lite",
			"Google ML Kit",
			"Firebase Auth",
			"Firestore",
		],
		links: {
			"Learn More": "https://github.com/adityojulian/LFTrack",
			Microsite: "https://adityojulian.github.io/LFTrack/",
		},
		tag: ["mobile", "ai"],
	},
	{
		title: "MedAssist",
		image: medassist,
		description:
			"MedAssist is a smart crash cart system designed to streamline medical supply management. It leverages weight sensors and camera-based hand tracking for real-time inventory monitoring, offering a low-cost and power-efficient solution. By automating the management of crash cart contents, MedAssist reduces manual effort, allowing nurses and hospital staff to focus more on patient care. MedAssist reduces the time required for manually checking and logging item availability from 30 seconds to 2 seconds.",
		technologies: [
			"Raspberry Pi",
			"Load Cell",
			"Google MediaPipe",
			"OpenCV",
			"React.js",
			"Node.js",
			"MongoDB",
			"Azure IoT Hub",
			"Azure Web Services",
		],
		learn: "",
		links: {
			"Video Demo":
				"https://drive.google.com/file/d/10ZaDeLI8-h2_Bp4vprf2V0Itty0qk-mb/view?usp=sharing",
		},
		tag: ["iot"],
	},
	{
		title: "Revumate",
		image: revumate,
		description:
			"Revumate is a web app that redefines shopping by providing deeper insights into product reviews through its Aspect-Based Sentiment Analysis (ABSA) feature, which automatically finds and breaks down reviews into distinct aspects like 'Battery Life', 'Customer Service', etc. This tool allows users to analyze Amazon product reviews in real-time and presents the data through visual dashboards, showing strengths and weaknesses, top-discussed aspects, and sentiment trends. Built with a BERT-based architecture for aspect extraction and deep learning models, such as CNNs and LSTMs for sentiment analysis.",
		technologies: [
			"BERT",
			"CNN",
			"LSTM",
			"React",
			"Django",
			"MongoDB",
			"Google Cloud Platform",
		],
		links: {
			"Learn More": "/revumate",
			"Video Demo":
				"https://drive.google.com/file/d/17xPquYu48p4azttmsmAdiHQd5eM4l2eF/view",
		},
		// learn: "/revumate",
		tag: ["web", "ai"],
	},
	{
		title: "Remis",
		image: remis,
		description:
			"Remis is a comprehensive web application designed to digitize medical records for multiple clinics in Indonesia, utilizing technologies such as MongoDB, Express, React, Redux, and Node.js. Each clinic has their own securely stored database that manage patient data and their digital records. It ensures robust security through JWT rotation, data hashing, and end-to-end encryption, safeguarding sensitive medical information.",
		technologies: [
			"React",
			"Redux",
			"Node.js",
			"Express.js",
			"JWT",
			"MongoDB",
			"Bootstrap",
			"Digital Ocean",
		],
		links: {},
		tag: ["web"],
	},
	{
		title: "Receipify",
		image: receipify,
		description:
			"Receipify is an app that generates recipes from grocery receipts and home ingredients using the Spoonacular API. Users can add ingredients to their inventory, scan receipts for recipe suggestions, and customize recipes based on available items. The app, built with Flutter and Django, also allows users to explore popular recipes, search with inventory consideration, and manage scanned receipts. Receipify enhances meal planning, reduces food waste, and simplifies home cooking, making it a valuable kitchen tool.",
		technologies: ["Flutter", "Django", "JWT"],
		links: {
			"Learn More": "https://github.com/adityojulian/receipify",
		},
		tag: ["mobile"],
	},
	{
		title: "Personal Website V1",
		image: portofolio,
		description:
			"Fun one-weekend project for the first version of Adityo Julian's personal website.",
		technologies: ["React", "Tailwind CSS", "Vercel"],
		links: {},
		tag: ["web"],
	},
];

export const CONTACT = {
	address: "London, UK ",
	phoneNo: "+44 777 5629276 ",
	email: "adityojulian.twm@gmail.com",
};
