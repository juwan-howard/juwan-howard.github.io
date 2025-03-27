import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faVimeo, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Import data
import INFO from "../../data/user";

const ContactInfo = () => {
  return (
    <div className="contact-info-container w-full max-w-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Email */}
        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:transform hover:scale-105">
          <div className="text-3xl text-gray-700 mb-4">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2 indie-flower">Email Me</h3>
            <a 
              href={`mailto:${INFO.main.email}`}
              className="text-gray-600 hover:text-black transition-colors hover:underline"
            >
              {INFO.main.email}
            </a>
          </div>
        </div>

        {/* Location */}
        {INFO.main.location && (
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:transform hover:scale-105">
            <div className="text-3xl text-gray-700 mb-4">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 indie-flower">Based In</h3>
              <p className="text-gray-600">{INFO.main.location}</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Social Media Links */}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold mb-5 indie-flower">Connect on Social Media</h3>
        <div className="flex justify-center space-x-6">
          {INFO.main.socials.map((social, index) => {
            let icon;
            switch(social.platform.toLowerCase()) {
              case 'vimeo':
                icon = faVimeo;
                break;
              case 'instagram':
                icon = faInstagram;
                break;
              case 'linkedin':
                icon = faLinkedin;
                break;
              default:
                return null;
            }
            
            return (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-110"
                aria-label={`Visit my ${social.platform} profile`}
              >
                <FontAwesomeIcon icon={icon} size="lg" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 