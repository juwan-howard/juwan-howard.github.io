import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

// Import components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

// Import data
import INFO from "../data/user";
import SEO from "../data/seo";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "contact");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Contact | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="flex flex-col items-center">
          <div className="w-full mb-12">
            <ContactInfo />
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default ContactPage; 