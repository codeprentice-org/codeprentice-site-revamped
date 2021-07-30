import React, { useState, useEffect } from 'react';
import './project_showcase.css'
import Coding from '../../assets/images/coding.jpg';
import Coding2 from '../../assets/images/code.jpg';
import { Chrono } from 'react-chrono';
import Footer from '../home-page/footer/footer';
import { Project } from '../../entities/project';
import { TimelineItem } from "react-chrono"


interface ProjectShowcaseProps {
    match: any;
}
const time : TimelineItem[] = [{"title":"October 2020","cardTitle":"Started The Project","cardSubtitle":"Lorem ipsum dolor sit ame","cardDetailedText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},{"title":"November 2020","cardTitle":"Deployed first feauture","cardSubtitle":"Lorem ipsum dolor sit amet","cardDetailedText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},{"title":"November 2020","cardTitle":"Deployed Second feauture","cardSubtitle":"Lorem ipsum dolor sit amet","cardDetailedText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"},{"title":"November 2020","cardTitle":"Deployed Third feauture","cardSubtitle":"Lorem ipsum dolor sit amet","cardDetailedText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"}]

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ match }) => {
    const [project, changeProject] = useState<Project>();

    useEffect(() => {

        fetch(process.env.REACT_APP_BACKEND + `/project/${match.params.name}`, {
            headers: {
                "access_token" : process.env.REACT_APP_ACCESS_TOKEN as string,
            }
        })
            .then(data => data.json())
            .then((proj: Project[]) => {
                changeProject(proj[0]);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className="showcase">
                <div className="showcase_intro">
                    <p>{match.params.name}</p>
                    <div className="icon">
                        { "" }
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
                        {project?.description.split("\n").map(para => {
                            return <p>{ para }<br/></p>
                        })}
                        <br/><br/>
                        <div className="showcase_image hover_image"><img src={Coding2}/></div>
                    </div>
                    {/* Chrono component under development */}
                    {/* <div className="date" style={{ width: "500px", height: "950px" }}>
                        <Chrono items={ project?.timeline as TimelineItem[] } mode="VERTICAL_ALTERNATING"/>
                    </div> */}
                </div>
            </div>
        <Footer/>
        </>
    ); 
};

export default ProjectShowcase;