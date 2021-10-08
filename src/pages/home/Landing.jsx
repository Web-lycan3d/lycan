/** @format */

import React, { Component } from "react";
import Reviews from "../../components/Reviews/Reviews";
import Sectors from "../../components/sectors/Sectors";
import "./landing.styles.scss";

export class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="landing-container">
          <div className="sec1-content">
            <h1>Welcome to Lycan 3D</h1>
            <p>
              We follow a 3 step manufacturing process and all our solutions are
              in-house while some are in collaboration with OEMs, so rest
              assured that you will be provided with the highest quality
              service. Now sit back and enjoy the beauty of digital
              manufacturing with the ease of a single click.
            </p>
            <div className="sec1-subsec">
              <h3>Bring your idea to life with Lycan 3d</h3>
              <span className="line"></span>
              <button>Upload</button>
              <span className="line"></span>
              <h1>How does it work?</h1>
            </div>
          </div>
          <div className="sec1-carousel"></div>
        </div>
        <div className="container">
          <img
            src="https://i.ibb.co/ZgMjMtt/How-does-it-work.png"
            alt=""
            className="ly-image"
          />
        </div>
        <div className="sec2-container">
          <h1>Services we Offer</h1>
          <div className="services">
            <div className="service">
              <img src="https://i.ibb.co/cYb6Y4p/binderjet.png" alt="" />
              <span className="service-name">service-1</span>
            </div>
            <div className="service">
              <img src="https://i.ibb.co/PQWg661/color-jet.png" alt="" />
              <span className="service-name">service-1</span>
            </div>
            <div className="service">
              <img src="https://i.ibb.co/WVb1sWf/dlp.png" alt="" />
              <span className="service-name">service-1</span>
            </div>
            <div className="service">
              <img src="https://i.ibb.co/HP96Dc4/dmls.png" alt="" />
              <span className="service-name">service-1</span>
            </div>
            <div className="service">
              <img src="https://i.ibb.co/92Ld7Fd/fdm.png" alt="" />
              <span className="service-name">service-1</span>
            </div>
            <div className="service">
              <img src="https://i.ibb.co/S30bghT/im.png" alt="" />
              <span className="service-name">service-1</span>
            </div>
            <div className="service">
              <img src="https://i.ibb.co/TvF2mKd/mjf.png" alt="" />
              <span className="service-name">service-1</span>
            </div>
            <div class="service">
              <img src="https://i.ibb.co/F7XTpHW/paste-extrusion.png" alt="" />
              <span className="service-name">service-1</span>
            </div>
            <div class="service">
              <img src="https://i.ibb.co/Th4qPZm/polyjet.png" alt="" />
              <span className="service-name">service-1</span>
            </div>
            <div className="service">
              <img src="https://i.ibb.co/ypm7C5j/sla.png" alt="" />
              <span className="service-name">service-1</span>
            </div>
            <div className="service">
              <img src="https://i.ibb.co/Yc4zHZg/sls.png" alt="" />
              <span className="service-name">service-1</span>
            </div>
            <div className="service">
              <img src="https://i.ibb.co/fHf5GDz/vacuum-casting.png" alt="" />
              <span className="service-name">service-1</span>
            </div>
          </div>{" "}
          <div className="pricing">
            <div className="pricing-details">
              <h2>Pricing</h2>
              <span>
                At Lycan 3D, our main priority has always been to strike the
                right balance between high-quality service and affordability. By
                utilizing cost-effective methods, we are able to ensure that we
                provide you with the best prices in comparison to our
                competitors. As our valued customer, you will be able to take
                advantage of our exceptional service at the most reasonable
                rates.
              </span>
            </div>
            <div className="pricing-graph">
              <img src="https://i.ibb.co/Bj7whzb/Pricing-Graph.png" alt="" />
            </div>
          </div>
        </div>
        <Sectors />
        <Reviews />
        <div className="featured-container">
          <h4>Featured On</h4>
          <div className="featured-logos">
            <img
              src="https://i.ibb.co/hYn7d53/Featured-on-Logos.png"
              alt="featured logos"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
