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
                    actions={[<a href='https://github.com/eggobiggie/train-scheduler' target="_blank">Github</a>]}>
                    Train Scheduler uses firebase to save train data and javascript to calculate train arrival times.
                </Card>
            </div>
            <div className="col s4">
                <Card className='small'
                    header={<CardTitle image={ Giftastic }></CardTitle>}
                    actions={[<a href='https://github.com/eggobiggie/giftastic' target="_blank">Github</a>]}>
                    Giftastic allows users to click on buttons to generate themed gifs from the giphy API. Users can also add their own buttons
                </Card>
            </div>
            <div className="col s4">
                <Card className='small'
                    header={<CardTitle image={ Burger }></CardTitle>}
                    actions={[<a href='https://github.com/eggobiggie/its-burger-time' target="_blank">Github</a>]}>
                    It's Burger Time is an app that utilizes Node.js and Express along with a mySQL database to save and update different types of burgers
                </Card>
            </div>
            <div className="col s4">
                <Card className='small'
                    header={<CardTitle image={ Cryptid }></CardTitle>}
                    actions={[<a href='https://github.com/eggobiggie/cryptid-collaborator' target="_blank">Github</a>]}>
                    Cryptid Collaborator surveys users to match them with a cryptid by using Node.js and Express.
                </Card>
            </div>
            <div className="col s4">
                <Card className='small'
                    header={<CardTitle image={ Hangman }></CardTitle>}
                    actions={[<a href='https://github.com/eggobiggie/Hangman-Game' target="_blank">Github</a>]}>
                    A JavaScript based hangman game with a Bob's Burgers theme
                </Card>
            </div>
        </div>
    </div>
);