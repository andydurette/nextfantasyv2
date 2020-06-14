import { AppProvider } from "../utils/AppContext";
//import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/global.scss";

// This default export is required in a new `pages/_app.js` file.
/*export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}*/

// Setup to not require prop validation

/* eslint-disable react/prop-types */
const MyApp = ({ Component, pageProps }) => {
	return (
		<div>
			<Layout>
				<AppProvider>
					<Component {...pageProps} />
				</AppProvider>
			</Layout>
		</div>
	);
};
/* eslint-enable react/prop-types */

export default MyApp;