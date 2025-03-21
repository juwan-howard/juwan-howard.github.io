import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

// Import components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AboutHero from "../components/about/AboutHero";
import Biography from "../components/about/Biography";
import Skills from "../components/about/Skills";
import Equipment from "../components/about/Equipment";

// Import data
import INFO from "../data/user";
import SEO from "../data/seo";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "about");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`About | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <Header />
      <main>
        <AboutHero />
        <Biography />
        <Skills />
        <Equipment />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default AboutPage; 