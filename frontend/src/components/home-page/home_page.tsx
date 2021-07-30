import React, { useState, useEffect } from 'react';
import Footer from './footer/footer'
import './intro.css'
import '../main/main.css'
import './about.css'
import './infograph.css'
import './project.css'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

interface Props {

}

// Main home components
const Home: React.FC<Props> = () => {
    return (  
            <div className = "home-page">
                <IntroComponent />
                <AboutComponent />
                <ShowcaseComponent />
                <Footer />
            </div>
    );
};

const IntroComponent: React.FC<Props> = () => {
    const { loginWithRedirect } = useAuth0();
    return (
         <div className="panel intro_container">
            <div className="intro_left_container">
                <div className='intro_left_header'>
                    Bridging the gap between open source
                    software and student developers.
                </div>
                <div className="intro_buttons">
                    <button className="intro_button">Join Us</button>
                    <button className="intro_button students" onClick={() => loginWithRedirect()}>Log in</button>
                </div>
            </div>
            <div className="intro_right_container">
                 <div className="intro_box">
                    
                </div>   
                </div>
        </div>
    )
}

const AboutComponent: React.FC<Props> = () => {
    return (
        <div className="panel about_container">
               
            <div className="about_wave">
            <div className="about_header_container">
            <div className="about_right_header">Breaking Barriers</div>
            </div>
        <div className="about_desc_container">
            <div className="about_image"></div>
            <div className="about_us_text">
                        We are a non-profit organization committed to mentoring aspiring software engineers
                        with regards to contributing to open-source projects and advancing open-source culture in universities.<br/><br/>
                        We successfully concluded our trial-run of Codeprentice at Columbia University and Waterloo University!
                        During the process we published Sniffpy, our first package as an organization (😌 🙌) contributed to HTTPie,
                        a command-line tool for making Http requests (one of our members is now top 3 contributor to the project!),
                        and worked on Opsdroid, an open-source chatbot framework.
            </div>
        </div>
        <div className="about_button_container">
                    <a target = "_blank" href = "https://medium.com/codeprentice-org/about"><button className="intro_button about_us_button">About Us</button></a>
                    <Link to="/projects"><button className="intro_button about_us_button">Our projects</button></Link>
        </div>
        </div>
        </div>
    )
}


const ShowcaseComponent: React.FC<Props> = () => {
    return (
        <div className="panel project_container">
            {/* <div className="project_preview_container">
            <div className="project_thumbnail first"></div>
            <div className="project_thumbnail"></div>
            <div className="project_thumbnail third"></div>
                </div> */}
            
            {/* <div className="project_preview_container">
                <Link to = "/projects"><button className="intro_button our_projects_button">Our projects</button></Link>
            </div> */}
            <hr className = "sectionHR"/>
            <div className="about_header_container2">
                <div className="about_right_header">Our Progress</div>
            </div>
            <div className="project_header_container">
                <div className="numbers_container">
                    <div className="numbers">57</div>
                    <div className="subtitle">Members</div>
                </div>
                <div className="numbers_container">
                    <a target = "_blank" href = "https://medium.com/codeprentice-org/projects-from-fall-2020-2310ec1b086a"><div className="numbers">7</div></a>
                    <div className="subtitle">Teams</div>
                </div>
                <div className="numbers_container">
                    <div className="numbers">5</div>
                    <div className="subtitle">Workshops</div>
                </div>
            </div>
            {/* <div className="project_header_container">
                <div className="about_right_header">Interested?</div>
            </div> */}
        </div>
    )
}


// sub components

export default Home;