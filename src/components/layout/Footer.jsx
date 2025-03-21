import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import data
import INFO from "../../data/user";
import { faVimeo, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div>
            <Link to="/" className="text-xl font-bold">
              {INFO.main.title}
            </Link>
            <p className="mt-3 text-gray-600">
              {INFO.about.description}
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-black transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {INFO.socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors text-xl"
                >
                  <FontAwesomeIcon icon={
                    social.platform === "vimeo" ? faVimeo :
                    social.platform === "instagram" ? faInstagram :
                    faLinkedin
                  } />
                </a>
              ))}
            </div>
            <p className="text-gray-600">
              <a href={`mailto:${INFO.main.email}`} className="hover:text-black transition-colors">
                {INFO.main.email}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>© {year} {INFO.main.title}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 