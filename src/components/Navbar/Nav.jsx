/** @format */

import React, { useState } from "react";
import "./nav.styles.scss";
import logo from "./brandlogo.svg";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

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
              <span
                className="service-span"
                onClick={() => setDropdownState(!dropdownstate)}>
                Services{" "}
                <div>
                  <IoMdArrowDropdown className="arrow-icon" />
                </div>
              </span>
              {dropdownstate && (
                <div className="service-dropdown">
                  <ul className="dropdown-ul">
                    <li className="li-1">
                      <Link
                        to={`/service/${1}`}
                        onClick={() => setDropdownState(false)}>
                        Multi jet fusion
                      </Link>
                    </li>
                    <li className="li-1">
                      <Link
                        to={`/service/${2}`}
                        onClick={() => setDropdownState(false)}>
                        Color jet Printing
                      </Link>
                    </li>
                    <li className="li-1">
                      <Link
                        to={`/service/${3}`}
                        onClick={() => setDropdownState(false)}>
                        Binder jet Printing
                      </Link>
                    </li>
                    <li className="li-1">
                      <Link
                        to={`/service/${4}`}
                        onClick={() => setDropdownState(false)}>
                        Direct metal Laser Sintering
                      </Link>
                    </li>
                    <li className="li-1">
                      <Link
                        to={`/service/${5}`}
                        onClick={() => setDropdownState(false)}>
                        Digital Light Processing
                      </Link>
                    </li>
                    <li className="li-1">
                      <Link
                        to={`/service/${6}`}
                        onClick={() => setDropdownState(false)}>
                        Fused Deposition Modelling
                      </Link>
                    </li>
                  </ul>
                  <ul className="dropdown-ul-2">
                    <li className="li-2">
                      <Link
                        to={`/service/${7}`}
                        onClick={() => setDropdownState(false)}>
                        Injection Moulding
                      </Link>
                    </li>
                    <li className="li-2">
                      <Link
                        to={`/service/${8}`}
                        onClick={() => setDropdownState(false)}>
                        Poly Jet Printing
                      </Link>
                    </li>
                    <li className="li-2">
                      <Link
                        to={`/service/${9}`}
                        onClick={() => setDropdownState(false)}>
                        Stereolithography
                      </Link>
                      (SLA)
                    </li>
                    <li className="li-2">
                      <Link
                        to={`/service/${10}`}
                        onClick={() => setDropdownState(false)}>
                        {" "}
                        Selective Laser
                      </Link>
                    </li>
                    <li className="li-2">
                      <Link
                        to={`/service/${11}`}
                        onClick={() => setDropdownState(false)}>
                        Vacuum Casting
                      </Link>
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
