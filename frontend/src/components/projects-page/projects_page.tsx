import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './project.css'
import { Project } from '../../entities/project';
import shortid from "shortid";

interface ProjectsProps {

}

const Projects: React.FC<ProjectsProps> = () => {
    const [projects, changeProjects] = useState([] as Project[]);

    useEffect(() => {
        const projects = JSON.parse(sessionStorage.getItem("projects") as string);
        if (projects) {
            changeProjects(projects);
            return;
        }
        fetch(process.env.REACT_APP_BACKEND + "/project", {
            headers: {
                "access_token" : process.env.REACT_APP_ACCESS_TOKEN as string,
            }
        })
            .then(data => data.json())
            .then((projects: Project[]) => {
                sessionStorage.setItem("projects", JSON.stringify(projects));
                changeProjects(projects);
            })
            .catch(err => console.log(err))
    }, [])

    const projects_generate = (project: Project) => {
        return (<ProjectTile key={ shortid.generate() } name={ project.name } desc={ project.description } />)
    }

    return ( 
        <div className="projects_container">
            <div className="projects_header">Our Contributions</div>
            <div className="project_display_container">
                {projects.map((project: Project) => projects_generate(project))}
            </div>
        </div>
    )
};

interface ProjectProps {
    key: String,
    name: String,
    desc: String 
}

const ProjectTile: React.FC<ProjectProps> = (props) => {
    return (
        <Link key = {shortid.generate()} to={`/projects/${props.name}`} className="project transform_background_color">
            <div className="project_name">{props.name}</div>
        </Link>
            
    )

}

export default Projects;

