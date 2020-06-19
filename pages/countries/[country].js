
import React, {useContext} from "react";
import { AppContext } from "../../utils/AppContext";
import Head from "next/head";
import CountryDetails from "../../components/CountryDetails";
import { useRouter } from "next/router";

function Country() {

	//Grab country by url
	const router = useRouter();
	let calledCountry = router.query.country;

	// Call Context for country
	const {kingdoms} = useContext(AppContext);
	let [kingdom/*, setKingdom*/] = kingdoms;

	//Not the most seo friendly solution but I am just loading from my context not a database
	//getInitialProps method would rectify the seo however than I also need to setup a server
	//or mock server to grab data I have just stored in context for this small project.	

	if(calledCountry === undefined){
		return <p>Loading</p>;
	}
	
	return (
		<React.Fragment>
			<Head>
				<title>{calledCountry.toUpperCase()}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section id="about" className="country">
				<div className="page-content" >
					<div className="country-heading">
						<CountryDetails
							countryName={kingdom[calledCountry].name}
							historyHeading={kingdom[calledCountry].historyHeading}
							historyText={kingdom[calledCountry].historyText}
							historyImage={kingdom[calledCountry].historyImage}
							cultureHeading={kingdom[calledCountry].cultureHeading}
							cultureText={kingdom[calledCountry].cultureText}
							cultureImage={kingdom[calledCountry].cultureImage}
							leaderHeading={kingdom[calledCountry].leaderHeading}
							leaderText={kingdom[calledCountry].leaderText}
							leaderImage={kingdom[calledCountry].leaderImage}
						/>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default Country;
