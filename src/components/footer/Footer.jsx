/** @format */

import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-contents">
        <div className="footer-brandlogo">
          <img src="https://i.ibb.co/tq5nqJM/Lycan-Icon.png" alt="brand logo" />
        </div>
        <div className="footer-items">
          <div className="footer-item">
            <p>Product</p>
            <div className="footer-item-details">
              <ul>
                <li>Homepage</li>
                <li>Academia</li>
                <li>Sectors</li>
                <li>Services</li>
                <li>Upload</li>
              </ul>
            </div>
          </div>
          <div className="footer-item">
            <p>Company</p>
            <div className="footer-item-details">
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <div className="footer-item">
            <p>Futher Information</p>
            <div className="footer-item-details">
              <ul>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="footer-item">
            <p>Follow Us</p>
            <div className="footer-item-details">
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Linkedin</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
