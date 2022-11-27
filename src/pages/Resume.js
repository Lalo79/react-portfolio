import React from "react";
import { Container } from "@mui/material";

import '../styles/main.css'
import resume from '../img/epl-resume-09292019.pdf'


export default function Resume () {

    return (
        <Container sx={{ my: '2rem', p: '2rem'}}>
            <div className="main-container">
                <h2>RESUME</h2>

                <br/><p>
                    Click in the following link to see my <a href={resume}>Resume</a><br/>

                    <br/> <small>*Resume is shown in PDF format </small>

                </p>
            </div>
        </Container>
    )

}