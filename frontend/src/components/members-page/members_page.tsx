import React, { useState, useEffect } from 'react';
//import SingleMember from './member/single_member';
import { generatePath } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import ReactModal from 'react-modal';
import '../members-page/member/members_page.css';
import { Button } from 'reactstrap';
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import zIndex from '@material-ui/core/styles/zIndex';
import { ToggleButton } from 'react-bootstrap';
require('dotenv').config()

interface MembersProps{
    
}
 
//Sample  user data to be retrieved from github
const userData = [
    {
        photo: "https://picsum.photos/200/300",
        name: "Member 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur ",
        bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ip",
        links: "link",
        
    },
    {
        photo: "https://picsum.photos/200/300",
        name: "Member 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur ",
        bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur ",
        links: "link",
        
    },
    {
        photo: "https://picsum.photos/200/300",
        name: "Member 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur ",
        bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur ",
        links: "link",
        
    },
    {
        photo: "https://picsum.photos/200/300",
        name: "Member 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur ",
        bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur ",
        links: "link",
        
    },
    {
        photo: "https://picsum.photos/200/300",
        name: "Member 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur ",
        bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur ",
        links: "link",
        
    },
    {
        photo: "https://picsum.photos/200/300",
        name: "Member 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur ",
        bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur ",
        links: "link",
        
    },
    {
        photo: "https://picsum.photos/200/300",
        name: "Member 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur ",
        bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur ",
        links: "link",
        
    }
]

const Members: React.FC<MembersProps> = () => {
    
    const [modal, setModal] = useState(false);
    const [showModal, changeShowModal] = useState(false);
    const [member, changeMember] = useState({name:"", desc:"", photo:"", links:"", bio:""});

    const myHeaders = new Headers();
    myHeaders.append('access-token', process.env.ACCESS_TOKEN as string);

    useEffect(() => {
        fetch(process.env.backend + "/users", {
            headers: myHeaders
        })
            .then(response => console.log(response.json()))
            .then(data => console.log(data));
    });
  
  const handleModal = (mem:any) => {
      changeShowModal(!modal);
      changeMember(mem);
  }

  const changeShowModal1 = () => {
      changeShowModal(false)
  }


    const toggle = (mem: object) => handleModal(mem);
    
    const member_generate = (name:String, desc:String, photo:String, links:String, bio: String) => {
            return (
                <div className="member_body" onClick={()=>toggle({name: name, desc: desc, photo: photo, links:links, bio: bio})}>
                    <div className="upper_part">

                    </div>
                    <div className="photo">
                        <p className="member_photo">photo</p>                        
                    </div>
                    <h2 className="name">{name}</h2>
                    <div className="about">
                        <p>{desc}
                        </p>
                    </div>
                </div>
        )      
    }
    return (
        <>
        
      <div>
          <Modal showModal={showModal} changeShowModal={changeShowModal} member={member}/>
      </div>
        <div className="member_page_body">
            <h1 className="main_heading">Members</h1>
            <h2 className="founder_heading">Founders/Executive Board</h2>
            <div className="founder_members">
                <div className="member_body">
                    <div className="upper_part">

                    </div>
                    <div className="photo">
                        <p className="member_photo">Photo</p>
                    </div>
                    <h2 className="name">NAME</h2>
                    <div className="about">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur 
                        </p>
                    </div>
                </div>
                <div className="member_body">
                    <div className="upper_part">

                    </div>
                    <div className="photo">
                        <p className="member_photo">Photo</p>
                    </div>
                    <h2 className="name">NAME</h2>
                    <div className="about">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur 
                        </p>
                    </div>

                </div>
                <div className="member_body">
                    <div className="upper_part">

                    </div>
                    <div className="photo">
                        <p className="member_photo">Photo</p>
                    </div>
                    <h2 className="name">NAME</h2>
                    <div className="about">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur 
                        </p>
                    </div>

                </div>
            </div>
            <h2 className="founder_heading">Organization Team</h2>
            <div className="founder_members">
                {userData.map(item=>member_generate(item.name,item.desc, item.photo, item.links, item.bio))}
            </div>
            <h2 className="founder_heading">Development Team</h2>
            <div className="founder_members">
                {userData.map(item=>member_generate(item.name,item.desc, item.photo, item.links, item.bio))}
            </div>
            </div>
            </>
    );
};

interface ModalProps{
    showModal: boolean;
    changeShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    member: {
        name: string;
        desc: string;
        photo: string;
        links: string;
        bio: string;
    };
}
const styles = {
    icon_style: {
        width: 50,
        height: 50,
        margin: "10px",
        cursor:"pointer",
    }
};

const Modal: React.FC<ModalProps> = ({showModal, changeShowModal, member}) => { 
    return (<ReactModal 
           isOpen={showModal}
                    contentLabel="Minimal Modal Example"
                    className="modal"
                    onRequestClose={() => changeShowModal(false)} 
        >
            
        <CloseIcon onClick={() => changeShowModal(false)} style={{ cursor: "pointer" }} />
        <br />
        
        <div className="modal_body">
            <div className = "left_side_modal">
                <div className="modal_photo_container">
                    <img className="modal_photo" src={member.photo} alt="photo" />
                </div>
                <div className="modal_person">
                   <p className="modal_name">{member.name}</p>
                   <p className="modal_desc">{member.desc}</p>
                </div>
                
                
            </div>
            <div className="right_side_modal">
                <p className="modal_titles">BIO</p>
                <p className="modal_desc">{member.bio}</p>
                <p className="modal_titles">PROJECTS</p>
                <p className="modal_project_links">{member.links}</p>
                <p className="modal_titles">SOCIAL MEDIA</p>
                <div className="modal_socials">
                    <GitHubIcon style={styles.icon_style}/>
                    <LinkedInIcon style={styles.icon_style}/>
                    <FacebookIcon style={styles.icon_style}/>
                    <InstagramIcon style={styles.icon_style}/>
                </div>
            </div>
            
        </div>
        
        </ReactModal>);
        
}

export default Members;
