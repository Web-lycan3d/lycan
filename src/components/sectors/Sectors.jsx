/** @format */

import React from "react";
import "./sectors.styles.scss";

const Sectors = () => {
  return (
    <div className="sector-container">
      <h2>Sectors we have impact on</h2>
      <div className="sector-contents">
        <div className="sector-imgbox">
          <img src="https://i.ibb.co/Zmn1b2W/Aerospace.png" alt="sectors" />
        </div>
        <div className="sector-imgbox">
          <img src="https://i.ibb.co/P6gy8Jm/Automotive.png" alt="sectors" />
        </div>
        <div className="sector-imgbox">
          <img
            src="https://i.ibb.co/ZH5YY6h/Consumer-Goods.png"
            alt="sectors"
          />
        </div>
        <div className="sector-imgbox">
          <img src="https://i.ibb.co/JjqtJ5p/R-D.png" alt="sectors" />
        </div>
        <div className="sector-imgbox">
          <img
            src="https://i.ibb.co/DptzKZc/Infrastructure.png"
            alt="sectors"
          />
        </div>
        <div className="sector-imgbox">
          <img src="https://i.ibb.co/2FWvcVW/Manufacturing.png" alt="sectors" />
        </div>
      </div>
    </div>
  );
};

export default Sectors;
