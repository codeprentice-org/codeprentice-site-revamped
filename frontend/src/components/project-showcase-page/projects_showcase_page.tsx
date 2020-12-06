import React from 'react';
import './project_showcase.css'
import TimeLine from '../../assets/images/time.png';
import Coding from '../../assets/images/coding.jpg';
import Coding2 from '../../assets/images/code.jpg';


interface ProjectShowcaseProps {
    match: any;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({match}) => {
    return (
        <div style={{height: 'calc(100vh - 70px)', width: '100%'}}>
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
                    <div className="pic illustration left-illustration ">
                    </div>
                    <div className="about_section">
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
                    <div className="date"><img src={TimeLine}/></div>
                </div>
            </div>
        </div>
    ); 
};

export default ProjectShowcase;