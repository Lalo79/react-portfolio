import React from "react";
import { Avatar, Button, Typography, Paper, Grid, Container, TextField } from "@mui/material";

import '../styles/footer.css'

export default function Footer () {

    return (
    <Grid container alignItems="center" justifyContent='center'>
        <div className="icon-container">

            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg" />
            <img src="https://seeklogo.com/images/T/twitter-logo-A84FE9258E-seeklogo.com.png" />
        </div>
    </Grid>
)

};
