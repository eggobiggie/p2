import React from "react";
import "./About.css";
import Burger from "./images/burgertime.JPG";
import Cryptid from "./images/cryptidcollaborator.JPG";
import Giftastic from "./images/giftastic.JPG";
import Hangman from "./images/hangmangame.JPG";
import Train from "./images/trainscheduler.JPG";
import Portfolio from "./images/portfolio.png";
import MoneyHoney from "./images/moneyhoney.jpg";
import { Card, CardTitle } from "react-materialize";

export const PortfolioCards = props => (
    <div className="portfolio-container">
        <div className="row">
            <div className="col s12">
                <div className="center">
                    <img src={Portfolio} alt="Portfolio Logo" className="portfolio-text"></img>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col m4 s12">
                <Card className='medium'
                    header={<CardTitle image={ Train }></CardTitle>}
                    actions={[<a href='https://github.com/eggobiggie/train-scheduler' target="_blank" rel="noopener noreferrer">Github</a>]}>
                    <p className="card-description">Train Scheduler uses firebase to save train data and javascript to calculate train arrival times.</p>
                    <p>Visit it <a href="https://eggobiggie.github.io/train-scheduler/" target="_blank">here</a></p>
                </Card>
            </div>
            <div className="col m4 s12">
                <Card className='medium'
                    header={<CardTitle image={ Giftastic }></CardTitle>}
                    actions={[<a href='https://github.com/eggobiggie/giftastic' target="_blank" rel="noopener noreferrer">Github</a>]}>
                    Giftastic allows users to click on buttons to generate themed gifs from the giphy API. Users can also add their own buttons
                    {/* <p>Visit it <a href="https://eggobiggie.github.io/giftastic/" target="_blank">here.</a> API key required</p> */}
                </Card>
            </div>
            <div className="col m4 s12">
                <Card className='medium'
                    header={<CardTitle image={ Burger }></CardTitle>}
                    actions={[<a href='https://github.com/eggobiggie/its-burger-time' target="_blank" rel="noopener noreferrer">Github</a>]}>
                    It's Burger Time is an app that utilizes Node.js and Express along with a mySQL database to save and update different types of burgers
                    <p>Visit it <a href="https://serene-dawn-31673.herokuapp.com/" target="_blank">here</a></p>
                </Card>
            </div>
            <div className="col m4 s12">
                <Card className='medium'
                    header={<CardTitle image={ Cryptid }></CardTitle>}
                    actions={[<a href='https://github.com/eggobiggie/cryptid-collaborator' target="_blank" rel="noopener noreferrer">Github</a>]}>
                    Cryptid Collaborator surveys users to match them with a cryptid by using Node.js, Express, and JavaScript.
                    <p>Visit it <a href="https://obscure-dawn-62650.herokuapp.com/home.html" target="_blank">here</a></p>
                </Card>
            </div>
            <div className="col m4 s12">
                <Card className='medium'
                    header={<CardTitle image={ Hangman }></CardTitle>}
                    actions={[<a href='https://github.com/eggobiggie/Hangman-Game' target="_blank" rel="noopener noreferrer">Github</a>]}>
                    A JavaScript based hangman game with a Bob's Burgers theme
                    <p>Visit it <a href="https://eggobiggie.github.io/Hangman-Game/" target="_blank">here</a></p>
                </Card>
            </div>
            <div className="col m4 s12">
                <Card className='medium'
                    header={<CardTitle image={ MoneyHoney }></CardTitle>}
                    actions={[<a href='https://github.com/chaucees/moneyhoney' target="_blank" rel="noopener noreferrer">Github</a>]}>
                    A full stack financial app that allows users to keep track of budgets. Work in progress.
                </Card>
            </div>
        </div>
    </div>
);