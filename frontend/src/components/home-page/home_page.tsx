import React, { useState, useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import styled from 'styled-components';
import coding from '../../assets/images/coding.jpg';
import Footer from './footer/footer'
import './intro.css'
import '../main/main.css'
import './about.css'
import './infograph.css'
import './project.css'
import { InputRounded } from '@material-ui/icons';

interface Props {

}

// Main home components
const Home: React.FC<Props> = () => {
    return (  
    <>
        <Controller>
                <Scene pin>
                <>
        <div className="panel intro_container">
            <div className="intro_left_container">
                <div className='intro_left_header'>
                    Bridging the gap between open source
                    software and student developers.
                </div>
                <div className="intro_buttons">
                    <button className="intro_button">Mentor</button>
                    <button className="intro_button students">Develop</button>
                </div>
            </div>
                <div className="intro_right_container">
                    <div className="illustration thumbnail">
                    
                </div>
                
            </div>
            </div>
           <div className="panel about_container">
        <div className="about_left_container">
            <div className="about_image"></div>
        </div>
        <div className="about_right_container">
            <div className="about_right_header">About Us</div>
            <div className="about_us_text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud do eiusmod tempor 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud do eiusmod tempor 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud do eiusmod tempor 
            </div>
                            <br/>
            <button className="about_button">Learn more</button>
            </div>
                        </div>
                    </>
            </Scene>
                <Scene pin>
                <>
         <div className="panel infographics">
            <div className="info_header">Why Join Codeprentice?</div>
            <div className="illustrations_container">
                <div className="illustration left-illustration">
                                    <img src={coding} />
                                <h1>Open-Souce</h1><br/>
                                 <p> Ut enim ad minim veniam, quis nostrud do eiusmod tempor 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud do eiusmod tempor
                                    Ut enim ad minim veniam, quis nostrud do eiusmod tempor 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud do eiusmod tempor  </p>  
                                    
                </div>
                <div className="illustration">
                                    <img src={coding} />
                                    <h1>Mentor</h1><br />
                                     <p> Ut enim ad minim veniam, quis nostrud do eiusmod tempor 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud do eiusmod tempor
                                    Ut enim ad minim veniam, quis nostrud do eiusmod tempor 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud do eiusmod tempor </p>  
                </div>
                <div className="illustration right-illustration">
                                    <img src={coding} />
                                     <h1>Develop</h1><br/>
                   <p> Ut enim ad minim veniam, quis nostrud do eiusmod tempor 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud do eiusmod tempor
                                    Ut enim ad minim veniam, quis nostrud do eiusmod tempor 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud do eiusmod tempor  </p> 
                                  
                </div>
            </div>
                    </div>
                    <div className="panel project_section">
            <div className="project_header">Our Impact on Open Source</div>
            <div className="projects_container_home">
                <div className="project_home">
                   
                </div>
                <div className="project_home">
                    
                </div>
                <div className="project_home">
                    
                </div>
            </div>
            <div className="more_projects">
                            See More
            </div>
                        <Footer/>
                        </div>
                    </>
            </Scene>
        </Controller>
    </>
    );
};


// sub components

export default Home;