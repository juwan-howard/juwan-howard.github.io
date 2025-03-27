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
      <main className="contact-page" style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "3rem",
        paddingBottom: "3rem"
      }}>
        <div className="contact-container" style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <div className="text-center mb-16 w-full" style={{
            textAlign: "center",
            marginBottom: "4rem"
          }}>
            <h1 className="text-4xl md:text-5xl mb-6 indie-flower" style={{
              fontSize: "3rem",
              marginBottom: "1.5rem",
              fontFamily: "'Indie Flower', cursive"
            }}>Get In Touch</h1>
            <p className="text-lg mb-12 max-w-2xl mx-auto" style={{
              fontSize: "1.125rem",
              maxWidth: "42rem",
              margin: "0 auto 3rem auto"
            }}>
              Have a question, interested in collaboration, or want to discuss a project? 
              I'd love to hear from you!
            </p>
            <ContactInfo />
          </div>
          
          <ContactForm />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default ContactPage; 