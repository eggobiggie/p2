import React from "react";
import "./About.css";
import Mia from "./images/mia.jpg";

export const About = props => (
    <div className="about-container">
        <div className="row">
            <div className="col s6">
                <div className="center">
                    <img src={Mia} alt="Mia's Face'" className="mia-face"></img>
                </div>
            </div>
        </div>
    </div>
);
