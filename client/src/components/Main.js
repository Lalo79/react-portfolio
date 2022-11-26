import React, { useState } from "react";
import { Avatar, Button, Typography, Paper, Grid, Container, TextField } from "@mui/material";

import Navigation from "./Navigation";
import '../styles/main.css'


export default function Main () {

    const [currentPage, setCurrentPage] = useState('About_Me');
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        
        <div>

            <Container >
                <div className="maintitle">
                    <h1>My React Portfolio</h1>
                    {/* <Typography variant="h5" >My React Portfolio</Typography> */}
                </div>
                <div>
                    <Navigation className='NavContainer' currentPage={currentPage} handlePageChange={handlePageChange} />
                </div>
            </Container>

            {/* {renderPage()} */}

        </div>
    )

};

