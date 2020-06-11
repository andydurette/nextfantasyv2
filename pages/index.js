import Head from "next/head";
import Navbar from "../components/Navbar";

const Home = () => {

	return (
		<React.Fragment>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section id="homepage">
				<Navbar />
				<div id="homepage-content" >
					<h1 data-testid="index-text">Wecolme to the world of Demian Arata</h1>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Home;
