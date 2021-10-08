/** @format */

import React from "react";
import "./review.styles.scss";
// https://i.ibb.co/d2Cydpf/Client-1.png
// https://i.ibb.co/svMkjdZ/Client-2.png
const Reviews = () => {
  return (
    <div className="review-container">
      <div className="review-quote-div"></div>
      <div className="review-contents">
        <div className="review-box">
          <div className="review-box-text">
            <h3>What Our Clients Say</h3>
          </div>
          <div className="review-users">
            <div className="review-user">
              <img src="https://i.ibb.co/d2Cydpf/Client-1.png" alt="" />
              <p>
                "Lycan 3D did an excellent job printing my order. They followed
                up with insightful comments regarding my 3D model and suggested
                some necessary improvements and corrected mistakes. It was a
                pleasure to work with them.”
              </p>
              <span className="signature">- Varsha R</span>
            </div>
            <div className="review-user">
              <img src="https://i.ibb.co/svMkjdZ/Client-2.png" alt="" />
              <p>
                "Great service and a good selection of materials to choose from,
                will definitely be looking to use Lycan 3D again in the future.
                Would recommend."
              </p>
              <span className="signature">- Nikhil Subramaniam</span>
            </div>
            <div className="review-user">
              <img src="https://i.ibb.co/4sJpRm2/Client-3.png" alt="" />
              <p>
                "Very quick response to initial enquiry, good communication
                throughout, reasonably fast service and competitive pricing.
                Very happy with overall service.”
              </p>
              <span className="signature">- Joseph Cherian</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
