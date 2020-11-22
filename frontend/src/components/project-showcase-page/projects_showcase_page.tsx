import React from 'react';
import logo from '../../assets/images/logo.png';
import './project_showcase.css'


interface ProjectShowcaseProps {
   
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = () => {
    return (
        <div style={{height: 'calc(100vh - 70px)', width: '100%'}}>
            <div className="showcase">
                <div className="showcase_intro">
                    <h1>Project Name</h1>
                    <div className="icon">
                        { ""}
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </div>
                <br/>
                <div className="showcase_image"><img src={logo}/></div>
                <br/>
                <div className="showcase_about">
                    <div className="pic">
                        <div className="project_img"></div>
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
                        <br/>
                        <div className="showcase_image"></div>
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
                    <div className="date"></div>
                </div>
            </div>
        </div>
    ); 
};

export default ProjectShowcase;