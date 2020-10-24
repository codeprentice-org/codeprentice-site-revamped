import React, { useState, useEffect } from 'react';

interface Props {

}

// Main home components
const Home: React.FC<Props> = () => {
    return (
        <div>
            <h1>Home Page</h1>
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
        <div>
            <h1>Intro</h1>
        </div>
    );
};

const About: React.FC = () => {
    return (
        <div>
            <h1>About</h1>
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