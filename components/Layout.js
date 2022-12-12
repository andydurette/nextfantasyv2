import Head from "next/head";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "../components/Footer";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Fantasy Setting</title>
      </Head>

      <Navbar />
      <div id="mainContainer" className="container">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
