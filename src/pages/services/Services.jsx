/** @format */
import React, { useEffect } from "react";
import "./services.styles.scss";

const Services = (props) => {
  console.log(props.match.params.id);
  const id = props.match.params.id;
  useEffect(() => {
    console.log("S");
    // we can create an array of servies and we and finf individual element using find method
    //i doonr know other method
  }, [id]);
  return (
    <React.Fragment>
      <div className="service-container">
        <div className="service-contents">
          <div className="service-details">
            <div className="service-text">
              <h2>Multi Jet Fusion (MJF)</h2>
              <span>
                MJF an acronym for Multi Jet Fusion is a powder based additive
                manufacturing process transforming the manufacturing sector
                through its versatility , speed and manufacturing. The
                manufacturing of parts begins by the recoated blade spreading
                the polymer powder of a predetermined height on to the build
                plate and perpendicular to the re-coater movement a print head
                selectively applies fusing and detailing agents followed by the
                exposure of the area to high intensity infrared heating lamps
                which enable solidification of the areas where the binding and
                detailing agents are applied. The process is continued layer by
                layer until the final layer of the build chamber. The MJF
                technology is widely loved by the industry for its isotropic,
                airtight and watertight functional parts suitable not just for
                prototyping but also for end use applications.
              </span>
            </div>
            <div className="service-img">
              <img src="" alt="service img" />
            </div>
          </div>
        </div>
      </div>
      <div className="service-process-container">
        <h3 className="service-htag">Post Process</h3>
        <div className="service-process-contents">
          <div className="service-process-details">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=""
            />
            <p>Sanding</p>
          </div>
          <div className="service-process-details">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=""
            />
            <p>Sand blasting</p>
          </div>
        </div>
      </div>
      <div className="service-quality-container">
        <h3 className="service-htag">Quality check</h3>
        <div className="serivce-quality-contents">
          <div className="serivce-quality-box">
            <p>Name</p>
            <div className="span-wrapper">
              <span>
                Anything from a thin hairline crack to a thick crack which occur
                between layers due to imperfections in material
              </span>
            </div>
          </div>
          <div className="serivce-quality-box">
            <p>Name</p>
            <div className="span-wrapper">
              <span>
                Anything from a thin hairline crack to a thick crack which occur
                between layers due to imperfections in material
              </span>
            </div>
          </div>
          <div className="serivce-quality-box">
            <p>Name</p>
            <div className="span-wrapper">
              <span>
                Anything from a thin hairline crack to a thick crack which occur
                between layers due to imperfections in material
              </span>
            </div>
          </div>
          <div className="serivce-quality-box">
            <p>Name</p>
            <div className="span-wrapper">
              <span>
                Anything from a thin hairline crack to a thick crack which occur
                between layers due to imperfections in material
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
