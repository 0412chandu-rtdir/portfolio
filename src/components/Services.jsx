function Services() {
  const services = [
    {
      icon: "fa-code",
      title: "Website Development",
      description:
        "Creating simple and user-friendly websites using modern web technologies.",
    },
    {
      icon: "fa-desktop",
      title: "Landing Page",
      description:
        "Building clean and engaging landing pages for different types of businesses and projects.",
    },
    {
      icon: "fa-gear",
      title: "Website Maintenance",
      description:
        "Updating website content and maintaining existing web pages.",
    },
  ];

  return (
    <section id="services" className="services-section">

      <div className="section-container">

        <h2 className="section-title">
          <i className="fa-solid fa-briefcase"></i>
          My <span>Services</span>
        </h2>

        <div className="services-container">

          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;