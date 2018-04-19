import React from "react";
import "./About.css";
import Mia from "./images/mia2.jpg";
import Hello from "./images/hello4.png";

export const About = props => (
    <div className="about-container">
        <div className="yellow-container">
            <div className="row">
                <div className="col s12">
                </div>
            </div>
        </div>
        <div className="teal-container">
            <div className="row">
                <div className="col m3 offset-m1 s4">
                    <div className="right">
                        <img src={Mia} alt="Mia's Face'" className="mia-face z-depth-2"></img>
                    </div>
                </div>
                <div className="col m4 s8">
                <img src={Hello} alt="Hello Voice Bubble" className="hello-text"></img>
                </div>
                <div className="col m6 s12">
                <p className="description">I strive to bring fun, creativity, and hard work into everything I do. I studied animation at the Savannah College of Art and Design, and I recieved my BFA in 2010. I have since included my art background into a variety of environments. Now that I have discovered coding, I spend much of my time finding ways to mix both code and art into anything I can. I live in Denver with my three cats where I draw fun pictures, create embroidery, and, of course, code on a regular basis.</p>
                </div>
            </div>
            <div className="row">    
            </div>
        </div>
    </div>
);
