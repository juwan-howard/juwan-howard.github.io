import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faVimeo, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Import data
import INFO from "../../data/user";

const ContactInfo = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6 indie-flower">Get In Touch</h2>
      
      <p className="mb-8 text-gray-600">
        Interested in collaborating on a film project? Have questions about my work or availability?
        Feel free to reach out using the form or through any of the channels below.
      </p>

      <div className="space-y-8 mb-10 flex flex-col items-center">
        {/* Email */}
        <div className="flex flex-col items-center transition-transform hover:scale-105">
          <div className="text-2xl text-gray-700 mb-3 bg-gray-50 p-3 rounded-full">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div>
            <h3 className="font-semibold mb-2 indie-flower">Email</h3>
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
          <div className="flex flex-col items-center transition-transform hover:scale-105">
            <div className="text-2xl text-gray-700 mb-3 bg-gray-50 p-3 rounded-full">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>
              <h3 className="font-semibold mb-2 indie-flower">Location</h3>
              <p className="text-gray-600">{INFO.main.location}</p>
            </div>
          </div>
        )}
        
        {/* Social Media Links */}
        <div className="w-full">
          <h3 className="font-semibold mb-4 indie-flower">Connect on Social Media</h3>
          <div className="flex justify-center space-x-4">
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
                  className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-110"
                  aria-label={`Visit my ${social.platform} profile`}
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 