function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");
  };

  return (
    <section id="contact" className="contact-section">

      <div className="section-container">

        <h2 className="section-title">
          <i className="fa-solid fa-address-book"></i>
          Contact <span>Me</span>
        </h2>

        <div className="contact-container">

          {/* Contact Information */}
          <div className="contact-info">

            <h3>
              <i className="fa-solid fa-comments"></i>
              Get in Touch
            </h3>

            <div className="contact-item">
              <i className="fa-solid fa-envelope"></i>
              <span>chandu2004gahtori@gmail.com</span>
            </div>

            <div className="contact-item">
              <i className="fa-solid fa-phone"></i>
              <span>+91 9837144505</span>
            </div>

            <div className="contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Dehradun, Uttarakhand, India</span>
            </div>

            <div className="social-icons">

              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>

            </div>

          </div>

          {/* Form */}
          <div className="contact-form">

            <h3>
              <i className="fa-solid fa-paper-plane"></i>
              Send me a message
            </h3>

            <form onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    <i className="fa-solid fa-user"></i>
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fa-solid fa-envelope"></i>
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  <i className="fa-solid fa-heading"></i>
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <i className="fa-solid fa-message"></i>
                  Message
                </label>

                <textarea
                  id="message"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>

              <button type="submit">
                <i className="fa-solid fa-paper-plane"></i>
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;