import { useLocation } from "react-router-dom";

export const About = () => {
  const location = useLocation();
  return (
    <>
      {/* vision & mission content */}

      <section id="about-section ">
      <div className="container overflow-hidden mb-5 "
        id="about-section"
        style={{ marginTop: location.pathname !== '/about-us' ? '20px' : "80px" }} >

        {/* Content Section */}
        <div className="container overflow-hidden">
          <div className="row g-5 mt-2">
            {/* Left Column with Secondary Carousel */}
            <div className="col-12 col-md-6 pe-md-4 pt-5 mt-5">
              <div
                id="carouselSecondary"
                className="carousel slide"
                data-bs-ride="carousel"
                data-aos="fade-right"
              >
                <div className="carousel-inner glass-effect">
                  <div className="carousel-item active ">
                    <img
                      src="/image/about-5.jpg"
                      className="d-block w-100"
                      alt="Slide 1"
                      style={{ height: "500px", objectFit: "cover", borderRadius: "10px" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/image/about-3.png"
                      className="d-block w-100"
                      alt="Slide 2"
                      style={{ height: "500px", objectFit: "cover", borderRadius: "10px" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/image/about-2.png"
                      className="d-block w-100"
                      alt="Slide 3"
                      style={{ height: "500px", objectFit: "cover", borderRadius: "10px" }}
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselSecondary"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselSecondary"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-12 col-md-6 t-color">
              {/* <img src="/image/l_t-nobg.png"  className="d-block  " alt="logo" style={{ height: "100px"  }} /> */}
              <h1 className="mb-3 t-color heading-64 home-text-center" data-aos="fade-left">Learn Tech IT Solutions</h1>
              <p className="t-color para-17" data-aos="fade-right" style={{ marginLeft: "35px", marginTop: "-15px" }}><i>Shape Your Career</i></p>
              <div
                className="p-3 border bg-light learn-tech-card card course-card bg-white p-color para-17"
                data-aos="zoom-up"
              >
                <p className="p-color">
                  <strong>Learn Tech</strong> is a successful training institute
                  with over <strong>5 years</strong> of excellence. We are
                  committed to providing effective training that equips our
                  students to succeed in their careers.
                </p>
                <p>
                  Our training programs focus on upgrading students` skills
                  with hands-on projects and real-world scenarios. We offer
                  courses in <strong>Full Stack Web Development, DevOps,
                    Cloud,</strong> and <strong>Data Science</strong>.
                </p>
                <p>
                  Our trainers bring industrial experience from top companies,
                  ensuring that students learn from industry experts.
                </p>
                <p>
                  Our mission is to empower individuals with the tools and
                  expertise needed to solve real-world problems through
                  innovative software solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row gx-5 gy-4">
            {/* "gy-4" ensures spacing between rows in mobile view */}

            <div className="col-lg-6 col-md-12 text-center">
              <h1
                className="t-color heading-64"
                data-aos="zoom-up"
                style={{
                  marginTop: "50px", /* Reduced for mobile */
                  marginBottom: "30px",
                }}
              >
                <i className="bi bi-lightbulb-fill me-1" style={{ color: "#28a745" }}></i> Our Vision
              </h1>
              <div className="p-3 course-card card t-color bg-white glass-card " data-aos="fade-up-right">
                To provide high-quality, accessible, and engaging programming education that empowers individuals to master coding skills.
                We aim to inspire learners of all ages to develop the technical expertise needed to succeed in a constantly evolving digital world,
                offering practical lessons, real-world projects, and a supportive community.
              </div>
            </div>

            <div className="col-lg-6 col-md-12 text-center">
              <h1
                className="t-color heading-64"
                data-aos="zoom-up"
                style={{
                  marginTop: "50px",
                  marginBottom: "30px",
                }}
              >
                <i className="bi bi-flag-fill me-1" style={{ color: "#007bff" }}></i> Our Mission
              </h1>
              <div className="p-3 bg-light course-card card t-color bg-white glass-card"
                data-aos="fade-up-left">
                To become a leading global platform for coding education, where learners can seamlessly acquire the knowledge and skills
                needed to thrive in the tech industry. We envision creating a community-driven space where students can foster creativity,
                solve problems, and build impactful software that shapes the future of technology.
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* Key Principles */}
      <div>
        <h1
          className="text-center t-color heading-64"
          data-aos="fade-right"
          style={{
            marginTop: "100px",
            marginBottom: "50px",
            borderRadius: "20px",
          }}
        >
          <span>
            <i className="bi bi-lightbulb"
              style={{ marginRight: "10px" }}></i>
          </span>
          Key Principles
        </h1>
        <div
          className={location.pathname == '/about-us' ? "d-flex justify-content-center flex-wrap mb-5" : "d-flex justify-content-center flex-wrap"}
          style={{ gap: "30px", marginTop: "20px" }}
        >
          <div className="card glass-card text-center course-card"
            data-aos="zoom-in"
            style={{ width: "15rem" }}>
            <div className="card-body">
              <i
                className="bi bi-clock"
                data-aos="zoom-in-up"
                style={{
                  fontSize: "48px",
                  color: "#2B2EAB",
                  marginBottom: "15px",
                }}
              ></i>
              <h6 className="t-color para-17">Flexible Timing</h6>
            </div>
          </div>

          <div className="card glass-card text-center course-card"
            data-aos="zoom-in"
            style={{ width: "15rem" }}>
            <div className="card-body">
              <i
                className="bi bi-tools"
                data-aos="zoom-in-up"
                style={{
                  fontSize: "48px",
                  color: "#2B2EAB",
                  marginBottom: "15px",
                }}
              ></i>
              <h6 className="t-color para-17">Hands-on for each topic</h6>
            </div>
          </div>

          <div className="card glass-card text-center course-card"
            data-aos="zoom-in"
            style={{ width: "15rem" }}>
            <div className="card-body">
              <i
                className="bi bi-bar-chart"
                data-aos="zoom-in-up"
                style={{
                  fontSize: "48px",
                  color: "#2B2EAB",
                  marginBottom: "15px",
                }}
              ></i>
              <h6 className="t-color para-17">Upgrade students skills</h6>
            </div>
          </div>

          <div className="card glass-card text-center course-card"
            data-aos="zoom-in"
            style={{ width: "15rem" }}>
            <div className="card-body">
              <i
                className="bi bi-person-check"
                data-aos="zoom-in-up"
                style={{
                  fontSize: "48px",
                  color: "#2B2EAB",
                  marginBottom: "15px",
                }}
              ></i>
              <h6 className="t-color para-17">100% Job Assurance </h6>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}