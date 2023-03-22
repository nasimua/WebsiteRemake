import React from "react";
import '../App.css'
import banner from '../images/show-banner.png'
import chamber from '../images/chamber.png'
import raw from '../images/raw.png'
import sd from '../images/smackdown.png'
import mania from '../images/mania.png'

function Shows() {
    return (
        <div className="Shows">
            <img className="banner" src={banner} alt="banner"/>
            
            
            <div className="shows-container">

            <p className="sub-heading">WWE: <strong>Premier Shows</strong></p>
                
                <div className="show">
                    <img src={chamber} alt="Chamber" />
                </div>

                <div className="show">
                    <img src={raw} alt="Raw" />
                </div>

                <div className="show">
                    <img src={sd} alt="SmackDown" />
                </div>

                <div className="show">
                    <img src={mania} alt="Wrestlemania" />
                </div>

            </div>
        </div>
    )
}

export default Shows