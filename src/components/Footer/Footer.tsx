import React from "react";
import logo from "../../assets/Logo.png";
import instIcon from "../../assets/inst.png";
import twIcon from "../../assets/tw.png";
import ytIcon from "../../assets/YT.png";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-description">
            Takeaway & Delivery template <br />
            for small - medium businesses.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Order</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Template</h4>
            <ul>
              <li><a href="https://www.google.com/">Style Guide</a></li>
              <li><a href="https://www.google.com/">Changelog</a></li>
              <li><a href="https://www.google.com/">Licence</a></li>
              <li><a href="https://www.google.com/">Webflow University</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Flowbase</h4>
            <ul>
              <li><a href="#">More Cloneables</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="footer-separator" />

      <div className="footer-bottom">
        <p className="footer-built">
          Built by <a href="#">Flowbase</a> · Powered by <a href="#">Webflow</a>
        </p>
        <div className="footer-social-icons">
          <div className="icon-circle"><img src={instIcon} alt="Instagram" /></div>
          <div className="icon-circle"><img src={twIcon} alt="Twitter" /></div>
          <div className="icon-circle"><img src={ytIcon} alt="YouTube" /></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;