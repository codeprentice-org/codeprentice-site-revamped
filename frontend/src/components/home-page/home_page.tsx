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

                <>
        <div className="intro_container">
            <div className="intro_left_container">
                <div className='intro_left_header'>
                    Bridging the gap between open source
                    software and student developers.
                </div>
                <div className="intro_buttons">
                    <button className="intro_button">Join Us</button>
                    <button className="intro_button students">Log in Github</button>
                </div>
            </div>
                <div className="intro_right_container">
                    <div className="intro_box">
                    
                </div>
                
            </div>
            </div>

        <div className="about_container">
               
            <div className="about_wave">
            <div className="about_header_container">
                <div className="about_right_header">Breaking Barriers</div>
            </div>
            <div className="about_desc_container">
                <div className="about_image"></div>
                <div className="about_us_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </div>
            </div>
        <div className="about_button_container">
            <button className="intro_button about_us_button">About Us</button>
        </div>
        <div className="about_header_container2">
            <div className="about_second_header">Project Previews</div>
        </div>
        </div>
                        </div>
                    </>
        <div className="project_container">
            <div className="project_preview_container">
            <div className="project_thumbnail first"></div>
            <div className="project_thumbnail"></div>
            <div className="project_thumbnail third"></div>
                </div>
            
            <div className="project_preview_container">
                <button className="intro_button our_projects_button">Our projects</button>
            </div>
            
            <div className="about_header_container2">
                <div className="about_right_header">Our Progress</div>
            </div>
            <div className="project_header_container">
                <div className="numbers_container">
                    <div className="numbers">72</div>
                    <div className="subtitle">Members</div>
                </div>
                <div className="numbers_container">
                    <div className="numbers">7</div>
                    <div className="subtitle">Completed Projects</div>
                </div>
                <div className="numbers_container">
                    <div className="numbers">4</div>
                    <div className="subtitle">Workshops</div>
                </div>
            </div>
            <div className="project_header_container">
                <div className="about_right_header">Interested?</div>
            </div>
        </div>
          
                <>
        {/* <div className="panel infographics">
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
            */}
                            <br/><br/>
                        <Footer/>
                        
                    </>
       

    </>
    );
};


// sub components

export default Home;