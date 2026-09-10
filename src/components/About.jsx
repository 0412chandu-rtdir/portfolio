function About() {
  return (
    <section id="about" className="about-section">

      <div className="section-container">

        {/* About */}
        <div className="about-content">
 
          <h2 className="section-title">
            <i className="fa-solid fa-user"></i>
            About <span>Me</span>
          </h2>

          <p>
            I am a fresher web developer, currently learning and
            exploring the world of web development. I enjoy building
            simple and user-friendly websites and I am always eager
            to improve my skills.
          </p>

          <div className="about-info">

            <div className="info-item">
              <i className="fa-solid fa-graduation-cap"></i>

              <div>
                <span>B.Tech Graduate</span>
                <small>2026</small>
              </div>
            </div>

            <div className="info-item">
              <i className="fa-solid fa-location-dot"></i>

              <div>
                <span>Based in</span>
                <small>India</small>
              </div>
            </div>

            <div className="info-item">
              <i className="fa-solid fa-briefcase"></i>

              <div>
                <span>Open to</span>
                <small>Opportunities</small>
              </div>
            </div>

          </div>
        </div>

        {/* Skills */}
        <div className="skills-content">

          <h2 className="section-title">
            <i className="fa-solid fa-star"></i>
            My <span>Skills</span>
          </h2>

          <ul className="skills-list">

            <li>
              <i className="fa-brands fa-html5 html"></i>
              HTML
            </li>

            <li>
              <i className="fa-brands fa-css3-alt css"></i>
              CSS
            </li>

            <li>
              <i className="fa-brands fa-js js"></i>
              JavaScript
            </li>

            <li>
              <i className="fa-brands fa-react react"></i>
              React
            </li>

          </ul>

        </div>

      </div>

    </section>
  );
}

export default About;