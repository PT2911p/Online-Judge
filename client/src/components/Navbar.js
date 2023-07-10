import {React, useState} from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import "./navbar.css";
import {GiHamburgerMenu} from "react-icons/gi";
const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
        <nav className = "main-nav">
        {/*1st logo part */}
            <div className = "logo">
                <h2>
                <span>H</span>appy
                <span>C</span>oding
                </h2>
            </div>

            {/*2nd menu part */}
            <div className = {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                <ul>
                    <li>
                    <a href="#">Home</a>
                    </li>
                    <li>
                    <a href="#">About</a>
                    </li>
                    <li>
                    <a href="#">Contest</a>
                    </li>
                    <li>
                    <a href="#">Problem List</a>
                    </li>
                    <li>
                    <a href="#">Top Performers</a>
                    </li>
                </ul>
            </div>
            {/*3rd Social Media links */}
            <div className = "social-media">
                <ul className="social-media desktop">
                    <li><a href="https://youtube.com/" target="YT">
                        <FaYoutubeSquare className = "youtube" />
                    </a></li>
                    <li><a href="https://instagram.com/" target="YT">
                        <FaInstagramSquare className = "instagram" />
                    </a></li>
                    <li><a href="https://facebook.com/" target="YT">
                        <FaFacebookSquare className = "facebook" />
                    </a></li>
                </ul>
                {/*Hamburger menu */}  
                <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                </div> 
            </div>
        </nav>

        {/* Hero Section */}
        <section className = "hero-section">
        <p>Welcome to</p>
        <h1>Happy COding</h1>
        </section>
    </>
  )
}

export default Navbar