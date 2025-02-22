import { useEffect, useState } from "react"
import { sendQuery } from "../../API/QueryAPI";
import { Loader } from "../Loader/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

export const Query = () => {
    const initialUserDetails = {
        name: "",
        email: "",
        mobileNumber: "",
        whatsappNumber: "",
        domain: "",
        query: ""
    };

    const initialErrorMessage = {
        name: "",
        email: "",
        mobileNumber: "",
        whatsappNumber: "",
        domain: "",
        query: ""
    };

    const [userData, setUserData] = useState(initialUserDetails);
    const [error, setError] = useState(initialErrorMessage);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        toast.dismiss(); // Clear any previous toasts
      }, [location.pathname]);

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
        if (!userdata.mobileNumber) {
            message.mobileNumber = "* Enter your Mobile Number";
            valid = false;
        } else if (!/^\d{10}$/.test(userdata.mobileNumber)) {
            message.mobileNumber = "* Enter a valid 10-digit Mobile Number";
            valid = false;
        }
        if (!userdata.whatsappNumber) {
            message.whatsappNumber = "* Enter your Whatsapp Number";
            valid = false;
        } else if (!/^\d{10}$/.test(userdata.whatsappNumber)) {
            message.whatsappNumber = "* Enter a valid 10-digit whatsapp Number";
            valid = false;
        }
        if (!userdata.query) {
            message.query = "* Enter your Query";
            valid = false;
        }

        setError(message);
        return valid;
    };

    const onClickSubmit = async (event: any) => {
        event.preventDefault();

        if (!showError(userData)) return;

        setLoading(true);
        try {
            const response = await sendQuery(userData);
            if (response?.status === 200) {
                setUserData(initialUserDetails);
                setError(initialErrorMessage);
                toast.success("Query submitted successfully!", { autoClose: 2000 });
            }
        } catch (error: any) {
            console.error("Error sending query:", error.message);
            toast.error("Failed to submit query. Please try again.", { autoClose: 2000 });
        } finally {
            setLoading(false); 
        }
    };
    
    return (
        <>
        {loading && <Loader></Loader>}
        <ToastContainer />
            <div className="container d-flex justify-content-center align-items-center my-5 mt-5">
                <div className="row w-100 mt-5 rows" style={{ maxWidth: "1000px" }}>
                    {/* Left Side Image */}
                    <div className="col-md-6 d-flex justify-content-center align-items-center course-card card img-br"
                        data-aos="fade-right">
                        <img
                            src={`${process.env.PUBLIC_URL}/image/faq-2.jpg`}
                            alt="Placements"
                            className="img-fluid"
                            style={{ borderRadius: "10px", maxHeight: "300px" }}
                        />
                    </div>

                    {/* Right Side Form */}
                    <div className="col-md-6" data-aos="zoom-out">
                        <form
                            className="p-4 glass-card course-card"
                            style={{ border: "1px solid #ddd", borderRadius: "10px" }}
                            onSubmit={onClickSubmit} 
                        >
                            <h3 className="text-center mb-4 t-color" data-aos="fade-left">
                                <i className="bi bi-question-circle me-2"></i> Any Query?
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
                                <input
                                    type="text"
                                    id="mobileNumber"
                                    placeholder="Your Mobile Number *"
                                    className={error.mobileNumber ? "form-control error-bdr" : "form-control"}
                                    value={userData.mobileNumber}
                                    onChange={onChangeData}
                                />
                                {error.mobileNumber && <p className="error">{error.mobileNumber}</p>}
                            </div>

                            <div className="mb-3">
                                <input
                                    type="text"
                                    id="whatsappNumber"
                                    placeholder="Your Whatsapp Number *"
                                    className={error.whatsappNumber ? "form-control error-bdr" : "form-control"}
                                    value={userData.whatsappNumber}
                                    onChange={onChangeData}
                                />
                                {error.whatsappNumber && <p className="error">{error.whatsappNumber}</p>}
                            </div>

                            <div className="mb-3">
                                <input
                                    type="text"
                                    id="domain"
                                    className="form-control"
                                    placeholder="Your Domain"
                                    style={{ borderRadius: "8px" }}
                                    onChange={onChangeData}
                                    value={userData.domain}
                                />
                            </div>

                            <div className="mb-3">
                                <textarea
                                    className={error.query ? "form-control error-bdr" : "form-control"}
                                    id="query"
                                    placeholder="Ask Your Query *"
                                    rows={3}
                                    style={{ borderRadius: "8px" }}
                                    onChange={onChangeData}
                                    value={userData.query}
                                ></textarea>
                                {error.query && <p className="error">{error.query}</p>}
                            </div>

                            <button
                                type="submit" // ✅ Submit button should be inside a form
                                className="btn common-bcolor btn-tcolor w-100"
                                style={{ borderRadius: "8px" }}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
} 