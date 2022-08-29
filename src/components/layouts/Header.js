// Developed by Chouseki for Haoming
// Last modifed date: Aug 17, 2022
// Change: changed header items 

import React from "react";
import { Link } from "react-scroll";
// import Logo from "../elements/Logo";

function Header({ light, logoSource, toggleMenu, headerToggler }) {
  const handleClasses = () => {
    let classes = "desktop-header-1 d-flex align-items-start flex-column";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };
  const handleMobileClasses = () => {
    let classes = "mobile-header-1";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };
  return (
    <>
      <header className={handleMobileClasses()}>
        <div className="container">
          <div className="menu-icon d-inline-flex mr-4">
            <button onClick={headerToggler}>
              <span></span>
            </button>
          </div>
          {/* <Logo logoSource={logoSource} /> */}
          {/* <Link activeClass="active"
                to="section-about"
                smooth={true}
                duration={500}>
            <h2 className="mb-0 mt-4">Haoming Shi</h2>
          </Link> */}
          <Link className="btn btn-xs"
                to="section-home"gro
                smooth={true}
                duration={500}>
            <h2>Haoming Shi</h2>
          </Link>
        </div>
      </header>
      <header className={handleClasses()}>
        {/* <Logo logoSource={logoSource} /> */}
        <div className="mt-4 ml-0 m4-0">
        <Link className="btn btn-xs"
                to="section-home"gro
                smooth={true}
                duration={500}>
          <h2>Haoming Shi</h2>
        </Link>
        </div>
        <nav>
          <ul className="vertical-menu scrollspy">
            <li>
              <Link
                activeClass="active"
                to="section-home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-home"></i>Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-about"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-user-following"></i>About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-services"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-briefcase"></i>Research Focus
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-experiences"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-graduation"></i>Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-works"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-layers"></i>Publications
              </Link>
            </li>
            {/* <li>
              <Link
                activeClass="active"
                to="section-blogs"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-note"></i>Blog
              </Link>
            </li> */}
            <li>
              <Link
                activeClass="active"
                to="section-contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-bubbles"></i>Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="footer">
          <span className="copyright">
            &copy; {new Date().getFullYear()} by <a href="mailto:rayeliu233@gmail.com">Chouseki</a>
          </span>
        </div>
      </header>
    </>
  );
}

export default Header;
