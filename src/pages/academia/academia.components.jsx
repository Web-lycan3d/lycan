import React, { Fragment } from 'react'

import './academia.styles.scss'
import pic1 from '../../assets/Group 9325.svg'
import pic2 from '../../assets/Group 9326.svg'
import pic3 from '../../assets/Group 9327.svg'
import pic4 from '../../assets/Group 9328.svg'

const Academia = () => {
    return (
        <Fragment>
            <div className="container-academia">
                <div className="academia-heading">
                    <h1>Level Up</h1>
                    <h3>With Our Additive Manufacturing Programs, Just For You!</h3>
                </div>
                <div className="academia-image">
                    <img src="https://i.ibb.co/D5g5X1N/Group-9187-min.png" alt="" />
                </div>
            </div>
            <div className="academia-sec2">
                <div className="academia-sec2-img">
                    <img src="https://i.ibb.co/CnWRW1T/Group-9324-min.png" alt="" />
                </div>
                <div className="academia-sec2-content">
                    <h2>Lycan Academia</h2>
                    <p>At Lycan 3D, we‘re extremely passionate about 3D printing and we love nothing more than sharing that passion. Whether you are already an existing user of the Lycan 3D Printing Ecosystem or are simply interested in learning about the possibilities the 3D world has to offer, Lycan 3D provides everything you need to upskill yourself and increase your knowledge with learning programs designed for 3D Printing enthusiasts of all levels - students, professionals, researchers and DIY-Makers.</p>
                    <p><b>Sign up for a hands-on experience with industry-standard equipment, knowledge sharing by domain experts, and certification to boot.</b></p>
                </div>
            </div>
            <div className="academia-sec3">
                <h1>Course Highlights</h1>
                <div className="course-highlights">
                    <div className="course-highlight">
                        <img src={pic1} alt="" />
                        <h5>Structured Curriculum</h5>
                    </div>
                    <div className="course-highlight">
                        <img src={pic2} alt="" />
                        <h5>Industry Experts</h5>
                    </div>
                    <div className="course-highlight">
                        <img src={pic3} alt="" />
                        <h5>Hands On Experience</h5>
                    </div>
                    <div className="course-highlight">
                        <img src={pic4} alt="" />
                        <h5>Certification</h5>
                    </div>
                </div>
            </div>
            <div className="academia-sec4">
                <h1>Timeline</h1>
                <img src="https://i.ibb.co/3NzZ16Z/Group-9188-min.png" alt="" />
            </div>
            <div className="academia-sec5">
                <h1>Who Can Take The Course</h1>
            </div>
        </Fragment>
    )
}

export default Academia
