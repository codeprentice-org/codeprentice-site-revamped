import React, { useState} from 'react';
import { generatePath } from 'react-router-dom';
import '../members-page/member/members_page.css';
import {Modal } from 'react-bootstrap';
import { Button} from 'reactstrap';

interface MembersProps{
    
}


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

    const toggle = () => setModal(!modal);
    
    const member_generate = (name:String,desc:String) => {
            return (
                <div className="member_body" onClick={()=>toggle()}>
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
        <div className="member_page_body">
              <Modal show={modal} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggle}>
            Close
          </Button>
          <Button variant="primary" onClick={toggle}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
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
                {userData.map(item=>member_generate(item.name,item.desc))}
            </div>
            <h2 className="founder_heading">Development Team</h2>
            <div className="founder_members">
                {userData.map(item=>member_generate(item.name,item.desc))}
            </div>
        </div>
    );
};

export default Members;
