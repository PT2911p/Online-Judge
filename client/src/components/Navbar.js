import React, { useState } from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = ({ user }) => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const logout = () => {
    fetch("http://localhost:5000/auth/logout", {
      method: "POST",
      credentials: "include",
    })
      .then((response) => {
        // Callback function code here
        window.location.href = "http://localhost:3000";
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  };
  
  
  return (
    <nav className="main-nav">
      {/* 1st logo part */}
      <h2 className="link">
        <Link to="/">
            Happy Coding
        </Link>
      </h2>
      {user ? (
        /* 2nd menu part */
        <div className={showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contest">Contest</Link>
            </li>
            <li>
              <Link to="/problems">Problem List</Link>
            </li>
            <li>
              <Link to="/top-performers">Top Performers</Link>
            </li>
            <li className = "listitem" onClick = {logout}>
              Logout
            </li>
          </ul>
        </div>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}

      {/* 3rd Social Media links */}
      <div className="social-media">
        <ul className="social-media desktop">
          <li>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutubeSquare className="youtube" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className="instagram" />
            </a>
          </li>
          <li>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare className="facebook" />
            </a>
          </li>
        </ul>

        {/* Hamburger menu */}
        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
