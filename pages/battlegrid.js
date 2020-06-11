import Head from "next/head";
import Navbar from "../components/Navbar";

const Battlegrid = () => {

	return (
		<React.Fragment>
			<Head>
				<title>About</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<section id="battlegrid">
				<Navbar/>
				<iframe id="battlegrid-iframe" src="https://dnd-tabletop.herokuapp.com/"></iframe>
			</section>
		</React.Fragment>
	);
};

export default Battlegrid;
