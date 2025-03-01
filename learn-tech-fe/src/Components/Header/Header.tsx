import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path: string) => {
    navigate(path);
    setIsOpen(false); // Close the menu when a link is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-container" onClick={() => navigate('/')}>
          <img src={`${process.env.PUBLIC_URL}/image/l_t-nobg.png`} alt="logo" />
          <div className="logo-text-wrapper">
            <span className="logo-text">Learn Tech IT Solution</span>
            <span className="logo-text-down">Shape Your Career</span>
          </div>
        </div>

        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </div>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {[
          { path: '/', label: 'Home' },
          { path: '/about-us', label: 'About Us' },
          { path: '/courses', label: 'Courses' },
          { path: '/placements', label: 'Placements' },
          { path: '/testimonials', label: 'Testimonials' },
          { path: '/contact-us', label: 'Contact Us' },
        ].map(({ path, label }) => (
          <li key={path}>
            <a
              className={location.pathname === path ? 'active' : ''}
              onClick={() => handleLinkClick(path)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>

  );
};

export default Header;
