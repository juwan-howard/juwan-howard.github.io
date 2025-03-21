import React, { useState } from 'react';
import './Contact.css';
import INFO from '../../data/user';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    });

    try {
      // Simulate form submission - replace with actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Thank you for your message. I'll respond as soon as possible." }
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "There was a problem sending your message. Please try again." }
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Interested in collaborating on a project? Send me a message.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Contact Details</h3>
              <p><strong>Email:</strong> <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a></p>
              <p><strong>Location:</strong> {INFO.main.location}</p>
            </div>
            
            <div className="info-item">
              <h3>Connect</h3>
              <div className="social-links">
                {INFO.socials.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    {social.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            {status.info.error && (
              <div className="message error">
                <p>{status.info.msg}</p>
              </div>
            )}
            
            {status.submitted ? (
              <div className="message success">
                <p>{status.info.msg}</p>
                <button 
                  onClick={() => setStatus({ submitted: false, submitting: false, info: { error: false, msg: null } })}
                  className="new-message-btn"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={status.submitting}
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 