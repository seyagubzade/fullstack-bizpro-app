import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <header className="theme-main-header">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="logo float-left tran4s">
          <img
            src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png.webp"
            alt="Logo"
          />
        </Link>

        <nav className="navbar theme-main-menu one-page-menu">
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/add">ADD NEW</Link>
              </li>
              <li>
                <Link to="#about-us">ABOUT</Link>
              </li>
              <li>
                <Link to="#service-section">SERVICES</Link>
              </li>
              <li>
                <Link to="#project-section">PORTFOLIO</Link>
              </li>
             
             
             
            </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
