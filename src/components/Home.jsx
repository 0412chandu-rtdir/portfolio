import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      {/* Hero Content */}
      <div className="hero-content">

        <p className="hello">
          <i className="fa-solid fa-hand-wave"></i>
          Hello, I'm
        </p>

        <h1>Chandra Shekhar</h1>

        <h2>A Fresh Web Developer</h2>

        <p className="description">
          <i className="fa-solid fa-lightbulb"></i>
          I am passionate about learning new technologies
          and building simple, clean and responsive websites
          using HTML, CSS and JavaScript.
        </p>

        <div className="home-highlights" aria-label="Professional focus">
          <div className="highlight-item">
            <i className="fa-solid fa-mobile-screen-button"></i>
            <span>Responsive layouts</span>
          </div>

          <div className="highlight-item">
            <i className="fa-solid fa-code"></i>
            <span>Clean code</span>
          </div>

          <div className="highlight-item">
            <i className="fa-solid fa-arrow-trend-up"></i>
            <span>Always learning</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="hero-buttons">

          <Link to="/work" className="primary-btn">
            <i className="fa-solid fa-eye"></i>
            View My Work
          </Link>

          <Link to="/contact" className="secondary-btn">
            <i className="fa-solid fa-paper-plane"></i>
            Contact Me
          </Link>

        </div>
      </div>

      {/* Profile Image */}
      <div className="hero-image">
        <div className="image-circle"></div>

        <img
          src="/profile_pic.jpg"
          alt="Chandra Shekhar"
        />
      </div>
    </section>
  );
}

export default Home;