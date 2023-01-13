import React from 'react';
import './Home.css';
import Button from '@mui/material/Button';
import escuela from '../images/escuela.png';
import vivero from '../images/vivero.png';
import innovar from '../images/innovar.png';
import challenge from '../images/challenge.png';



import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



export default function Home() {

  const buttonStyle = {backgroundColor: "#76a476",
  color: "white",
  marginTop: "13px",
  marginRight: "5px",
  width: "100px",
  height: "30px"};

  return (
    <div id="body-div">
        <img></img>
        <div id="introduce-div">
            <h3 id="introduce-title">Hi! I am Jorge <br></br> La Rosa</h3>
            <p id="introduce-secondary-text">Frontend Developer</p>
            <p id="introduce-description">I have been preparing myself during the last years in the IT industry. I am interested now, in being part of a team.  </p>
            <Button id="button" variant="text">Contact me </Button>
        </div>

        <div id="about-div">
            <h3 id="about-title">About me</h3>

            <p id="about-secondary-text">Introduction</p>
            <p id="about-description">After many years working as Film Maker, I have decided to dive into the Web Development Industry.</p>

        </div>

        <div id="portfolio-div">
            <h3 id="portfolio-title">Portfolio</h3>
            <p id="portfolio-secondary-text">Personal Projects</p>
            
            <div id="cards-container">
            
            <div id="portfolio-card">
              <img className="foto" src={vivero} width={"250px"} ></img>
                <div id="card-text-section">  
                  <div >
                    <h3 id="card-title">Vivero</h3>
                    <p id="card-subtitle">Personal Project</p>
                  </div>
                 
                  <Button sx={buttonStyle} className="ir-button" size="small" variant="text">View site <ArrowForwardIcon style={{fontSize:"14px"}}/> </Button> 
                
                
                </div>
            </div>

            <div id="portfolio-card">
              <img className="foto" src={escuela} width={"250px"} ></img>
                <div id="card-text-section">  
                  <div >
                    <h3 id="card-title">Vivero</h3>
                    <p id="card-subtitle">Coderhouse Angular</p>
                  </div>
                  
                  <Button sx={buttonStyle} className="ir-button" size="small" variant="text">View site <ArrowForwardIcon style={{fontSize:"14px"}}/> </Button> 
                
                  
                </div>
            </div>

            <div id="portfolio-card">
              <img className="foto" src={challenge} width={"250px"} ></img>
                <div id="card-text-section">  
                  <div >
                    <h3 id="card-title">F-end Mentor</h3>
                    <p id="card-subtitle">Practice Project</p>
                  </div>
                 
                  <Button sx={buttonStyle} className="ir-button" size="small" variant="text">View site <ArrowForwardIcon style={{fontSize:"14px"}}/> </Button> 
                
                  
                </div>
            </div>

            <div id="portfolio-card">
              <img className="foto" src={innovar} width={"250px"} ></img>
                <div id="card-text-section">  
                  <div >
                    <h3 id="card-title">Innovar</h3>
                    <p id="card-subtitle">Inmobiliaria</p>
                  </div>
                 
                  <Button sx={buttonStyle} className="ir-button" size="small" variant="text">View site <ArrowForwardIcon style={{fontSize:"14px"}}/> </Button> 
                
                  
                </div>
            </div>

            </div>


        </div>
    </div>
  )
}
