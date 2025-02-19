import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Query } from "../Query/Query";

const Courses: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const courses = [
    {
      title: "Cloud Technology",
      image: `${process.env.PUBLIC_URL}/image/logo/logo1.jpg`,
    },
    {
      title: "AWS",
      image: `${process.env.PUBLIC_URL}/image/logo/logo-2.png`,
    },
    {
      title: "Azure",
      image: `${process.env.PUBLIC_URL}/image/logo/logo4.png`,
    },
    {
      title: "Gcp",
      image: `${process.env.PUBLIC_URL}/image/logo/logo3.png`,
    },
    {
      title: "Linux",
      image: `${process.env.PUBLIC_URL}/image/logo/logo-unix.png`,
    },
    {
      title: "Unix",
      image: `${process.env.PUBLIC_URL}/image/logo/logo-linux.png`,
    },
    {
      title: "CCNA",
      image: `${process.env.PUBLIC_URL}/image/logo/logo-ccna.png`,
    },
    {
      title: "C",
      image: `${process.env.PUBLIC_URL}/image/logo/logo6.png`,
    },
    {
      title: "C++",
      image: `${process.env.PUBLIC_URL}/image/logo/logo7.png`,
    },
    {
      title: "Python",
      image: `${process.env.PUBLIC_URL}/image/logo/logo8.png`,
    },

    {
      title: "Matlab",
      image: `${process.env.PUBLIC_URL}/image/logo/logo9.png`,
    },
    {
      title: "Java",
      image: `${process.env.PUBLIC_URL}/image/logo/logo10.png`,
    },
    {
      title: "Selenium",
      image: `${process.env.PUBLIC_URL}/image/logo/logo11.png`,
    },
    {
      title: "Mobile App Testing",
      image: `${process.env.PUBLIC_URL}/image/logo/logo12.png`,
    },
    {
      title: "Php",
      image: `${process.env.PUBLIC_URL}/image/logo/logo13.png`,
    },
    {
      title: ".Net",
      image: `${process.env.PUBLIC_URL}/image/logo/logo14.png`,
    },
    {
      title: "Android",
      image: `${process.env.PUBLIC_URL}/image/logo/logo15.png`,
    },
    {
      title: "R language",
      image: `${process.env.PUBLIC_URL}/image/logo/logo16.png`,
    },
    {
      title: "Sas",
      image: `${process.env.PUBLIC_URL}/image/logo/logo-sas.png`,
    },
    {
      title: "Informatica",
      image: `${process.env.PUBLIC_URL}/image/logo/logo19.png`,
    },
    {
      title: "Salesforce",
      image: `${process.env.PUBLIC_URL}/image/logo/logo18.png`,
    },
    {
      title: "Big Data Hadoop",
      image: `${process.env.PUBLIC_URL}/image/logo/logo21.png`,
    },
    {
      title: "Qtp",
      image: `${process.env.PUBLIC_URL}/image/logo/logo22.png`,
    },
    {
      title: "Load Runner",
      image: `${process.env.PUBLIC_URL}/image/logo/logo23.png`,
    },
    {
      title: "SQL DBA",
      image: `${process.env.PUBLIC_URL}/image/logo/logo24.png`,
    },
    {
      title: "Oracle DBA",
      image: `${process.env.PUBLIC_URL}/image/logo/logo-oracle.png`,
    },
    {
      title: "Robotic Process Automation",
      image: `${process.env.PUBLIC_URL}/image/logo/logo26.png`,
    },
    {
      title: "Workday Training",
      image: `${process.env.PUBLIC_URL}/image/logo/logo27.png`,
    },

  ];

  // Show limited courses initially
  const [showAll, setShowAll] = useState(location.pathname === "/courses");
  const [popupVisible, setPopupVisible] = useState(false);
  

  const showPopup = (visible: boolean) => {
    setPopupVisible(visible);
  };

  const displayedCourses = showAll ? courses : courses.slice(0, 4);

  const handleViewAll = () => {
    navigate("/courses");
    setShowAll(true);
  };

  return (
    <>
      <h1
        className="text-center t-color heading-64 "
        id="course-section"
        data-aos="fade-right"
        style={{ marginTop: "180px", marginBottom: "50px" }}
      >
        <i className="bi bi-book-half me-2"></i> Discover Our Courses
      </h1>

      <div className="container my-4">
        <div className="row g-2 justify-content-center">
          {displayedCourses.map((course, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 d-flex justify-content-center">
              <div
                className="card course-card d-flex align-items-center border-0"
                data-aos="zoom-in"
                style={{ width: "100%", maxWidth: "250px", textAlign: "center" }}
              >
                {/* Circular Image */}
                <img
                  src={course.image}
                  className="card-img-top rounded-circle"
                  data-aos="zoom-in-up"
                  alt="Course preview"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />

                {/* Course Title Below */}
                <div className="card-body p-2">
                  <h6 className="card-title t-color m-0">{course.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>





      {!showAll && (
        <div className="text-end me-5 mt-4">
          <button
            className="btn text-primary text-decoration-underline"
            onClick={handleViewAll}
          >
            View All Courses
          </button>
        </div>
      )}


      {location.pathname === "/courses" && (
        <>
          <Query />
        </>
      )}
    </>
  );
};

export default Courses;
