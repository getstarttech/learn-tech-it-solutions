import React, { useEffect, useState } from "react";
import { FAQ } from "../FAQ/FAQ";
import Testimonials from "../Testimonials/Testimonials";
import { useLocation, useNavigate } from "react-router-dom";

export const Placements = () => {

    const [placedStudents, setPlacedStudents] = useState(0);
    const [companies, setCompanies] = useState(0);
    const [currentStudents, setCurrentStudents] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setPlacedStudents(prev => (prev < 500 ? prev + 1 : prev));
            setCompanies(prev => (prev < 60 ? prev + 1 : prev));
            setCurrentStudents(prev => (prev < 20 ? prev + 1 : prev));
        }, 50);
        return () => clearInterval(interval);
    }, []);
    const handleNavClick = (path: string) => {
        navigate(path); 
     
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

    return (
        <>

            {location.pathname === "/placements" && (
                <>
                    <div
                        id="carouselMain"
                        className="carousel slide"
                        style={{ marginTop: "50px", marginRight: "15px" }}
                        data-aos="fade-right"
                        data-bs-ride="carousel"
                        data-bs-interval="3000"
                    >
                        {/* Carousel Items */}
                        <div className="carousel-inner mt-3" style={{ height: "500px" }}>
                            <div className="carousel-item active">
                                <div className="d-flex flex-column flex-md-row w-100">
                                    {/* Left Side: Text Section */}
                                    <div className="col-12 col-md-6 d-flex flex-column  ps-5 text-container">
                                        <div className="text-start">
                                            <h2 className="main-color custom-title">Placements</h2>
                                            <p className="custom-paragraph">
                                                <a onClick={()=>handleNavClick("")} className="text-violet text-decoration-none">
                                                    Home
                                                </a>{" "}
                                                / <a href="/placements" className="text-decoration-none t-color">Placements</a>
                                            </p>
                                        </div>
                                        <div className="text-center home-text-center home-30 mt-5">
                                            <p className="animated-quote">
                                                Your future is created by what you do today, not tomorrow.<br />
                                                <span className="highlight" style={{marginLeft:"200px"}}>- Robert Kiyosaki</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Side: Image Section */}
                                    <div className="carousel-img-container col-12 col-md-6 ps-3">
                                        <img
                                            src={`${process.env.PUBLIC_URL}/image/pc4.jpg`}
                                            className="img-fluid d-block w-100"
                                            alt="Java Full Stack"
                                            style={{ objectFit: "cover", minHeight: "300px" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </>
            )}



            <p className={location.pathname == '/placements' ? "mtop-120 text-center t-color heading-64" : "mtop-150 text-center m-5  t-color heading-64"}
                data-aos="zoom-up-left">
                <i className="bi bi-trophy me-4"></i>
                Placements
            </p>
            <div className="container my-5">
                <div className="row g-5 text-center">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0 placement-card">
                            <div className="card-body t-color card course-card"
                                data-aos="fade-up">
                                <i
                                    className="bi bi-people-fill mb-3"
                                    style={{ fontSize: "4rem", color: "#007bff" }}
                                ></i>
                                <h5 className="card-title placement-color">Placed Students</h5>
                                <p className="card-text display-4 fw-bold placement-color">{placedStudents}+</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0 placement-card">
                            <div className="card-body t-color card course-card"
                                data-aos="fade-up">
                                <i
                                    className="bi bi-building mb-3"
                                    style={{ fontSize: "4rem", color: "#28a745" }}
                                ></i>
                                <h5 className="card-title placement-color">Companies</h5>
                                <p className="card-text display-4 fw-bold placement-color">{companies}+</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0 placement-card">
                            <div className="card-body t-color card course-card"
                                data-aos="fade-up">
                                <i
                                    className="bi bi-person-workspace mb-3"
                                    style={{ fontSize: "4rem", color: "#ffc107" }}
                                ></i>
                                <h5 className="card-title placement-color">Current Students</h5>
                                <p className="card-text display-4 fw-bold placement-color">{currentStudents}+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {location.pathname == '/placements' ? <FAQ></FAQ> : ""}
            {location.pathname == '/placements' ? <Testimonials></Testimonials> : ""}

        </>
    )
}
