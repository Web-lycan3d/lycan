/** @format */

import React from "react";
import { Link } from "react-router-dom";
const NavDropdown = ({ setDropdownState, type, list }) => {
  console.log(list);
  return (
    <>
      <ul className="dropdown-ul">
        {list.map(
          (item, index) =>
            index < 6 && (
              <li className="li-1">
                <Link
                  to={`/${type}/${item.itemId}`}
                  onClick={() => setDropdownState(false)}>
                  {item.Name}
                </Link>
              </li>
            )
        )}
      </ul>
      <ul className="dropdown-ul-2">
        {list.map(
          (item, index) =>
            index >= 6 && (
              <li className="li-2">
                <Link
                  to={`/${type}/${item.itemId}`}
                  onClick={() => setDropdownState(false)}>
                  {item.Name}
                </Link>
              </li>
            )
        )}
      </ul>
    </>
  );
};

export default NavDropdown;
