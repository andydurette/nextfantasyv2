import Head from "next/head";

const Battlegrid = () => {

	return (
		<React.Fragment>
			<Head>
				<title>About</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<section id="battlegrid" className="page-content">
				<div id="battlegrid-message" >
					<h1>Battle Grid</h1>
					<p>Here a grid for combat scenarios that uses a server to updates in real time on every browser looking at it. Note however that this feature is only avaiable on desktop sized screens under 1000 pixels wide and do not work with touch screen technology and will not display in such a case.</p>
				</div>
				
				<iframe id="battlegrid-iframe" src="https://draganddropapp.herokuapp.com/"></iframe>
			</section>
		</React.Fragment>
	);
};

export default Battlegrid;
