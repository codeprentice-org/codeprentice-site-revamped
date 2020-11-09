import React, { useState, useEffect } from 'react';
import Navbar from './navbar'
import Footer from './footer'
import '../../styles/intro.css'
import '../../styles/main.css'
import '../../styles/about.css'
import '../../styles/infograph.css'
import '../../styles/project.css'
import { height } from '@material-ui/system';

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
            <Projects />
            <Footer />
        </div>
    );
};

// sub components
const Intro: React.FC = () => {
    return (
        <div className="intro-container">
            <div className="intro-left-container">
                <div className='intro-left-header'>
                    Bridging the gap between open source
                    software and student developers.
                </div>
                <div className="intro-buttons">
                    <button className="intro-button"></button>
                    <button className="intro-button"></button>
                </div>
            </div>
            <div className="right-container">
                <div className="thumbnail transform-background-color">
                    <div className='offset-thumbnail transform-background-color'></div>
                </div>
            </div>
        </div>
    );
};

const About: React.FC = () => {
    return (
        <div className="about">
            <div className="icon">
                <div className="thumbnail" style={{backgroundColor: 'gray'}}></div>
            </div>
            <div className="about_text">
                <h1>Short About Section</h1>
                <br />
                <div className="description">
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud
                        do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud
                        do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud
                    </p>
                </div>
                <button className="homebutton"></button>
            </div>
        </div>
    );
};

const Infographics: React.FC = () => {
    return (
        <div className="infographics">
            <h1 className="info_heading">Infographics with features</h1>
            <div className="illustrations-box">
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
            <h1 className="project_heading">Project Previews</h1>
            <div className="projects-box">
                <div className="project">
                   
                </div>
                <div className="project">
                    
                </div>
                <div className="project">
                    
                </div>
            </div>
            <div className="more_projects">
                <h3>More Projects</h3>
            </div>
        </div>
    );
};

export default Home;