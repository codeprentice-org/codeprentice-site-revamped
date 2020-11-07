import React, { useState, useEffect } from 'react';
import Navbar from './navbar'
import '../../styles/intro.css'
import '../../styles/main.css'
import '../../styles/about.css'

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
        <div>
            <h1>Infographics</h1>
        </div>
    );
};

const Projects: React.FC = () => {
    return (
        <div>
            <h1>Projects</h1>
        </div>
    );
};

export default Home;