import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faVimeo, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Import data
import INFO from "../../data/user";

const ContactInfo = () => {
  const containerStyle = {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px'
  };
  
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '24px',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
    transition: 'all 0.3s ease',
  };
  
  const iconStyle = {
    fontSize: '1.875rem',
    color: '#374151',
    marginBottom: '16px'
  };
  
  const headingStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '8px',
    fontFamily: "'Indie Flower', cursive"
  };
  
  const textStyle = {
    color: '#4b5563'
  };
  
  const linkStyle = {
    color: '#4b5563',
    textDecoration: 'none',
    transition: 'color 0.2s ease'
  };
  
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '32px',
    marginBottom: '32px'
  };
  
  const socialContainerStyle = {
    marginTop: '32px',
    textAlign: 'center'
  };
  
  const socialIconsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px'
  };
  
  const socialIconStyle = {
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '9999px',
    transition: 'all 0.2s ease'
  };

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        {/* Email */}
        <div style={cardStyle} onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
          e.currentTarget.style.transform = 'scale(1.05)';
        }} onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
          e.currentTarget.style.transform = 'scale(1)';
        }}>
          <div style={iconStyle}>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div style={{textAlign: 'center'}}>
            <h3 style={headingStyle}>Email Me</h3>
            <a 
              href={`mailto:${INFO.main.email}`}
              style={linkStyle}
              onMouseOver={(e) => {e.currentTarget.style.color = 'black'; e.currentTarget.style.textDecoration = 'underline';}}
              onMouseOut={(e) => {e.currentTarget.style.color = '#4b5563'; e.currentTarget.style.textDecoration = 'none';}}
            >
              {INFO.main.email}
            </a>
          </div>
        </div>

        {/* Location */}
        {INFO.main.location && (
          <div style={cardStyle} onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }} onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
            e.currentTarget.style.transform = 'scale(1)';
          }}>
            <div style={iconStyle}>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div style={{textAlign: 'center'}}>
              <h3 style={headingStyle}>Based In</h3>
              <p style={textStyle}>{INFO.main.location}</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Social Media Links */}
      <div style={socialContainerStyle}>
        <h3 style={{...headingStyle, marginBottom: '20px'}}>Connect on Social Media</h3>
        <div style={socialIconsStyle}>
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
                style={socialIconStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#1f2937';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'black';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
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