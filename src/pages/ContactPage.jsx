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
      <main>
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <div className="w-full max-w-3xl mb-16 text-center">
            <h1 className="text-4xl md:text-5xl mb-6 text-center indie-flower">Get In Touch</h1>
            <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
              Have a question, interested in collaboration, or want to discuss a project? 
              I'd love to hear from you!
            </p>
            <ContactInfo />
          </div>
          <div className="w-full flex justify-center">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default ContactPage; 