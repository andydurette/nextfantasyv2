import Head from "next/head";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="homepage">
        <div className="page-content">
          <h1 data-testid="index-text">Welcome to the world of Demian Arata</h1>
          <p>
            A fantasy setting created for use with table top games like dungeons
            and dragons. Demain Arata is setting focusing on magical adventure
            with hints of political intrigue behind the scenes from countries
            which have their own unique culture, history and secrets which you
            can decide whether or not to explore.
          </p>

          <p>
            These facts and more about Demain Arata&apos;s fantasy setting can
            be found throughout the site.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
