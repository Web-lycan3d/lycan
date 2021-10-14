/** @format */

import React, { useState } from "react";
import "./nav.styles.scss";
import logo from "./brandlogo.svg";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import NavDropdown from "./NavDropdown";
import { AllServices } from "../AllServices";
import { AllSectors } from "../AllSector";

const Nav = () => {
  const [dropdownstate, setDropdownState] = useState(false);
  const [Sectordropdownstate, setSectorDropdownState] = useState(false);
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
            <li className="service">
              <span
                className="service-span"
                onClick={() => {
                  setDropdownState(false);
                  setSectorDropdownState(!Sectordropdownstate);
                }}>
                Sectors{" "}
                <div>
                  <IoMdArrowDropdown className="arrow-icon" />
                </div>
              </span>
              {Sectordropdownstate && (
                <div className="service-dropdown">
                  <NavDropdown
                    setDropdownState={setSectorDropdownState}
                    type="sector"
                    list={AllSectors}
                  />
                </div>
              )}
            </li>
            <li className="service">
              <span
                className="service-span"
                onClick={() => {
                  setSectorDropdownState(false);
                  setDropdownState(!dropdownstate);
                }}>
                Services{" "}
                <div>
                  <IoMdArrowDropdown className="arrow-icon" />
                </div>
              </span>
              {dropdownstate && (
                <div className="service-dropdown">
                  <NavDropdown
                    setDropdownState={setDropdownState}
                    type="service"
                    list={AllServices}
                  />
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
