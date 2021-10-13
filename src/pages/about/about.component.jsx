import React, { Fragment } from 'react'
import { AiOutlineDown } from "react-icons/ai";
import './about.styles.scss'

const About = () => {
    return (
        <Fragment>
            <div className="container-about">
                <h4>About Us</h4>
                <h1>Established in 2017, Lycan3D is India's largest deep tech Digital Manufacturing Ecosystem that brings ideas to life.</h1>
                <div className="fancy-border"></div>
                <div className="achievements">
                    <div className="achievement">
                        <h4>Industry Experience</h4>
                        <h2>4y+</h2>
                    </div>
                    <div className="achievement">
                        <h4>Parts Printed</h4>
                        <h2>1m+</h2>
                    </div>
                    <div className="achievement">
                        <h4>Clients Served</h4>
                        <h2>14k+</h2>
                    </div>
                    <div className="achievement">
                        <h4>Awards Won</h4>
                        <h2>7+</h2>
                    </div>
                </div>
                <a href="#sec2">
                    <AiOutlineDown className="down" />
                </a>
            </div>
            <div className="about-sec2" id="sec2">
                <div className="about-sec2-left">
                    <div className="sec2-content">
                        <h1>Who we are</h1>
                        <p>We are a 3D printing startup based out of Bangalore, leveraging a thriving additive manufacturing ecosystem that is undergoing rapid expansion. Since our inception, Lycan 3D has produced more than 1,000,000 parts, serving individuals and industries of all sizes. We have an extensive team of highly qualified professionals with degrees from reputed institutions worldwide and a deep understanding of mechanical and electrical systems that make up the core of any additive manufacturing unit.</p>
                    </div>
                    <div className="sec2-content">
                        <h1>What we do</h1>
                        <p>From design to end-production, we partner with major organizations and startups alike, bringing complex designs and innovative technology to life. We offer you the most comprehensive range of services, materials, systems, and the complete production cycle with a single click. We serve a wide range of sectors such as Aerospace, Automotive, Manufacturing, Consumer goods, Healthcare, Defense, among many others.</p>
                    </div>
                </div>
                <div className="about-sec2-right">
                    <img src="https://i.ibb.co/8Nk3SFW/Group-9250-min.png" alt="" />
                </div>
            </div>
        </Fragment>
    )
}

export default About
