import React from 'react';
import './project_showcase.css'
import TimeLine from '../../assets/images/time.png';
import Coding from '../../assets/images/coding.jpg';
import Coding2 from '../../assets/images/code.jpg';
import { Chrono } from 'react-chrono';
import Footer from '../home-page/footer/footer';


interface ProjectShowcaseProps {
    match: any;
}

const items = [{
      title: "October 2020",
      cardTitle: "Started The Project",
      cardSubtitle:"Lorem ipsum dolor sit ame",
      cardDetailedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
}, {
      title: "November 2020",
      cardTitle: "Deployed first feauture",
      cardSubtitle:"Lorem ipsum dolor sit amet",
      cardDetailedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
}, {
      title: "November 2020",
      cardTitle: "Deployed Second feauture",
      cardSubtitle:"Lorem ipsum dolor sit amet",
      cardDetailedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
}, {
      title: "November 2020",
      cardTitle: "Deployed Third feauture",
      cardSubtitle:"Lorem ipsum dolor sit amet",
      cardDetailedText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
}];

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({match}) => {
    return (
        <>
            <div className="showcase">
                <div className="showcase_intro">
                    <p>{match.params.name}</p>
                    <div className="icon">
                        { ""}
                        <div className="circle"><img src={Coding}/></div>
                        <div className="circle"><img src={Coding}/></div>
                        <div className="circle"><img src={Coding}/></div>
                    </div>
                </div>
                <br/>
                <div className="showcase_image">
                </div>
                <br/>
                <div className="showcase_about">
                    
                    <div className="about">
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliqui
                         x ea commodo consequat. Duis aute irure dolor in reprehe
                         nderit in voluptate velit esse cillum dolore eu fugiat nu
                         la pariatur. Excepteur sint occaecat cupidatat non proiden
                         t, sunt in culpa qui officia deserunt mollit anim id est l
                         aborum.
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliqui
                         x ea commodo consequat. Duis aute irure dolor in reprehe
                         nderit in voluptate velit esse cillum dolore eu fugiat nu
                         la pariatur. Excepteur sint occaecat cupidatat non proiden
                         t, sunt in culpa qui officia deserunt mollit anim id est l
                         aborum.
                        <br/><br/>
                        <div className="showcase_image illustration"><img src={Coding2}/></div>
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliqui
                         x ea commodo consequat. Duis aute irure dolor in reprehe
                         nderit in voluptate velit esse cillum dolore eu fugiat nu
                         la pariatur. Excepteur sint occaecat cupidatat non proiden
                         t, sunt in culpa qui officia deserunt mollit anim id est l
                         aborum.
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliqui
                         x ea commodo consequat. Duis aute irure dolor in reprehe
                         nderit in voluptate velit esse cillum dolore eu fugiat nu
                         la pariatur. Excepteur sint occaecat cupidatat non proiden
                         t, sunt in culpa qui officia deserunt mollit anim id est l
                         aborum.
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliqui
                         x ea commodo consequat. Duis aute irure dolor in reprehe
                         nderit in voluptate velit esse cillum dolore eu fugiat nu
                         la pariatur. Excepteur sint occaecat cupidatat non proiden
                         t, sunt in culpa qui officia deserunt mollit anim id est l
                         aborum.
                    </div>
                    <div className="date" style={{ width: "500px", height: "950px" }}>
                        <Chrono items={items} mode="VERTICAL_ALTERNATING"/>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    ); 
};

export default ProjectShowcase;