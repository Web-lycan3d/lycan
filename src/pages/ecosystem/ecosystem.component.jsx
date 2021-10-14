import React, { Fragment } from 'react'
import { AiOutlineDown } from "react-icons/ai";
import './ecosystem.styles.scss'

const Ecosystem = () => {
    return (
        <Fragment >
            <div className="container-ecosystem">
                <div className="ecosystem-heading">
                    <h1>DIGITAL MANUFACTURING ECOSYSTEM</h1>
                    <h5>Upload And Print Your 3D Model Using Our Encrypted Network</h5>
                </div>
                <a href="#sec2">
                    <AiOutlineDown className="down1" />
                </a>
            </div>
        </Fragment>
    )
}

export default Ecosystem
