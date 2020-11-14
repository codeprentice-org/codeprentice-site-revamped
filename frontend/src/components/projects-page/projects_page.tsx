import React from 'react';
import './project.css'

interface ProjectsProps {

}

//template data
const project_name = "";
const project_desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices vitae auctor eu augue ut lectus.";
//

const Projects: React.FC<ProjectsProps> = () => {
       return( <div className="projects" style={{height: 'calc(100vh - 70px)', width: '100%'}}>
           <h1>Projects</h1>
           <br/>
                <div className="project_display">
               <Project name={project_name} desc={project_desc} />
                <Project name={project_name} desc={project_desc}/>
                <Project name={project_name} desc={project_desc} />
                <Project name={project_name} desc={project_desc}/>
                <Project name={project_name} desc={project_desc}/>
                <Project name={project_name} desc={project_desc}/>
                <Project name={project_name} desc={project_desc}/>
                <Project name={project_name} desc={project_desc}/>
                <Project name={project_name} desc={project_desc}/>       
               </div>
             </div>)
};

interface ProjectProps {
    name: String,
    desc: String
}

const Project: React.FC<ProjectProps> = (props) => {
    return (
        <div className="project">
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
        </div>
    )

}

export default Projects;

{/* <h1>Projects</h1>
                <div className="project_display">
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project/>       
               </div> */}