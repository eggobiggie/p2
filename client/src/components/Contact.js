import React from "react";
import "./About.css";
import ContactText from "./images/contact2.png";
import ContactCorner from "./images/contact3.png";

export const Contact = props => (
  <div className="contact-container">
    <div className="row">
      <div className="col s12">
        <div className="center">
          <img src={ContactText} alt="Contact Text" className="contact-text"></img>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col s12">
        <div className="center contact-info-panel">
          <p className="contact-info">Have a look at my <a href="https://www.linkedin.com/in/mia-crandell/" target="_blank">LinkedIn!</a></p>
        </div>
        <div className="center">
          <p className="contact-info">Take a gander at my <a href="https://github.com/eggobiggie" target="_blank">Github!</a></p>
        </div>
        <div className="center">
          <p className="contact-info">miacrandell@gmail.com</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col s12">
        <div className="center">
          <img src={ContactCorner} alt="Yellow Right Angle" className="contact-corner"></img>
        </div>
      </div>
    </div>
  </div>
);
