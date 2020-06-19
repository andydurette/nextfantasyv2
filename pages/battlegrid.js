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
					<p>Here is a grid for combat scenarios that uses a server to update in real time on every browser observing it. Note however that this feature only functions correctly on desktop sized screens and does not work with touch screen technology. Screens under 1000px wide will see the battlegrid faded out and disabled to interaction.
						<br/><br/>
						(The battlegrid runs on a server you may need to give it a few moments to boot up)
					</p>
				</div>
				
				<iframe id="battlegrid-iframe" src="https://draganddropapp.herokuapp.com/"></iframe>
			</section>
		</React.Fragment>
	);
};

export default Battlegrid;
