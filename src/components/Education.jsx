function Education() {
  const education = [
    {
      course: "B.Tech (CSE)",
      college: "BIAS, Bhimtal",
      year: "2026",
    },
    {
      course: "12th",
      college: "JNV School",
      year: "2021",
    },
    {
      course: "10th",
      college: "JNV School",
      year: "2019",
    },
  ];

  return (
    <section id="education" className="education-section">

      <div className="education-container">

        <div className="education-left">

          <h2 className="section-title">
            <i className="fa-solid fa-graduation-cap"></i>
            <span>Education</span>
          </h2>

          <div className="table-wrapper">

            <table>

              <thead>
                <tr>
                  <th>
                    <i className="fa-solid fa-book"></i>
                    Course
                  </th>

                  <th>
                    <i className="fa-solid fa-school"></i>
                    College / School
                  </th>

                  <th>
                    <i className="fa-solid fa-calendar"></i>
                    Year
                  </th>
                </tr>
              </thead>

              <tbody>

                {education.map((item, index) => (
                  <tr key={index}>
                    <td>{item.course}</td>
                    <td>{item.college}</td>
                    <td>{item.year}</td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

        <div className="education-image">

          <i className="fa-solid fa-book-open"></i>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRx4NkbIjm_AhKmDwWHJ2JCiUtmTtLkw9kOzVbKcD9OK8u4vB0f2tMSCQA&s=10"
            alt="Education"
          />

        </div>

      </div>

    </section>
  );
}

export default Education;