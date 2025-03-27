import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });
  
  const [errors, setErrors] = useState({});
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const validateField = (name, value) => {
    let error = "";
    
    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "subject":
        if (!value.trim()) error = "Subject is required";
        break;
      case "message":
        if (!value.trim()) {
          error = "Message is required";
        } else if (value.trim().length < 10) {
          error = "Message must be at least 10 characters";
        }
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };
  
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Touch all fields to show validation
    const allTouched = Object.keys(touched).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);
    
    if (!validateForm()) return;
    
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    });

    // This is a placeholder. In a real implementation, you would send the form data
    // to a server or use a service like Formspree, Netlify Forms, etc.
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Thank you! Your message has been sent successfully." }
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset touched states
      setTouched({
        name: false,
        email: false,
        subject: false,
        message: false
      });
      
      // Reset errors
      setErrors({});
      
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "Oops! Something went wrong. Please try again or contact directly via email." }
      });
    }
  };

  return (
    <div className="contact-form-wrapper w-full flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full transition-all duration-300 hover:shadow-lg" style={{maxWidth: "500px", margin: "0 auto", boxShadow: "0 4px 6px rgba(0,0,0,0.1)"}}>
        <h2 className="text-2xl font-bold mb-6 text-center indie-flower">Send a Message</h2>

        {status.info.error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-md animate-fadeIn">
            <p className="text-red-700">{status.info.msg}</p>
          </div>
        )}

        {status.submitted ? (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded-r-md animate-fadeIn text-center">
            <div className="text-3xl text-green-500 mb-4">
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
            <h3 className="text-xl text-green-700 mb-2 indie-flower">Message Sent!</h3>
            <p className="text-green-600 mb-4">{status.info.msg}</p>
            <div className="mt-4">
              <button 
                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors indie-flower"
                onClick={() => setStatus({ submitted: false, submitting: false, info: { error: false, msg: null } })}
                aria-label="Send another message"
                style={{cursor: "pointer"}}
              >
                Send Another Message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full space-y-5" noValidate style={{width: "100%"}}>
            <div className="form-group" style={{marginBottom: "1.5rem"}}>
              <label htmlFor="name" className="block text-gray-700 mb-2 indie-flower text-lg" style={{display: "block", marginBottom: "0.5rem", fontSize: "1.1rem"}}>Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all
                  ${errors.name ? 'border-red-300 bg-red-50 focus:ring-red-200' : 'border-gray-300 focus:ring-black/10'}
                `}
                placeholder="Your name"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                required
                style={{width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid #eaeaea"}}
              />
              {errors.name && (
                <div id="name-error" className="text-red-500 text-sm mt-1 animate-fadeIn" role="alert">
                  {errors.name}
                </div>
              )}
            </div>

            <div className="form-group" style={{marginBottom: "1.5rem"}}>
              <label htmlFor="email" className="block text-gray-700 mb-2 indie-flower text-lg" style={{display: "block", marginBottom: "0.5rem", fontSize: "1.1rem"}}>Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all
                  ${errors.email ? 'border-red-300 bg-red-50 focus:ring-red-200' : 'border-gray-300 focus:ring-black/10'}
                `}
                placeholder="Your email address"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                required
                style={{width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid #eaeaea"}}
              />
              {errors.email && (
                <div id="email-error" className="text-red-500 text-sm mt-1 animate-fadeIn" role="alert">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="form-group" style={{marginBottom: "1.5rem"}}>
              <label htmlFor="subject" className="block text-gray-700 mb-2 indie-flower text-lg" style={{display: "block", marginBottom: "0.5rem", fontSize: "1.1rem"}}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all
                  ${errors.subject ? 'border-red-300 bg-red-50 focus:ring-red-200' : 'border-gray-300 focus:ring-black/10'}
                `}
                placeholder="What's this about?"
                aria-invalid={errors.subject ? "true" : "false"}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                required
                style={{width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid #eaeaea"}}
              />
              {errors.subject && (
                <div id="subject-error" className="text-red-500 text-sm mt-1 animate-fadeIn" role="alert">
                  {errors.subject}
                </div>
              )}
            </div>

            <div className="form-group" style={{marginBottom: "1.5rem"}}>
              <label htmlFor="message" className="block text-gray-700 mb-2 indie-flower text-lg" style={{display: "block", marginBottom: "0.5rem", fontSize: "1.1rem"}}>Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all min-h-[180px]
                  ${errors.message ? 'border-red-300 bg-red-50 focus:ring-red-200' : 'border-gray-300 focus:ring-black/10'}
                `}
                placeholder="Your message here..."
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
                required
                style={{width: "100%", padding: "12px 16px", borderRadius: "4px", border: "1px solid #eaeaea", minHeight: "180px"}}
              ></textarea>
              {errors.message && (
                <div id="message-error" className="text-red-500 text-sm mt-1 animate-fadeIn" role="alert">
                  {errors.message}
                </div>
              )}
            </div>

            <div className="form-group text-center mt-8" style={{textAlign: "center", marginTop: "2rem"}}>
              <button
                type="submit"
                className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors inline-flex items-center justify-center space-x-2 indie-flower text-lg"
                disabled={status.submitting}
                aria-label="Send Message"
                style={{
                  backgroundColor: "black", 
                  color: "white", 
                  padding: "0.75rem 2rem", 
                  borderRadius: "0.375rem", 
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Indie Flower', cursive"
                }}
              >
                {status.submitting ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm; 