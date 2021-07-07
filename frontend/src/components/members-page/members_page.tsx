import React, { useState } from 'react';
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

interface MembersProps{
    
}

const founderData = [
    {
        name: "Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur "
    },
     {
        name: "Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur "
    },
      {
        name: "Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur "
    },
]
//Sample  user data to be retrieved from github
const userData = [
    {
        name: "Member 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur "
    },
     {
        name: "Member 2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur "
    },
      {
        name: "Member 3",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur "
    },
       {
        name: "Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur "
    },
        {
        name: "Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur "
    },
         {
        name: "Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur "
    },
          {
        name: "Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur "
    },
           {
        name: "Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur "
    },
            {
        name: "Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur "
    },
            {
        name: "Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur "
    },
            {
        name: "Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur "
    },
            {
        name: "Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur "
    },
            {
        name: "Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor similique consectetur, delectus quis veniam autem ipsam, iure quo illum corrupti possimus distinctio consequatur "
    },
]


const Members: React.FC<MembersProps> = () => {
    
    const [modal, setModal] = useState(false);
    const [showModal, changeShowModal] = useState(false);
    const [member, changeMember] = useState({name:"", desc:""});
  
  const handleModal = (mem:any) => {
      changeShowModal(!modal);
      changeMember(mem);
  }

    const toggle = (mem: object) => handleModal(mem);
    
    const member_generate = (name:String, desc:String) => {
            return (
                <div className="member_body" onClick={()=>toggle({name: name, desc: desc})}>
                    <div className="upper_part">

                    </div>
                    <div className="photo">
                        <p className="member_photo">Photo</p>
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
                {founderData.map(item=>member_generate(item.name,item.desc))}
            </div>
            <h2 className="founder_heading">Organization Team</h2>
            <div className="founder_members">
                {userData.map(item=>member_generate(item.name,item.desc))}
            </div>
            <h2 className="founder_heading">Development Team</h2>
            <div className="founder_members">
                {userData.map(item=>member_generate(item.name,item.desc))}
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
                    className="custom_modal"
        >
        <CloseIcon onClick={() => changeShowModal(false)} style={{ cursor: "pointer" }} />
        <br />
        <div className="modal_intro">
            <div className="modal_body">
                <div className="modal_background">
                <div className="modal_photo">
                        <p className="member_photo">Photo</p>
                </div>
                <p className='modal_name'>{member.name}</p>
                <p className="modal_desc">{member.desc}</p>
                </div>
            </div>
 
            <div className="modal_body2">
                <p className='modal_heading'>BIO</p>
                <p className="modal_desc2">{member.desc}</p>
                <p className='modal_heading'>PROJECTS</p>
                <p className="modal_desc2">LINKS</p>
                <p className="modal_heading">SOCIAL MEDIA</p>
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
