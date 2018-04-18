import React from "react";
import "./About.css";
import Burger from "./images/burgertime.JPG";
import Cryptid from "./images/cryptidcollaborator.JPG";
import Giftastic from "./images/giftastic.JPG";
import Hangman from "./images/hangmangame.JPG";
import Train from "./images/trainscheduler.JPG";
import { Card, CardTitle } from "react-materialize";

export const PortfolioCards = props => (
    <div className="portfolio-container">
        <div className="row">
            <div className="col s4">
                <Card className='small'
                    header={<CardTitle image={ Train }></CardTitle>}
                    actions={[<a href='#'>This is a Link</a>]}>
                    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                </Card>
            </div>
            <div className="col s4">
                <Card className='small'
                    header={<CardTitle image={ Giftastic }></CardTitle>}
                    actions={[<a href='#'>This is a Link</a>]}>
                    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                </Card>
            </div>
            <div className="col s4">
                <Card className='small'
                    header={<CardTitle image={ Burger }></CardTitle>}
                    actions={[<a href='#'>This is a Link</a>]}>
                    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                </Card>
            </div>
            <div className="col s4">
                <Card className='small'
                    header={<CardTitle image={ Cryptid }></CardTitle>}
                    actions={[<a href='#'>This is a Link</a>]}>
                    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                </Card>
            </div>
            <div className="col s4">
                <Card className='small'
                    header={<CardTitle image={ Hangman }></CardTitle>}
                    actions={[<a href='#'>This is a Link</a>]}>
                    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                </Card>
            </div>
        </div>
    </div>
);