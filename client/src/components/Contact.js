import React from "react";
import "./About.css";
import ContactText from "./images/contact.png";

export const Contact = props => (
  <div className="contact-container">
    <div className="row">
      <div className="col s12">
        <div className="center">
          <img src={ContactText} alt="Contact Text" className="contact-text"></img>
        </div>
      </div>
    </div>
  </div>
);
