import React, { useState , useEffect, lazy } from 'react';
import CloseIcon from '@material-ui/icons/Close';
//import ReactModal from 'react-modal';
import '../members-page/member/members_page.css';
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import { User } from '../../entities/user';
import { ROLE } from '../../entities/role';
import shortid from "shortid";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
 
interface MembersProps{
    
}


const Members: React.FC<MembersProps> = () => {
    
    const [modal, setModal] = useState(false);
    const [showModal, changeShowModal] = useState<boolean>(false);
    const [member, changeMember] = useState<User>();
    
    const [founders, changeFounders] = useState<User[]>([]);
    const [orgTeam, changeOrgTeam] = useState<User[]>([]);
    const [devTeam, changeDevTeam] = useState<User[]>([]);

    useEffect(() => {
        var founderData: User[] = [];
        var orgData: User[] = [];
        var devData: User[] = [];
        const founders = JSON.parse(sessionStorage.getItem("founderData") as string);
        const org = JSON.parse(sessionStorage.getItem("orgData") as string);
        const devs = JSON.parse(sessionStorage.getItem("devData") as string);
        if (founders && org && devs) {
            changeFounders(founders);
            changeOrgTeam(org);
            changeDevTeam(devs);
            return;
        }
        fetch(process.env.REACT_APP_BACKEND + "/user", {
            headers: {
                "access_token" : process.env.REACT_APP_ACCESS_TOKEN as string,
            }
        })
            .then(data => data.json())
            .then(users => {
                users.forEach((user: User) => {
                    if (user.ROLE === ROLE.ADMIN) {
                        founderData.push(user);
                    } else if (user.ROLE === ROLE.ORG) {
                        orgData.push(user);
                    } else {
                        devData.push(user);
                    }
                })
                sessionStorage.setItem("founderData", JSON.stringify(founderData));
                sessionStorage.setItem("orgData", JSON.stringify(orgData));
                sessionStorage.setItem("devData", JSON.stringify(devData));
                changeFounders(founderData);
                changeOrgTeam(orgData);
                changeDevTeam(devData);
            })
            .catch(err => console.log(err))
    }, [])

  
  const handleModal = (mem: User) => {
      changeShowModal(!modal);
      changeMember(mem);
  }

    const toggle = (mem: User) => handleModal(mem);
    
    const member_generate = (user: User) => {
        return (
            <div className="member_body" key = {shortid.generate()} onClick={()=>toggle(user)}>
                    <div className="upper_part">

                    </div>
                    <div className="photo">
                        <p className="member_photo">Photo</p>
                    </div>
                    <p className="name">{user?.name}</p>
                    <div className="about_member_bio">
                        <p>{user?.bio}
                        </p>
                    </div>

                </div>
        )      
    }
    return (
        <>
      <div>
            <CustomModal showModal={showModal} changeShowModal={changeShowModal} member={member as User}/>
      </div>
        <div className="member_page_body">
            <h1 className="main_heading">Members</h1>
            <h2 className="founder_heading">Founders/Executive Board</h2>
            <div className="founder_members">
                {founders.map(item=>member_generate(item))}
                </div>
            <h2 className="founder_heading">Organization Team</h2>
            <div className="founder_members">
                {orgTeam.map(item=>member_generate(item))}
            </div>
            <h2 className="founder_heading">Development Team</h2>
            <div className="founder_members">
                {devTeam.map(item=>member_generate(item))}
                    </div>    
            </div>
            </>
    );
};

interface ModalProps{
    showModal: boolean;
    changeShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    member: User;
}
const styles = {
    icon_style: {
        width: 50,
        height: 50,
        margin: "10px",
        cursor:"pointer",
    }
};

const CustomModal: React.FC<ModalProps> = ({showModal, changeShowModal, member}) => { 
    return (<Modal open = {showModal}
        onClose={() => changeShowModal(false)}
        center
        >
        <br />
        <div className="modal_intro">
            <div className="modal_body">
                <div className="modal_background">
                <div className="modal_photo">
                        <p className="member_photo">Photo</p>
                </div>
                <p className='modal_name'>{member?.name}</p>
                <p className="modal_desc">{member?.bio}</p>
                </div>
            </div>
 
            <div className="modal_body2">
                <p className='modal_heading'>Bio</p>
                <p className="modal_desc2">{member?.bio}</p>
                <p className='modal_heading'>Projects</p>
                <p className="modal_desc2">Links</p>
                <p className="modal_heading">Social Media</p>
                <div className="modal_socials">
                    <GitHubIcon className = "icons" />
                    <LinkedInIcon className = "icons"/>
                    <FacebookIcon className = "icons"/>
                    <InstagramIcon className = "icons"/>
                </div>
            </div>
        </div>
        
        </Modal>);
}

export default Members;
