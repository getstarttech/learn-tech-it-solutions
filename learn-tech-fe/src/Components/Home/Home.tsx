import React, { useState } from "react";
import { Placements } from "../Placements/Placements";
import Testimonials from "../Testimonials/Testimonials";
import Courses from "../Courses/Courses";
import { About } from "../AboutUs/About-us";
import { FAQ } from "../FAQ/FAQ";
import { Query } from "../Query/Query";
import { ToastContainer } from "react-toastify";

export const Home = () => {

    return (
        <>
            {/* Main Carousel */}
            <ToastContainer />
            <div
                id="carouselMain"
                className="carousel slide home"
                style={{ marginTop: "30px", marginBottom: "50px", marginRight: "15px" }}
                data-aos="fade-right"
                data-bs-ride="carousel"
                data-bs-interval="3000"
            >
                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselMain"
                        data-bs-slide-to="0"
                        className="active curosel-indicator-color"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselMain"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                        className="curosel-indicator-color"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselMain"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                        className="curosel-indicator-color"
                    ></button>
                </div>

                {/* Carousel Items */}
                <div className="carousel-inner mt-3">
                    <div className="carousel-item active">
                        <div className="d-flex flex-column flex-md-row w-100">
                            {/* Text Section */}
                            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-3 mt-3">
                                <div className="text-center home-text-center home-30 mt-3">
                                    <p className="animated-quote">
                                       At <span className="highlight">Learn-Tech</span>&nbsp;we don’t just teach, we shape futures! <br/>Keep learning, keep growing!
                                    </p>
                                </div>
                            </div>


                            {/* Image Section */}
                            <div className="carousel-img-container col-12 col-md-6 ps-3">
                                <img
                                    src={`${process.env.PUBLIC_URL}/image/homePage-2.jpg`}
                                    className="img-fluid d-block w-100"
                                    alt="Java Full Stack"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="d-flex flex-column flex-md-row w-100">
                            {/* Text Section */}
                            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-3">
                                <div className="text-center home-text-center home-30 mt-5">
                                    <p className="animated-quote">
                                        Every expert was once a beginner – Start your journey at <span className="highlight">Learn-Tech</span>&nbsp;today!
                                    </p>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="carousel-img-container col-12 col-md-6 ps-3">
                                <img
                                    src={`${process.env.PUBLIC_URL}/image/homePage-4.jpg`}
                                    className="img-fluid d-block w-100"
                                    alt="Java Full Stack"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="d-flex flex-column flex-md-row w-100">
                            {/* Text Section */}
                            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-3">
                                <div className="text-center home-text-center home-30 mt-5">
                                    <p className="animated-quote">
                                        Grab your opportunity soon to brighten your career at <span className="highlight">Learn-Tech</span>&nbsp;today! <br />
                                    </p>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="carousel-img-container col-12 col-md-6 ps-3">
                                <img
                                    src={`${process.env.PUBLIC_URL}/image/homePage-1.jpg`}
                                    className="img-fluid d-block w-100"
                                    alt="Web Development"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Carousel Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselMain"
                    data-bs-slide="prev"
                    style={{ left: "40px", top: "150px" }} // Move left button outward
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselMain"
                    data-bs-slide="next"
                    style={{ right: "40px", top: "150px" }} // Move right button outward
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>


            </div>

            {/* Content Sections */}
            <About />
            <Courses />
            <Placements />
            <Testimonials />
            <FAQ />

            {/* Query & Popup */}
            <Query />
        </>
    );
};
