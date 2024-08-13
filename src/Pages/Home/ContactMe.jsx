import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [alert, setAlert] = useState({ type: '', message: '' }); // Alert state

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLoading(true); // Set loading to true when submission starts
    setAlert({ type: '', message: '' }); // Clear previous alerts

    emailjs.sendForm('service_kxee357', 'template_mlmi3j9', e.target, 'Nq3uMAr3k43Gi7a2m')
      .then((result) => {
        console.log(result.text);
        setAlert({ type: 'success', message: 'Message sent successfully!' });
      }, (error) => {
        console.log(error.text);
        setAlert({ type: 'error', message: 'Failed to send message. Please try again later.' });
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false when submission is complete
        e.target.reset(); // Reset the form after submission

        // Hide alert after 5 seconds
        setTimeout(() => {
          setAlert({ type: '', message: '' });
        }, 5000);
      });
  };

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p className="text-md">
            <strong>Address:</strong> 62 Bentinck Road, Newcastle, UK
          </p>
          <p className="text-md">
            <strong>Email:</strong> starfinox@gmail.com
          </p>
          <p className="text-md">
            <strong>Phone:</strong> +44-7419-298937
          </p>
          <p className="text-md">
            <strong>WhatsApp:</strong> +44-7419-298937
          </p>
        </div>
        <form className="contact-form-container" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="first-name" className="contact-label">
              First Name
              <input
                type="text"
                className="contact-input"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact-label">
              Last Name
              <input
                type="text"
                className="contact-input"
                name="last-name"
                id="last-name"
                required
              />
            </label>
            <label htmlFor="email" className="contact-label">
              Email
              <input
                type="email"
                className="contact-input"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact-label">
              Phone Number
              <input
                type="tel"
                className="contact-input"
                name="phone-number"
                id="phone-number"
                required
              />
            </label>
          </div>
          <label htmlFor="message" className="contact-label full-width">
            Message
            <textarea
              className="contact-input"
              id="message"
              rows="8"
              name="message"
              placeholder="Type your message..."
            />
          </label>
          <div className="submit-btn-container">
            <button className="btn-primary" type="submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
        {alert.message && (
          <div className={`alert ${alert.type === 'error' ? 'alert-error' : 'alert-success'}`}>
            <p>{alert.message}</p>
          </div>
        )}
      </div>
    </section>
  );
}
