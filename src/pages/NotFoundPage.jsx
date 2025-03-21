import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Import components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Import data
import INFO from "../data/user";

const NotFoundPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{`404 | ${INFO.main.title}`}</title>
        <meta name="description" content="404 - Page Not Found" />
      </Helmet>

      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl mb-8">Page Not Found</h2>
          <p className="mb-8">The page you are looking for doesn't exist or has been moved.</p>
          <Link 
            to="/" 
            className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default NotFoundPage; 