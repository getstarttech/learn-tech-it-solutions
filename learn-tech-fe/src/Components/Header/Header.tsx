import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsNavOpen(false); 
 
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`header common-bg-color ${isNavOpen ? 'menu-open' : ''}`}>
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/image/l_t-nobg.png`} alt="logo" onClick={() => navigate('/')} />
        <div className="text-container">
          <h1 className="heading-64">Learn Tech IT Solutions</h1>
          <p className="para-17"><i>Shape Your Career</i></p>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid d-flex justify-content-start">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-controls="navbarNav"
            aria-expanded={isNavOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse nav-bar-margin justify-content-${isNavOpen ? 'end' : 'start'} ${isNavOpen ? 'show' : ''}`}
            id="navbarNav"
          >
            <ul className="navbar-nav " data-aos="fade-left">
              {[
                { path: '/', label: 'Home' },
                { path: '/about-us', label: 'About Us' },
                { path: '/courses', label: 'Courses' },
                { path: '/placements', label: 'Placements' },
                { path: '/testimonials', label: 'Testimonials' },
                { path: '/contact-us', label: 'Contact Us' },
              ].map(({ path, label }) => (
                <li className="nav-item" key={path}>
                  <a
                    className={`nav-link btn-pointer ${location.pathname === path ? 'active' : ''}`}
                    onClick={() => handleNavClick(path)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
