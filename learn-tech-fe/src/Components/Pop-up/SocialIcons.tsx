import React from "react";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="icon facebook">
        <img src="image/facebook.png" alt="Facebook" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="icon linkedin">
        <img src="image/linkedin.png" alt="LinkedIn" />
      </a>
      <a href="mailto:someone@example.com" className="icon gmail">
        <img src="image/gmail.png" alt="Gmail" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer" className="icon twitter">
        <img src="image/twitter.png" alt="Twitter" />
      </a>
    </div>
  );
};

export default SocialIcons;
