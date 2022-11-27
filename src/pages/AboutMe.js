import React from "react";
import { Container } from "@mui/material";

import '../styles/aboutme.css'
import eplpic from '../img/epl-pic.png';


export default function AboutMe () {
  
    const styles = {
        image: {
          width: '50%',
          backgroundColor: '#f5f8fc',
          padding: '1.4rem',
          border: `solid 1px #cadaec`,
          borderRadius: '0.5rem' 
        },
        aboutMeCont: {
            display: 'flex',
        },
        pCont: {
            padding: '1.5rem'

        }

      };



    return (
        <Container sx={{ my: '2rem', p: '2rem'}}>
                
            <div className="main-container">

                <h2 className="subTitle ">ABOUT ME</h2>
                <div className="about-me-main">
                    <img  /* style={styles.image} */  className="profile-pic" src={eplpic} alt="epl-collage" />                
                    <div className="paragraph" /* style={styles.pCont} */>
                            <h3>Eduardo Pacheco</h3><br/>
                        <p>
                            <strong>Sales Manager</strong> in O-I, the largest glass bottle producer. We provide the bottles of the most important brands of food and beverage products (Beer, wines and spirits, instant cofee, juice, sodas, etc...)<br/>
                            
                            <br/>Passionate learner currently focused in tech topics such as <strong>Full Stack Coding and AI&ML.</strong><br/>

                            <br/> I love music, I like to play the guitar, cello and sing... not that my singing is good, but I do enjoy playing and singing.
                            <br/>                            
                        </p>
                    </div>
                </div>




            </div>
        </Container>
    )

}