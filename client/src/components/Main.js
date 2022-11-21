import React, { useState } from "react";

import Navigation from "./Navigation";


export default function Main () {

    const [currentPage, setCurrentPage] = useState('About_Me');

    const renderPage = () => {
        if (currentPage == 'About_Me') {
            return <About_Me/>;
        }
        if (currentPage == 'About_Me') {
            return <Portfolio/>;
        }
        if (currentPage == 'About_Me') {
            return <Contact/>;
        }
        if (currentPage == 'About_Me') {
            return <Resume/>;
        }

    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        
        <div>

            
            <Navigation className='NavContainer' currentPage={currentPage} handlePageChange={handlePageChange} />




            {renderPage()}

        </div>
    )

};

