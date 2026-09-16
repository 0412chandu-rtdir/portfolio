import { useState } from "react";
import ThankYou from "./ThankYou";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });


  const [errors, setErrors] = useState({});


  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {

    const { id, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };


  
  const validateForm = () => {
    const newErrors = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const number = formData.number.trim();
    const message = formData.message.trim();


    
    const nameRegex = /^[A-Za-z ]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    
    if (name === "") {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(name)) {
      newErrors.name =
        "Numbers and special characters are not allowed";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (name.length > 30) {
      newErrors.name = "Name cannot exceed 30 characters";
    }


    

    if (email === "") {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address";
    }
    

    if (number === "") {
      newErrors.number = "Number is required";
    } else if (!phoneRegex.test(number)) {
      newErrors.number = "Enter a valid 10-digit number";
    }

    if (message === "") {
      newErrors.message = "Message is required";
    } else if (message.length < 10) {
      newErrors.message =
        "Message must be at least 10 characters";
    } else if (message.length > 250) {
      newErrors.message =
        "Message cannot exceed 250 characters";
    }

    setErrors(newErrors);

    


    return Object.keys(newErrors).length === 0;
  };

  


  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
      });

      setErrors({});
    }, 5000);
  };

  

  if (submitted) {
    return (
      <ThankYou
      namee={formData.name}
      />
    );
  }

  



  return (
    <section id="contact" className="contact-section">
      <div className="section-container">

        {/* Section Heading */}

        <h2 className="section-title">
          <i className="fa-solid fa-address-book"></i>
          Contact <span>Me</span>
        </h2>

        <div className="contact-container">

          {/* ================= CONTACT INFORMATION ================= */}

          <div className="contact-info">

            <h3>
              <i className="fa-solid fa-comments"></i>
              Get in Touch
            </h3>

            {/* Email */}

            <div className="contact-item">
              <i className="fa-solid fa-envelope"></i>

              <span>
                chandu2004gahtori@gmail.com
              </span>
            </div>

            {/* Phone */}

            <div className="contact-item">
              <i className="fa-solid fa-phone"></i>

              <span>
                +91 9837144505
              </span>
            </div>

            {/* Location */}

            <div className="contact-item">
              <i className="fa-solid fa-location-dot"></i>

              <span>
                Dehradun, Uttarakhand, India
              </span>
            </div>

            {/* Social Media */}

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

          {/* ================= CONTACT FORM ================= */}

          <div className="contact-form">

            <h3>
              <i className="fa-solid fa-paper-plane"></i>
              Send me a message
            </h3>

            <form onSubmit={handleSubmit}>

              {/* NAME + EMAIL */}

              <div className="form-row">

                {/* NAME */}

                <div className="form-group">

                  <label htmlFor="name">
                    <i className="fa-solid fa-user"></i>
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  {errors.name && (
                    <p className="error-message">
                      {errors.name}
                    </p>
                  )}

                </div>

                {/* EMAIL */}

                <div className="form-group">

                  <label htmlFor="email">
                    <i className="fa-solid fa-envelope"></i>
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  {errors.email && (
                    <p className="error-message">
                      {errors.email}
                    </p>
                  )}

                </div>

              </div>

              {/* NUMBER */}

              <div className="form-group">

                <label htmlFor="number">
                  <i className="fa-solid fa-phone"></i>
                  Number
                </label>

                <input
                  type="tel"
                  id="number"
                  placeholder="Enter your number"
                  value={formData.number}
                  onChange={handleChange}
                  maxLength={10}
                />

                {errors.number && (
                  <p className="error-message">
                    {errors.number}
                  </p>
                )}

              </div>

              {/* MESSAGE */}

              <div className="form-group">

                <label htmlFor="message">
                  <i className="fa-solid fa-message"></i>
                  Message
                </label>

                <textarea
                  id="message"
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={250}
                ></textarea>

                {errors.message && (
                  <p className="error-message">
                    {errors.message}
                  </p>
                )}

              </div>

              {/* SUBMIT BUTTON */}

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