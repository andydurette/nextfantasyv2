import Head from "next/head";

const About = () => {

	return (
		<React.Fragment>
			<Head>
				<title>About</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section id="about" >
				<div id="homepage-content" >
					<h1 data-testid="index-text" data-testid="about-text">All about Demian Arata</h1>
				</div>
			</section>
		</React.Fragment>
	);
};

export default About;
