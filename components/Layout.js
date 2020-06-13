import Head from "next/head";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "../components/Footer";

const Layout = (props) => (
	<div>
		<Head>
			<title>Fantasy Setting</title>  
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"/>
		</Head>
		
		<Navbar/>
		<div id="mainContainer" className="container"> 
			{props.children}
		</div>
		<Footer/>
	</div>
);

Layout.propTypes = {
	children: PropTypes.any,
};

export default Layout;