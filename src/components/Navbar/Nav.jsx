/** @format */

import React from "react";
import "./nav.styles.scss";
import logo from "./brandlogo.svg";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-contents">
        <div className="nav-brand">
          <img src={logo} alt="Brand logo" />
        </div>
        <div className="nav-ul">
          <ul>
            <li>Academia</li>
            <li>Sectors</li>
            <li>Services</li>
            <li>Ecosystem</li>
            <li className="nav-upload">Upload</li>
            <li className="nav-user-account"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
