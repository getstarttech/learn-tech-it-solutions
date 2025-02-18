import React from "react";


const FloatingIcons = () => {
    const mobileNumber = process.env.REACT_APP_MOBILE
    const whatsapp = process.env.REACT_APP_WHATSAPP;
    console.log(mobileNumber)
    return (
        <>
            <a
                href={`tel:${mobileNumber}`}
                target="_blank"
                className="floating-icon call"
                rel="noopener noreferrer"
                aria-label="Phone"
            >
                <img
                    src="/image/phone.png"
                    className="img-fluid rounded-start course-card"
                    alt="Phone"
                />
            </a>
            <a
                href={`https://wa.me/${whatsapp}`}
                className="floating-icon whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
            >
                <img
                    src="/image/whatsapp.svg"
                    className="img-fluid rounded-start course-card"
                    alt="WhatsApp"
                />
            </a>


        </>
    );
};

export default FloatingIcons;
