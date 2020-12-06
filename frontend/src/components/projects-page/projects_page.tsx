import React from 'react';
import { Link } from 'react-router-dom';
import './project.css'

interface ProjectsProps {

}

//template data
const project_name = "";
const project_desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices vitae auctor eu augue ut lectus.";
//

const Projects: React.FC<ProjectsProps> = () => {
    return ( 
        <div className="projects_container">
            <div className="projects_header">Our Contributions</div>
            <div className="project_display_container">
                <Project name={"Web Dev"} desc={project_desc} />
                <Project name={"MP-SPDZ"} desc={project_desc}/>
                <Project name={"PYRO"} desc={project_desc} />
                <Project name={"SOCKS-5"} desc={project_desc}/>
                <Project name={"SNIFFPY"} desc={project_desc}/>
                <Project name={"Keras"} desc={project_desc}/>
                <Project name={"Change Journal"} desc={project_desc}/>
                <Project name={project_name} desc={project_desc}/>
                <Project name={project_name} desc={project_desc}/>       
            </div>
        </div>
    )
};

interface ProjectProps {
    name: String,
    desc: String 
}

const Project: React.FC<ProjectProps> = (props) => {
    return (
        <Link to={`/projects/${props.name}`} className="project transform_background_color">
            <div className="project_name">{props.name}</div>
        </Link>
            
    )

}

export default Projects;

