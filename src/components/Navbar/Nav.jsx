/** @format */

import React, { useState } from "react";
import "./nav.styles.scss";
import logo from "./brandlogo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  const [dropdownstate, setDropdownState] = useState(false);
  return (
    <div className="nav-container">
      <div className="nav-contents">
        <div className="nav-brand">
          <Link to="/">
            <img src={logo} alt="Brand logo" />
          </Link>
        </div>
        <div className="nav-ul">
          <ul className="ul-main">
            <li>
              <Link to="/"> </Link> Academia
            </li>
            <li>
              <Link to="/"> </Link> Sectors
            </li>
            <li className="service">
              <span onClick={() => setDropdownState(!dropdownstate)}>
                Services
              </span>
              {dropdownstate && (
                <div className="service-dropdown">
                  <ul className="dropdown-ul">
                    <li>
                      <Link
                        to={`/service/${1}`}
                        onClick={() => setDropdownState(false)}>
                        service 1{" "}
                      </Link>{" "}
                    </li>
                    <li>
                      <Link
                        to={`/service/${2}`}
                        onClick={() => setDropdownState(false)}>
                        service 2{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/service/${3}`}
                        onClick={() => setDropdownState(false)}>
                        {" "}
                        service 3{" "}
                      </Link>{" "}
                    </li>
                    <li>
                      <Link
                        to={`/service/${4}`}
                        onClick={() => setDropdownState(false)}>
                        {" "}
                        service 4{" "}
                      </Link>{" "}
                    </li>
                    <li>
                      <Link
                        to={`/service/${5}`}
                        onClick={() => setDropdownState(false)}>
                        {" "}
                        service 5{" "}
                      </Link>{" "}
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link to="/"> </Link> Ecosystem
            </li>
            <li className="nav-upload">
              <Link to="/"> </Link> Upload
            </li>
            <li className="nav-user-account"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
