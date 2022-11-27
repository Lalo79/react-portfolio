import React from "react";
import { Avatar, Button, Typography, Paper, Grid, Container, TextField } from "@mui/material";

import codingtriv from '../img/coding-trivia.png'
import notetaker from '../img/note-taker.png'
import psswdgen from '../img/password-generator.png'
import weatherdash from '../img/weather-dashboard.png'
import worksched from '../img/work-day-scheduler.png'

import '../styles/portfolio.css'



export default function Portfolio () {

    // const images = [codingtriv, notetaker, psswdgen, weatherdash, worksched];

    const imgData = [
        {
            src: codingtriv,
            title: 'Coding Trivia',
            git: 'https://github.com/Lalo79/coding-trivia',
            http: 'https://lalo79.github.io/coding-trivia'
        },
        {
            src: notetaker,
            title: 'Note Taker',
            git: 'https://github.com/Lalo79/note-taker',
            http: 'https://still-citadel-82672.herokuapp.com'
        },
        {
            src: psswdgen,
            title: 'Password generator',
            git: 'https://github.com/Lalo79/password-generator',
            http: 'https://lalo79.github.io/password-generator'
        },
        {
            src: weatherdash,
            title: 'Weather Dashboard',
            git: 'https://github.com/Lalo79/weather-dashboard',
            http: 'https://lalo79.github.io/weather-dashboard/'
        },
        {
            src: worksched,
            title: 'Work-day Scheduler',
            git: 'https://github.com/Lalo79/work-day-scheduler',
            http: 'https://lalo79.github.io/work-day-scheduler/'
        },        
    ]

    return (
        <Container sx={{ my: '2rem', p: '2rem'}}>
            <div className="main-container">
                <h2>PORTFOLIO</h2>

                <div>
                    {imgData.map((item) => 
                        // <h5>{item.title}</h5>
                        <div className="appContainer">
                            <h3 className="appTitle">{item.title}</h3>

                            <Grid container alignContent="center" justifyContent="centert">
                                <div className="appPic-container">
                                    <img className="appPic" src={item.src} />
                                </div>
                                <div>
                                    <h4>Deployed App & GitHub repo</h4>
                                    <p>
                                        Click here for the 
                                        <a href={item.http}> deployed App</a>
                                    </p>
                                    <p>
                                        Click here to see the 
                                        <a href={item.git}> github Repo</a>
                                    </p>
                                </div>
                            </Grid>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    )

}