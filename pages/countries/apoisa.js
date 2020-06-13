import React, {useContext} from "react";
import { AppContext } from "../../utils/AppContext";
import Head from "next/head";
import Country from "../../components/Country";

const Apoisa = () => {

	// Call Context 
	const {kingdoms} = useContext(AppContext);

	let [kingdom/*, setKingdom*/] = kingdoms;

	console.log(kingdom.aposia);

	return (
		<React.Fragment>
			<Head>
				<title>Apoisa</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section id="about" className="country">
				<div className="page-content" >
					<div className="country-heading">
						<h1 data-testid="index-text">The history and culture of Aposia</h1>
						<Country
							historyHeading={kingdom.aposia.historyHeading}
							historyText={kingdom.aposia.historyText}
							historyImage={kingdom.aposia.historyImage}
							cultureHeading={kingdom.aposia.cultureHeading}
							cultureText={kingdom.aposia.cultureText}
							cultureImage={kingdom.aposia.cultureImage}
							leaderHeading={kingdom.aposia.leaderHeading}
							leaderText={kingdom.aposia.leaderText}
							leaderImage={kingdom.aposia.leaderImage}
						/>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Apoisa;
