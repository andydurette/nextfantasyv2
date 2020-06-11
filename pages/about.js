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
			</section>
			</React.Fragment>
	);
};

export default About;
