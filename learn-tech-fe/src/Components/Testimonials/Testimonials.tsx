import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();
  const testimonials = [
    {
      name: "Hairsh",
      course: "DevOps Engineer",
      message: "I have learned so much in such a short time, and the experience was incredible!.",
      image: `${process.env.PUBLIC_URL}/image/ttt10.png`,
    },
    {
      name: "Swathi",
      course: "Cloud Engineer",
      message: "This course gave me the confidence and skills to succeed in my career!",
      image: `${process.env.PUBLIC_URL}/image/ttt5.jpg`,
    },
    {
      name: "Kowsick",
      course: "Linux & System Administration",
      message: "The instructor’s support made all the difference in my learning journey.",
      image: `${process.env.PUBLIC_URL}/image/ttt4.png`,
    },
    {
      name: "Naveen Prabhu",
      course: "DevOps Engineer",
      message: "This program helped me turn my passion into a real career path!",
      image: `${process.env.PUBLIC_URL}/image/ttt16.jpg`,
    },
    {
      name: "Gowtham",
      course: "DevOps Engineerr",
      message: "A truly transformative learning experience that I will always value",
      image: `${process.env.PUBLIC_URL}/image/ttt1.png`,
    },
    {
      name: "Selvam",
      course: "Linux & System Administration",
      message: "Thanks to this course, I feel fully prepared for the challenges ahead",
      image: `${process.env.PUBLIC_URL}/image/ttt12.jpg`,
    },
    {
      name: "Vijayarangan",
      course: "Cloud & System Administration",
      message: "The skills I gained here have already opened doors to new opportunities!",
      image: `${process.env.PUBLIC_URL}/image/ttt14.jpg`,
    },
    {
      name: "ManiKandan",
      course: "Cloud Engineer",
      message: "The hands-on experience in this course helped me gain practical skills immediately",
      image: `${process.env.PUBLIC_URL}/image/ttt16.jpg`,
    },
    {
      name: "Lokesh",
      course: "DevOps Engineer",
      message: "I gained not only knowledge but also a network of like-minded peers.",
      image: `${process.env.PUBLIC_URL}/image/ttt10.png`,
    },
    {
      name: "Swetha",
      course: "DevOps Engineer",
      message: "I have learned so much more than I expected and feel ready for what’s next!",
      image: `${process.env.PUBLIC_URL}/image/ttt7.jpg`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handleNavClick = (path: string) => {
    navigate(path); 
 
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>


      {location.pathname === "/testimonials" && (
        <>
          <div
            id="carouselMain"
            className="carousel slide"
            style={{ marginTop: "80px", marginRight: "15px" }}
            data-aos="fade-right"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            {/* Carousel Items */}
            <div className="carousel-inner mt-5" style={{ height: "500px" }}>
              <div className="carousel-item active">
                <div className="d-flex flex-column flex-md-row w-100">


                  <div className="col-12 col-md-6 d-flex flex-column p-5 text-container">
                    <div className="text-start mt-2 mt-5">
                      <h2 className="main-color custom-title">Testimonials</h2>
                      <p className="custom-paragraph">
                        <a onClick={()=>handleNavClick("/")} className="text-violet text-decoration-none">
                          Home
                        </a>{" "}
                        / <a href="/testimonials" className="text-decoration-none t-color">Testimonials</a>
                      </p>
                    </div>
                    <div className="text-center home-text-center home-30 mt-5">
                      <p className="animated-quote custom-quote">
                        <span className="highlight">Our graduates  success speaks volumes</span> check out their testimonials!.
                      </p>
                    </div>
                  </div>


                  {/* Image Section */}
                  <div className="carousel-img-container col-12 col-md-6 ps-3">
                    <img
                      src={`${process.env.PUBLIC_URL}/image/tt2.jpg`}
                      className="img-fluid d-block w-100"
                      alt="Java Full Stack"
                      style={{ objectFit: "cover", minHeight: "300px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </>)}



      <section className="testimonials py-5 t-color">
        <div className={location.pathname == '/testimonials' ? "container mtop-120" : "container"}>
          <div className="row mt-3">
            {/* Left side: Heading and Buttons */}
            <div className="col-md-6 text-center">
              <h2 className="mb-4  t-color heading-64">
                <i className="bi bi-person-circle"></i> {/* Icon */}
                Testimonials
              </h2>
              <h6>What Our Students Say</h6>
              {/* Navigation buttons */}
              <div className="btn-group" id="id-btn">
                <div className="btn-group" id="id-btn">
                  <button
                    className="btn"
                    onClick={goToPrevious}
                    disabled={currentIndex === 0}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.354 1.354a.5.5 0 0 1 0 .708L5.707 8l5.647 5.938a.5.5 0 0 1-.708.708l-6-6.5a.5.5 0 0 1 0-.708l6-6.5a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                    <span className="visually-hidden">Previous</span>
                  </button>

                  <button
                    className="btn"
                    onClick={goToNext}
                    disabled={currentIndex === testimonials.length - 1}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.354a.5.5 0 0 1 .708 0l6 6.5a.5.5 0 0 1 0 .708l-6 6.5a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.062a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Right side: Testimonial content */}
            <div className="col-md-6 t-color">
              <div className="testimonial-container course-card glass-card border-0">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`card h-100 text-center border-0 position-relative t-color `}
                    style={{
                      display: index === currentIndex ? "block" : "none", // Show only active testimonial
                      width: "100%",
                      minWidth: "100%",
                    }}
                  >
                    {testimonial.image && (
                      <div className="d-flex justify-content-center align-items-center mt-3 ">
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name}'s photo`}
                          className="rounded-circle shadow-sm"
                          style={{
                            width: "120px",
                            height: "120px",
                            objectFit: "cover",
                            borderRadius: "50%",
                            border: "3px solid #fff",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                          }}
                        />
                      </div>
                    )}

                    <div className="card-body">
                      <h5 className="card-title">{testimonial.name}</h5>
                      <p className="card-subtitle text-muted">{testimonial.course}</p>
                      <p className="card-text mt-3">{testimonial.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
