import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/navbar'
import Footer from './footer/footer'
import './intro.css'
import '../main/main.css'
import './about.css'
import './infograph.css'
import './project.css'

interface Props {

}

// Main home components
const Home: React.FC<Props> = () => {
    return (
        <div>
            <div style={{height: '100vh', width: '100%'}}>
                <Navbar />
                <Intro />
                <About />
            </div>
            <Infographics />
            <div style={{height: '100vh', width: '100%'}}>
                <Projects />
                <Footer />
            </div>
        </div>
    );
};

// sub components
const Intro: React.FC = () => {
    return (
        <div className="intro_container">
            <div className="intro_left_container">
                <div className='intro_left_header'>
                    Bridging the gap between open source
                    software and student developers.
                </div>
                <div className="intro_buttons">
                    <button className="intro_button"></button>
                    <button className="intro_button"></button>
                </div>
            </div>
            <div className="intro_right_container">
                <div className="thumbnail transform_background_color">
                    <div className='offset_thumbnail transform_background_color'></div>
                </div>
            </div>
        </div>
    );
};

const About: React.FC = () => {
    return (
        <div className="about_container">
            <div className="about_left_container">
                <div className="about_image"></div>
            </div>
            <div className="about_right_container">
                <div className="about_right_header">About us</div>
                <div className="about_us_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    enim ad minim veniam, quis nostrud
                </div>
                <button className="about_button">Find out more</button>
            </div>
        </div>
    );
};

const Infographics: React.FC = () => {
    return (
        <div className="infographics">
            <div className="info_header">Why Join Codeprentice?</div>
            <div className="illustrations_container">
                <div className="illustration">
                   
                </div>
                <div className="illustration">
                    
                </div>
                <div className="illustration">
                    
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    return (
        <div className="project_section">
            <h1 className="project_header">Project Previews</h1>
            <div className="projects_container">
                <div className="project">
                   
                </div>
                <div className="project">
                    
                </div>
                <div className="project">
                    
                </div>
            </div>
            <div className="more_projects">
                More Projects
            </div>
        </div>
    );
};

export default Home;