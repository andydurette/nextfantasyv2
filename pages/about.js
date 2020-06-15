import Head from "next/head";

const About = () => {

	return (
		<React.Fragment>
			<Head>
				<title>About</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section id="aboutpage" >
				<div className="page-content" >
					<h1 data-testid="about-text">All about Demian Arata</h1>
					<p>Demian Arata is a fantasy setting created for use with table top games like dungeons and dragons. It&apos;s world focus&apos;s on magical adventure with hints of political intrigue as each country has secrets to hide.</p>
					<p>Each country has their own unique culture, history and leaders listed which reflects the views of it inhabitants, these can be found by going to the countries pages or the map page which has an interactive map giving brief looks into the countries.</p>
				</div>
			</section>
		</React.Fragment>
	);
};

export default About;
