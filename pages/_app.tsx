import { AppProvider } from "../utils/AppContext";
import type { AppProps } from "next/app";
//import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/global.scss";

const App = ({ Component, pageProps }: AppProps) => {
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

export default App;
