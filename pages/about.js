import Head from "next/head";
import Navbar from "../components/Navbar";

const About = () => {

	return (
		<React.Fragment>
			<Head>
				<title>About</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section id="about">
				<Navbar />
				<div id="homepage-content" >
					<h1 data-testid="index-text">All about Demian Arata</h1>
				</div>
			</section>
		</React.Fragment>
	);
};

export default About;
