import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faVimeo, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Import data
import INFO from "../../data/user";

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
      
      <p className="mb-8 text-gray-600">
        Interested in collaborating on a film project? Have questions about my work or availability?
        Feel free to reach out using the form or through any of the channels below.
      </p>

      <div className="space-y-6 mb-10">
        {/* Email */}
        <div className="flex items-start">
          <div className="mt-1 mr-4 text-xl text-gray-700">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <a 
              href={`mailto:${INFO.main.email}`}
              className="text-gray-600 hover:text-black transition-colors"
            >
              {INFO.main.email}
            </a>
          </div>
        </div>

        {/* Location */}
        {INFO.main.location && (
          <div className="flex items-start">
            <div className="mt-1 mr-4 text-xl text-gray-700">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-gray-600">{INFO.main.location}</p>
            </div>
          </div>
        )}
      </div>

      {/* Social Media */}
      <div>
        <h3 className="font-semibold mb-4">Connect on Social Media</h3>
        <div className="flex space-x-6">
          {INFO.socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-700 hover:text-black transition-colors"
              aria-label={social.platform}
            >
              <FontAwesomeIcon icon={
                social.platform === "vimeo" ? faVimeo :
                social.platform === "instagram" ? faInstagram :
                faLinkedin
              } />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 