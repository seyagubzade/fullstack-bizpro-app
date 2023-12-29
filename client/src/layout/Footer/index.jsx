import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Link to="/" className="logo">
          <img
            src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png.webp"
            alt="Logo"
          />
        </Link>
        <ul>
          <li>
            <Link to="#" className="tran3s round-border">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="#" className="tran3s round-border">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="#" className="tran3s round-border">
              <i className="fa fa-pinterest" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="#" className="tran3s round-border">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="#" className="tran3s round-border">
              <i className="fa fa-skype" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="#" className="tran3s round-border">
              <i className="fa fa-flickr" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="#" className="tran3s round-border">
              <i className="fa fa-dribbble" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="#" className="tran3s round-border">
              <i className="fa fa-rss" aria-hidden="true"></i>
            </Link>
          </li>
        </ul>
        <p>Copyright @2018 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
