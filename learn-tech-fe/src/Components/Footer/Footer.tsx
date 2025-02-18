import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { sendReview } from "../../API/QueryAPI";
import { Loader } from "../Loader/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const Footer: React.FC = () => {
  const location = useLocation();
  const mobileNumber = process.env.REACT_APP_MOBILE
  const whatsapp = process.env.REACT_APP_WHATSAPP;
  const email = process.env.REACT_APP_EMAIL;
  const linkedIn = process.env.REACT_APP_LINKEDIN;

  const initialUserDetails = {
    name: "",
    email: "",
    review: ""
  };

  const initialErrorMessage = {
    name: "",
    email: "",
    review: ""
  };

  const [userData, setUserData] = useState(initialUserDetails);
  const [error, setError] = useState(initialErrorMessage);
  const [loader, setLoader] = useState(false);

  const onChangeData = (event: any) => {
    const { id, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const showError = (userdata: typeof initialUserDetails) => {
    let valid = true;
    const message = { ...initialErrorMessage };

    if (!userdata.name) {
      message.name = "* Enter your Name";
      valid = false;
    }
    if (!userdata.email) {
      message.email = "* Enter your EmailId";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(userdata.email)) {
      message.email = "* Enter a valid Email Id";
      valid = false;
    }
    if (!userdata.review) {
      message.review = "* Enter your Review";
      valid = false;
    }

    setError(message);
    return valid;
  };

  const onClickSubmit = async (event: any) => {
    event.preventDefault();

    if (!showError(userData)) return;

    setLoader(true);
    try {
      const response = await sendReview(userData);
      if (response?.status === 200) {
        setUserData(initialUserDetails);
        setError(initialErrorMessage);
        toast.success("Review submitted successfully!", { autoClose: 2000 });
      }
    } catch (error: any) {
      console.error("Error sending query:", error.message);
      toast.error("Failed to submit Review. Please try again.", { autoClose: 2000 });
    } finally {
      setLoader(false);
    }
  };



  return (

    <div>
      {loader && <Loader />}
      <ToastContainer />
      {/* Full-Width Image with Breadcrumbs */}

      {location.pathname === "/contact-us" && (
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

                  {/* Water Effect Container */}
                  <div className="col-12 col-md-6 d-flex flex-column  p-5 home-screen-container">
                    <div className="text-start  mt-2 mt-5">
                      <h1 className="main-color custom-title">Contact Us</h1>
                      <p className="custom-paragraph">
                        <a href="/" className="text-violet text-decoration-none">
                          Home
                        </a>{" "}
                        / <a href="/contact-us" className="text-decoration-none t-color">Contact Us</a>
                      </p>
                    </div>
                    <div className="text-center home-text-center home-30 mt-5">
                      <p className="animated-quote custom-quote">
                        Looking for placement opportunities? <br /> <span className="highlight">Reach out to us, </span> and let`s shape your future together.<br />
                      </p>
                    </div>
                  </div>


                  {/* Image Section */}
                  <div className="carousel-img-container ps-3">
                    <img
                      src="/image/ccc1.jpg"
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



      {location.pathname == '/contact-us' ? <>

        <div className="container mt-4">
          <div className="row g-4 mt-5">
            <div className="col-md-3">
              <div className="card text-center p-3 h-100 course-card placement-card" data-aos="fade-up">
                <a href={`tel:${mobileNumber}`} className="text-decoration-none">
                  <img
                    src="/image/phone.png"
                    alt="Call Us"
                    className="img-fluid mb-2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p className="t-color fw-bold">Call Us</p>
                  <p className="p-color">{mobileNumber}</p>
                </a>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center p-3 h-100 course-card course-card placement-card" data-aos="fade-up">
                <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <img
                    src="/image/whatsapp.svg"
                    alt="Chat with us"
                    className="img-fluid mb-2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p className="t-color fw-bold">Chat If any query</p>
                  <p className="p-color">WhatsApp:{whatsapp}</p>
                </a>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center p-3 h-100 course-card placement-card position-relative" data-aos="fade-up">

                <a href={`mailto:${email}`} className="text-decoration-none" data-aos="fade-up">
                  <img
                    src="/image/mail.svg"
                    alt="Email Us"
                    className="img-fluid mb-2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p className="t-color fw-bold">Email Us</p>
                  <p className="t-color">{email}</p>
                </a>
              </div>
            </div>


            <div className="col-md-3">
              <div className="card text-center p-3 h-100 course-card placement-card" data-aos="fade-up">
                <a href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <img
                    src="/image/linkedin.svg"
                    alt="LinkedIn Profile"
                    className="img-fluid mb-2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p className="t-color fw-bold">LinkedIn</p>
                  <p className="p-color">Connect with us on LinkedIn</p>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="container mt-5">
          <div className="row">
            {/* Map Column */}
            <div className="col-md-6 mb-4" data-aos="fade-left">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15556.343019807083!2d80.206779!3d13.124001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzI0LjQiTiA4MMKwMTInMjQuNCJF!5e0!3m2!1sen!2sin!4v1616628569842"
                className="w-100 course-card"
                style={{ height: "430px", border: 0, }}
                allowFullScreen={true}
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>

            {/* Right Side Form */}
            <div className="col-md-6" data-aos="zoom-out">
              <form
                className="p-4 glass-card course-card"
                style={{ border: "1px solid #ddd", borderRadius: "10px" }}
                onSubmit={onClickSubmit}
              >
                <h3 className="text-center mb-4 t-color" data-aos="fade-left">
                  <i className="bi bi-star me-2"></i> Review
                </h3>

                <div className="mb-3">
                  <input
                    type="text"
                    id="name"
                    className={error.name ? "form-control error-bdr" : "form-control"}
                    placeholder="Your Name *"
                    style={{ borderRadius: "8px" }}
                    onChange={onChangeData}
                    value={userData.name}
                  />
                  {error.name && <p className="error">{error.name}</p>}
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    id="email"
                    placeholder="Your Email *"
                    className={error.email ? "form-control error-bdr" : "form-control"}
                    value={userData.email}
                    onChange={onChangeData}
                  />
                  {error.email && <p className="error">{error.email}</p>}
                </div>

                <div className="mb-3">
                  <textarea
                    className={error.review ? "form-control error-bdr" : "form-control"}
                    id="review"
                    placeholder="Ask Your Review *"
                    rows={3}
                    style={{ borderRadius: "8px" }}
                    onChange={onChangeData}
                    value={userData.review}
                  ></textarea>
                  {error.review && <p className="error">{error.review}</p>}
                </div>

                <button
                  type="submit"
                  className="btn common-bcolor btn-tcolor w-100"
                  style={{ borderRadius: "8px" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </> : ""}

      <div className="card mb-3 bg-custom w-100 text-white mt-5">
        <div className="container m-2">
          <div className="row g-4">
            {/* First Column: Address */}
            <div className="col-12 col-md-4">
              <div className="card-body" data-aos="fade-left">
                <div className="logo-container mb-4">
                  <img src="/image/l_t-nobg.png" alt="logo" />
                  <div className="text-container">
                    <h1 className="heading-64">Learn Tech IT Solutions</h1>
                    <p className="para-17">
                      <i>Shape Your Career</i>
                    </p>
                  </div>
                </div>
                <h5 className="card-title mb-3" style={{ fontSize: "x-large" }}>
                  Contact Us
                </h5>
                <h6 className="card-text">Kolathur</h6>
                <p className="footer-address">
                  3rd floor, 8 & 9, 200ft road, above Louis Philippe and Allen Solly, Ambedkar Nagar, Kolathur, Chennai, Tamil Nadu 600099
                </p>
              </div>

              <div className="d-flex align-items-center flex-wrap">
                <a href={`tel:${mobileNumber}`} className="btn p-1 btn-img">
                  <img src="/image/phone.png" className="img-fluid" style={{ width: 40 }} alt="Phone" />
                </a>
                <a href={`https://wa.me/${whatsapp}`} className="btn p-1 btn-img">
                  <img src="/image/whatsapp.svg" className="img-fluid" style={{ width: 40 }} alt="WhatsApp" />
                </a>
                <a href={`mailto:${email}`} className="btn p-1 btn-img">
                  <img src="/image/mail.svg" className="img-fluid" style={{ width: 40 }} alt="Email" />
                </a>
                <a href={`https://www.linkedin.com/in/${linkedIn}`} className="btn p-1 btn-img">
                  <img src="/image/linkedin.svg" className="img-fluid" style={{ width: 40 }} alt="LinkedIn" />
                </a>
              </div>


            </div>

            {/* Second Column: Navigation Links */}
            <div className="col-12 col-md-4 mt-5 d-flex flex-column align-items-center" data-aos="fade-left">
              <h5 className="mb-3">Quick Links</h5>
              <div className="d-flex flex-column gap-2 ">
                {[
                  { label: "Home", link: "/" },
                  { label: "About Us", link: "/about-us" },
                  { label: "Placements", link: "/placements" },
                  { label: "Courses", link: "/courses" },
                  { label: "Testimonials", link: "/testimonials" },
                  { label: "Contact Us", link: "/contact-us" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="nav-link text-white text-decoration-none mt-3"
                  >
                    <i className="bi bi-chevron-double-right me-3 t-color"></i>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Third Column: Map */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-start" data-aos="zoom-up">
              <h5 className="mb-3 mt-3 text-center">MAP</h5>
              <div className="w-100 d-flex justify-content-center justify-content-md-start">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15556.343019807083!2d80.206779!3d13.124001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzI0LjQiTiA4MMKwMTInMjQuNCJF!5e0!3m2!1sen!2sin!4v1616628569842"
                  className="w-100"
                  style={{
                    border: 0,
                    minHeight: "250px",
                    height: "auto",
                    maxWidth: "500px",
                    background: "transparent",
                  }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </div>


          </div>
        </div>
      </div>

    </div>
  );
};
