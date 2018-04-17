import React from "react";
import "./About.css";
import Logo from "./images/logo3.png";

export const LogoHeader = props => (
    <div className="row">
    {/* <div className="col s12"> */}
        <div className="logo-container center">
            <img src={Logo} alt="Mia Crandell Logo" className="logo"></img>
        </div>
        {/* </div> */}
    </div>
);

