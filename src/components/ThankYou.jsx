function ThankYou({ namee }) {
  return (
   <section className="contact-section success-section">
        <div className="success-message">
          <i className="fa-solid fa-circle-check"></i>

          <h1>Thank You, {namee}!</h1>

          <p>
            Your message has been submitted successfully.
          </p>

          <p>
            We will get back to you soon.
          </p>
        </div>
      </section>
  );
}

export default ThankYou;