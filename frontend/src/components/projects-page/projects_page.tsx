import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './project.css'
import { Project } from '../../entities/project'

interface ProjectsProps {

}

const Projects: React.FC<ProjectsProps> = () => {
    const [projects, changeProjects] = useState([] as Project[]);

    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND + "/project", {
            headers: {
                "access_token" : process.env.REACT_APP_ACCESS_TOKEN as string,
            }
        })
            .then(data => data.json())
            .then((projects: Project[]) => {
                changeProjects(projects);
            })
            .catch(err => console.log(err))
    }, [])

    const projects_generate = (project: Project) => {
        return (<ProjectTile name={ project.name } desc={ project.description } />)
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
    name: String,
    desc: String 
}

const ProjectTile: React.FC<ProjectProps> = (props) => {
    return (
        <Link to={`/projects/${props.name}`} className="project transform_background_color">
            <div className="project_name">{props.name}</div>
        </Link>
            
    )

}

export default Projects;

