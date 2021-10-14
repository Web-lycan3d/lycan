/** @format */

import React, { Component } from "react";
import { AllSectors } from "../../components/AllSector";
import "./sector.styles.scss";
import { GoPrimitiveDot } from "react-icons/go";
import { motion } from "framer-motion";

export class Sector extends Component {
  state = { item: "" };
  componentDidMount() {
    const id = this.props.match.params.id;
    const selectedService = AllSectors.find((sector) => {
      return sector.itemId === parseInt(id);
    });

    this.setState({ item: selectedService });
  }
  render() {
    return (
      <>
        <div className="sector-container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="sector-contents">
            <div className="sector-details">
              <h3>{this.state.item.Name}</h3>
              <span>{this.state.item.sectorDesp}</span>
            </div>
            <div className="sector-img">
              <img
                src="https://i.ibb.co/RQ4JbZp/Group-9277-1.webp"
                alt="error"
              />
            </div>
          </motion.div>
        </div>
        <div className="sector-application-container">
          <h1>Applications</h1>
          {this.state.item?.application?.map((app) => (
            <div className="sector-application-box">
              <img src={app.appImgUrl} alt="error" />
              <p>{app.text}</p>
            </div>
          ))}
        </div>
        <div className="sector-adv">
          <div className="sec-bg-img">
            <img src={this.state.item.advbgUrl} alt="error" />
          </div>
          <div className="sector-adv-list">
            <h1>Advantages</h1>
            {this.state.item?.Advantages?.map((adv) => (
              <span>
                {" "}
                <GoPrimitiveDot className="dot-icon" /> {adv.value}
              </span>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Sector;
