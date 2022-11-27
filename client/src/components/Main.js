import React, { useState } from "react";
import { Container } from "@mui/material";

import '../styles/main.css';

// Import Fixed components
import Navigation from "./Navigation";
import Footer from './Footer';

// Import Pages components
import AboutMe from '../pages/AboutMe'
import Portfolio from '../pages/Portfolio'
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";


export default function Main () {

    const [currentPage, setCurrentPage] = useState('AboutMe');
    const handlePageChange = (page) => setCurrentPage(page);

    const renderPage = () => {
        switch (currentPage) {
            case 'AboutMe':
                return <AboutMe/>                

            case 'Portfolio':
                return <Portfolio/>

            case 'Contact':
                return <Contact/>        
                
            case 'Resume':
                return <Resume/>        
        }
    }

    return (
        
        <div className="masterContainer">
            <Container >
                <div className="maintitle">
                    <h1>My React Portfolio</h1>
                    <div className="nav-container">
                        <Navigation className='NavContainer' handlePageChange={handlePageChange} />
                    </div>
                </div>
            </Container>

            {renderPage()}            

            <Footer/>

        </div>

    )

};

