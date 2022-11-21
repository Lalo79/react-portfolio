import React from "react";

function Navigation ({ currentPage, handlePageChange }) {


    return (

        <ul>

            <li>
                <a
                    href="#About_Me"
                    onClick={() => handlePageChange('About_Me')}
                >
                    About Me
                </a>
            </li>

            <li>
                <a
                    href="#Portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                >
                    Portfolio
                </a>
            </li>

            <li>
                <a
                    href="#Contact"
                    onClick={() => handlePageChange('Contact')}
                >
                    Contact
                </a>
            </li>            

            <li>
                <a
                    href="#Resume"
                    onClick={() => handlePageChange('Resume')}
                >
                    Resume
                </a>
            </li>



        </ul>



    )



}


export default Navigation;