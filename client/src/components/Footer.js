import React from "react";
import { Avatar, Button, Typography, Paper, Grid, Container, TextField } from "@mui/material";

import '../styles/footer.css'

export default function Footer () {

    return (
    <Grid container alignItems="center" justifyContent='center'>
        <div className="footer-main">
            <h4>Feel free to contact me at any of the social networks</h4>

            <div className="icon-container">
                <a className="link" href="https://github.com/Lalo79">
                    <img className="icon" alt="gitHub" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"/>
                    <p>gitHub</p>
                </a>

                <a className="link"  href="https://www.linkedin.com/in/eduardo-pacheco-mba-41a49013a/">
                    <img className="icon" alt="LinkedIn" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg" />
                    <p>LinkedIn</p>
                </a>

                <a className="link"  href="https://twitter.com/epacheco_leines">
                    <img className="icon" alt="Twitter" src="https://seeklogo.com/images/T/twitter-logo-A84FE9258E-seeklogo.com.png" />
                    <p>twitter</p>
                </a>
            </div>
        </div>
    </Grid>
)

};
