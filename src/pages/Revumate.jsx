import { Link } from "react-router-dom";
import { useEffect } from "react";
import tableSummary from "../assets/revumate/table_summary.png";
import tableSummaryPrice from "../assets/revumate/table_summary_price.png";
import generalInfo from "../assets/revumate/general_info.png";
import graphVis from "../assets/revumate/graph_vis.png";
import landing from "../assets/revumate/Landing.png";

const Revumate = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="flex flex-col w-full lg:w-1/2 container mx-auto px-4 py-8 mt-12">
			<div className="">
				<Link
					to="/"
					className="py-1 text-blue-400 font-semibold transition-all duration-300 inline-flex text-left mb-4 items-center bg-blue-400/15 rounded gap-2 px-3 group"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						className="fill-blue-400 group-hover:fill-blue-600 transition-all duration-300"
					>
						<path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
						<path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z" />
					</svg>
					<div className="group-hover:ml-2 transition-all duration-300">
						Back to Home
					</div>
				</Link>
			</div>
			<h1 className="text-4xl font-bold text-left mb-4">
				Revumate: Aspect-Based Sentiment Analysis for Amazon Reviews
			</h1>
			<p className="mb-12 italic">
				Revumate provides instant insights into product reviews through
				Aspect-Based Sentiment Analysis (ABSA). ABSA automatically extract
				aspects (<q>Battery</q>, <q>Camera</q>, etc.) and provides their
				sentiment (positive, negative, neutral) from each sentence within the
				product reviews. The Aspect Term Extraction (ATE) model was built using
				Transformer-based model, BERT. While the aspect-based sentiment anaylsis
				model was built using Lonng Short-Term Memory (LSTM) algorithm.
			</p>

			<div className="mb-12">
				<h2 className="text-2xl font-semibold mb-4">Landing Page</h2>
				<div className="overflow-hidden rounded-lg shadow-lg">
					<img
						src={landing}
						alt="Landing Page"
						className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
					/>
				</div>
				<p className="mt-4">
					The landing page allows users to insert Amazon product link, start the
					analysis, and visualize the results. The user can also choose between
					Amazon product reviews, or formatted CSV file that contain product
					reviews for the analysis. Finally, the user can revisualize the result
					by uploading the downloaded analysis.
				</p>
			</div>

			<div className="mb-12 flex flex-col lg:flex-row items-center gap-3">
				<div className="lg:w-1/2 mb-4 lg:mb-0">
					<h2 className="text-2xl font-semibold mb-4">General Information</h2>
					<p className="mt-4">
						The general information section displays a summary of the analysis,
						including the total number of sentences, the percentage of positive
						reviews, the most popular aspect, the strength point of the product,
						and finally the aspect from the product that needs improvement.
					</p>
				</div>
				<div className="lg:w-1/2 overflow-hidden rounded-lg shadow-lg">
					<img
						src={generalInfo}
						alt="General Information"
						className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
					/>
				</div>
			</div>

			<div className="mb-12 flex flex-col lg:flex-row items-center gap-3">
				<div className="lg:w-1/2 lg:order-1 mb-4 lg:mb-0">
					<h2 className="text-2xl font-semibold mb-4">
						Single Sentence Analysis Table
					</h2>
					<p className="mt-4">
						This table provides a detailed analysis of each sentence,
						highlighting the aspect term, the polarity prediction, and other
						relevant information.
					</p>
				</div>
				<div className="lg:w-1/2 overflow-hidden rounded-lg shadow-lg lg:order-2">
					<img
						src={tableSummary}
						alt="Single Sentence Analysis"
						className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
					/>
				</div>
			</div>

			<div className="mb-12 flex flex-col lg:flex-row items-center gap-3">
				<div className="lg:w-1/2 mb-4 lg:mb-0">
					<h2 className="text-2xl font-semibold mb-4">Filter an Aspect</h2>
					<p className="mt-4">
						User can choose between all the predicted aspects from the reviews
						and see their analysis. In this example, the user chooses{" "}
						<q>price</q> from the dropdown and the table shows every sentence
						related to price, including its summary on the bottom of the table.
					</p>
				</div>
				<div className="lg:w-1/2 overflow-hidden rounded-lg shadow-lg">
					<img
						src={tableSummaryPrice}
						alt="Price Analysis"
						className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
					/>
				</div>
			</div>

			<div className="mb-12 flex flex-col lg:flex-row items-center gap-3">
				<div className="lg:w-1/2 lg:order-1 mb-4 lg:mb-0">
					<h2 className="text-2xl font-semibold mb-4">Visualization</h2>
					<p className="mt-4">
						Various visualizations help users understand the sentiment
						distribution across different aspects and identify key areas of
						improvement.
					</p>
				</div>
				<div className="lg:w-1/2 overflow-hidden rounded-lg shadow-lg lg:order-2">
					<img
						src={graphVis}
						alt="Visualization"
						className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
					/>
				</div>
			</div>
		</div>
	);
};

export default Revumate;
