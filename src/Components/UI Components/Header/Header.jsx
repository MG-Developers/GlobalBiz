import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import "./index.css";
// import SignIn from "../../SignIn/SingIn";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolling, setScrolling] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const scrollToTop = () => {
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={`navbar ${
        (scrolling || isHovered || menuOpen) && "changed-navbar"
      } `}
    >
      <div>
        <NavLink className="nav-brand" to="/" onClick={scrollToTop}>
          <img src="images/logo-3.svg" />
        </NavLink>
      </div>

      <ul className={menuOpen ? "mobile-nav-links" : "nav-links"}>
        <li>
          <NavLink className="nav-link" to="/" onClick={scrollToTop}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink className="nav-link" to="/about" onClick={scrollToTop}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink className="nav-link" to="/services" onClick={scrollToTop}>
            Services
          </NavLink>
        </li>

        <li>
          <NavLink className="nav-link" to="/contact" onClick={scrollToTop}>
            Contact Us
          </NavLink>
        </li>

        {/* <li>
          <NavLink className="nav-link" to="/pricing" onClick={scrollToTop}>
            Pricing
          </NavLink>
        </li> */}
      </ul>

      <div className="nav-btn-group">
        {/* <SignIn /> */}
        <Link
          to="/contact"
          style={{ boxShadow: "0 0 10px rgba(255, 194, 0, 0.3)" }}
          className="flex items-center justify-center w-full font-bold rounded-full py-3 px-8 border-1 border-gb-yellow text-gb-gray-3 text-base hover:duration-500 hover:bg-gb-yellow hover:text-black"
        >
          Get In Touch
        </Link>
      </div>

      <div className="menu-icon">
        {menuOpen ? (
          <RxCross1
            //   className={`menu-icon ${
            //     (menuOpen || isHovered || scrolling) && "nav-color-change"
            //   }`}
            onClick={toggleMenu}
            size="1.5em"
          />
        ) : (
          <RxHamburgerMenu
            //   className={`menu-icon ${
            //     (menuOpen || isHovered || scrolling) && "nav-color-change"
            //   }`}
            onClick={toggleMenu}
            size="1.5em"
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
