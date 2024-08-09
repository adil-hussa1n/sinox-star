export default function ContactMe() {
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
        <form className="contact-form-container">
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
              placeholder="Type your message..."
            />
          </label>
          <div className="submit-btn-container">
            <button className="btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
