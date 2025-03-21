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

  const [errors, setErrors] = useState({});

  // Validate form and return boolean indicating validity
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Your message is too short (minimum 10 characters)";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Only proceed if form is valid
    if (!validateForm()) {
      return;
    }
    
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    });

    try {
      // In a real implementation, send data to a server
      // This is a placeholder that creates a mailto link
      const subject = `Message from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
      
      // Create and click a mailto link (for demo purposes)
      // Replace this with actual form submission in production
      const mailtoLink = document.createElement('a');
      mailtoLink.href = `mailto:${INFO.main.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      mailtoLink.style.display = 'none';
      document.body.appendChild(mailtoLink);
      mailtoLink.click();
      document.body.removeChild(mailtoLink);
      
      // Simulate server processing time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
      console.error("Form submission error:", error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "There was a problem sending your message. Please try again or email me directly." }
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
                    aria-label={`Connect on ${social.platform}`}
                  >
                    {social.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            {status.info.error && (
              <div className="message error" role="alert">
                <p>{status.info.msg}</p>
              </div>
            )}
            
            {status.submitted ? (
              <div className="message success" role="status">
                <p>{status.info.msg}</p>
                <button 
                  onClick={() => setStatus({ submitted: false, submitting: false, info: { error: false, msg: null } })}
                  className="new-message-btn"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <div className="error-message" id="name-error" role="alert">
                      {errors.name}
                    </div>
                  )}
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
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <div className="error-message" id="email-error" role="alert">
                      {errors.email}
                    </div>
                  )}
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
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  ></textarea>
                  {errors.message && (
                    <div className="error-message" id="message-error" role="alert">
                      {errors.message}
                    </div>
                  )}
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