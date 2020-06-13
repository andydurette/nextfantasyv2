import Head from "next/head";

const Home = () => {

	return (
		<React.Fragment>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section id="homepage">
				<div className="page-content" >
					<h1 data-testid="index-text">Welcome to the world of<br/>Demian Arata</h1>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Home;
