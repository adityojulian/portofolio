import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Revumate from "./pages/Revumate";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		const handleMouseMove = (e) => {
			const x = (e.clientX / window.innerWidth) * 100;
			const y = (e.clientY / window.innerHeight) * 100;
			document.documentElement.style.setProperty("--cursor-x", `${x}%`);
			document.documentElement.style.setProperty("--cursor-y", `${y}%`);
		};

		document.addEventListener("mousemove", handleMouseMove);
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
	return (
		<>
			<div className="fixed top-0 -z-10 h-full w-full">
				<div className="relative h-full w-full bg-slate-950">
					<div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
					<div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
				</div>
				<div className="hidden lg:block gradient-overlay fixed top-0 left-0 h-full w-full pointer-events-none"></div>
			</div>
			<div className="overflow-x-clip text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 mx-auto px-4 lg:px-8">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/revumate" element={<Revumate />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
