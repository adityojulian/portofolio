import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import Project from "./components/Project";
import Sidebar from "../components/Sidebar";
import Technologies from "../components/Technologies";
import ProjectV2 from "../components/Project_v2";

const Home = () => {
	return (
		<>
			{/* <div className="fixed top-0 -z-10 h-full w-full">
				<div className="relative h-full w-full bg-slate-950">
					<div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
					<div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
				</div>
				<div className="gradient-overlay fixed top-0 left-0 h-full w-full pointer-events-none"></div>
			</div>
			<div className="overflow-x-clip text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 mx-auto px-8"> */}
			<div className="flex flex-col container mx-auto px-8">
				<Navbar />
				<Hero />
				<div className="flex justify-center lg:flex lg:justify-between lg:gap-4">
					<div className="hidden lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:pb-8">
						<Sidebar />
						<div className="lg:block">
							<Contact />
						</div>
					</div>
					<div className="lg:w-2/3 lg:pb-10">
						<About />
						<Technologies />
						<Experience />
						<ProjectV2 />
						<div className="lg:hidden">
							<Contact />
						</div>
					</div>
				</div>
				{/* <Contact /> */}
			</div>
			{/* </div> */}
		</>
	);
};

export default Home;
