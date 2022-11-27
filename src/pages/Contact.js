import React from "react";
import { Avatar, Button, Typography, Paper, Grid, Container, TextField } from "@mui/material";

import '../styles/contact.css'

export default function Contact () {

    const handleChange = () => {

    }


    return (
        <Container maxWidth="xs" sx={{ my: '2rem', p: '2rem'}}>
            <div className="main-container">
                <h2>CONTACT</h2>
                
                <form className="contactForm">
                    <Grid container sx={{p: '0.5rem'}}>
                    <>
                        <TextField sx={{mt:'1rem'}}  className="inputText" fullWidth required name="firstName" label="Name" handleChange={handleChange} autoFocus  type="text" />
                        <TextField sx={{mt:'1rem'}}  className="inputText" fullWidth required name="email" label="e-mail" handleChange={handleChange}    type="email" />                        
                    </>
                        <TextField sx={{mt:'1rem'}}  className="inputText" fullWidth multiline rows={5} rowsMin={5} required name="message" label="Message" handleChange={handleChange}  />

                        <Button sx={{mt:'1rem'}} type="submit" fullWidth variant="contained" color="primary">
                            Submit
                        </Button>

                    </Grid>


                </form>
            </div>

        </Container>
    )

}