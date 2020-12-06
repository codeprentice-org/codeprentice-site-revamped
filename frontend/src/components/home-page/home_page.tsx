import React, { useState, useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import styled from 'styled-components';
import Footer from './footer/footer'
import './intro.css'
import '../main/main.css'
import './about.css'
import './infograph.css'
import './project.css'
import { InputRounded } from '@material-ui/icons';

interface Props {

}

const HP = styled.div`
 overflow: hidden;

  .panel {
    height: 100vh;
    width: 100vw;
    text-align: center;
  }
`;

// Main home components
const Home: React.FC<Props> = () => {
    return (
        <HP>  
           
<Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
      <Scene pin>
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
                <div className="thumbnail transform_background_color">
                    <div className='offset_thumbnail transform_background_color'></div>
                </div>
            </div>
            </div>
      </Scene>
      <Scene pin>
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
            </div>
            <button className="about_button">Learn more</button>
            </div>
            </div>
      </Scene>
      <Scene pin>
         <div className="panel infographics">
            <div className="info_header">Why Join Codeprentice?</div>
            <div className="illustrations_container">
                <div className="illustration left-illustration">
                   
                </div>
                <div className="illustration">
                    
                </div>
                <div className="illustration right-illustration">
                    
                </div>
            </div>
                    </div>
                </Scene>
            </Controller>
            </HP>
    );
};


// sub components

export default Home;