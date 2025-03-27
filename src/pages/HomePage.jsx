import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

// Import our components
import Header from '../components/layout/Header';
import Hero from '../components/film/Hero';
import Projects from '../components/film/Projects';
import About from '../components/film/About';
import Contact from '../components/film/Contact';
import Footer from '../components/layout/Footer';

// Import data
import INFO from "../data/user";
import SEO from "../data/seo";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "home");

  return (
    <React.Fragment>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default HomePage; 