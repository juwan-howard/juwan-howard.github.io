import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success handling
      setIsSubmitted(true);
      setSubmissionError(null);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmissionError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewMessage = () => {
    setIsSubmitted(false);
    setSubmissionError(null);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Have a question, feedback, or want to work together? Feel free to reach out!</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="message success">
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button onClick={handleNewMessage} className="new-message-btn">Send Another Message</button>
              </div>
            ) : submissionError ? (
              <div className="message error">
                <h3>Oops! Something went wrong</h3>
                <p>{submissionError}</p>
                <button onClick={handleNewMessage} className="new-message-btn">Try Again</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    aria-invalid={formErrors.name ? "true" : "false"}
                    aria-describedby={formErrors.name ? "name-error" : undefined}
                  />
                  {formErrors.name && (
                    <div className="error-message" id="name-error">{formErrors.name}</div>
                  )}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    aria-invalid={formErrors.email ? "true" : "false"}
                    aria-describedby={formErrors.email ? "email-error" : undefined}
                  />
                  {formErrors.email && (
                    <div className="error-message" id="email-error">{formErrors.email}</div>
                  )}
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    aria-invalid={formErrors.subject ? "true" : "false"}
                    aria-describedby={formErrors.subject ? "subject-error" : undefined}
                  />
                  {formErrors.subject && (
                    <div className="error-message" id="subject-error">{formErrors.subject}</div>
                  )}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    aria-invalid={formErrors.message ? "true" : "false"}
                    aria-describedby={formErrors.message ? "message-error" : undefined}
                  ></textarea>
                  {formErrors.message && (
                    <div className="error-message" id="message-error">{formErrors.message}</div>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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