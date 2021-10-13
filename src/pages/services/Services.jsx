/** @format */
import React, { useEffect, useState } from "react";
import "./services.styles.scss";
import patternBg from "./pattern.png";
import { AllServices } from "../../components/AllServices";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = (props) => {
  const [selectedService, setSelectedService] = useState("");
  const id = props.match.params.id;
  const { inView, ref } = useInView();
  const animationControl = useAnimation();

  //to create animation on scroll
  if (inView) {
    animationControl.start({
      opacity: 1,
      y: 0,
    });
  }

  useEffect(() => {
    const service = AllServices.find((service) => {
      return service.serviceId === parseInt(id);
    });

    setSelectedService(service);

    // we can create an array of servies and we and finf individual element using find method
    //i doonr know other method
  }, [id]);
  const list = {
    visible: { opacity: 1, y: "0px" },
    hidden: { opacity: 0, y: "10px" },
  };

  return (
    <React.Fragment>
      <div className="service-container">
        <div className="service-contents">
          <div className="service-details">
            {selectedService ? (
              <>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  variants={list}
                  transition={{ duration: 0.2 }}
                  className="service-text">
                  <h2>{selectedService.serviceName}</h2>
                  <span>{selectedService.serviceDesp}</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: "10px" }}
                  animate={{ opacity: 1, y: "0px" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="service-img">
                  {selectedService.serviceImg ? (
                    <img src={selectedService.serviceImg} alt="service img" />
                  ) : (
                    <h2 style={{ color: "white" }}>Loading</h2>
                  )}
                </motion.div>
              </>
            ) : (
              <div className="loader">
                <h4>Loading</h4>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="service-process-container">
        {/* //adding because cant change image opacity */}
        <div className="service-bg">
          <img src={patternBg} alt="error" />
        </div>
        <h3 className="service-htag">Post Process</h3>
        <div ref={ref} className="service-process-contents">
          {selectedService?.serviceProcess?.map((item) => (
            <motion.div
              initial={{ opacity: 0, y: "10px" }}
              animate={animationControl}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.7,
                delay: item.processId / 3,
              }}
              className="service-process-details">
              <img src={item.processImg} alt="sanding" />
              <p>{item.processtext}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="service-quality-container">
        <h3 className="service-htag">Quality check</h3>
        <div className="serivce-quality-contents">
          {selectedService.quality?.map((list) => (
            <div className="serivce-quality-box">
              <p>{list.qualityname}</p>
              <div className="span-wrapper">
                <span>{list.qualityContent}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
