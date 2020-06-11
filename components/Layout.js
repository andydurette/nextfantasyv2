import Head from "next/head";
import PropTypes from "prop-types";

const Layout = (props) => (
	<div>
		<Head>
			<title>Fantasy Setting</title>  
		</Head>
		
		<div id="mainContainer" className="container"> 
			{props.children}
		</div>
	</div>
);

Layout.propTypes = {
	children: PropTypes.any,
};

export default Layout;