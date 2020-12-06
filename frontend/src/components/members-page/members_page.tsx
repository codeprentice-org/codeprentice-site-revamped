import React from 'react';
import { Link } from 'react-router-dom';

interface MembersProps {

}

const Member_name = "";
const Member_desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices vitae auctor eu augue ut lectus.";

const Members: React.FC<MembersProps> = () => {
    return (
         <div className="projects_container">
            <div className="projects_header">The Codeprentice Team</div>
            <div className="project_display_container">
                <Project name={"M1"} desc={Member_desc} />
                <Project name={"M2"} desc={Member_desc}/>
                <Project name={"M3"} desc={Member_desc} />
                <Project name={"M4"} desc={Member_desc}/>
                <Project name={"M5"} desc={Member_desc}/>
                <Project name={"M6"} desc={Member_desc}/>
                <Project name={"M7"} desc={Member_desc}/>
                <Project name={Member_name} desc={Member_desc}/>
                <Project name={Member_name} desc={Member_desc}/>       
            </div>
        </div>
    );
};

interface MemberProps {
    name: String,
    desc: String 
}

const Project: React.FC<MemberProps> = (props) => {
    return (
        <Link to={``} className="project transform_background_color">
            <div className="project_name">{props.name}</div>
        </Link>
            
    )

}

export default Members;
