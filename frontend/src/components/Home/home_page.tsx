import React, { useState, useEffect } from 'react';
import Navbar from './navbar'
import Footer from './footer'
import '../../styles/intro.css'
import '../../styles/main.css'
import '../../styles/about.css'
import '../../styles/infograph.css'
import '../../styles/project.css'

interface Props {

}

// Main home components
const Home: React.FC<Props> = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <About />
            <Infographics />
            <Projects />
            <Footer />
        </div>
    );
};

// sub components
const Intro: React.FC = () => {
    return (
        <div className="intro">
            <div className="tag">
                <div> <h3>Bridging the gap between open source
                    software and student developers</h3></div>
                <div className="tag_buttons">
                    <button className="introbutton"></button>
                    <button className="introbutton"></button>
                </div>
            </div>
            <div className="picture">
                <div className="thumbnail"></div>
            </div>
        </div>
    );
};

const About: React.FC = () => {
    return (
        <div className="about">
            <div className="icon">
                <div className="thumbnail"></div>
            </div>
            <div className="about_text">
                <h1>Short About Section</h1>
                <br />
                <div className="description"><p>Lorem ipsum dolor sit amet,
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
                </p></div>
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