import React,{useState} from 'react';
import './navbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Dropdown, Button } from "react-bootstrap";
import Avatar from 'react-avatar';

interface navbarProps {
    blurContent: React.Dispatch<React.SetStateAction<boolean>>,
    blur: Boolean
}

const AltNav: React.FC<navbarProps> = (props) => {
    const [navOpen, toggleNav] = useState(true);
    const { isAuthenticated } = useAuth0();

    const toggle = () => {
        toggleNav(!navOpen)
        props.blurContent(!props.blur)
    }
    return(
        <div className="custom-navbar">
            <Link to="" className="logo-container">
                <div className="codeprentice-logo"></div>
            </Link>
            <div className={navOpen? "options-container":"sidebar"}>
                <Link to='/about'>
                    <div className='nav-item transform-color'>
                        About
                        <div className='nav-item-underline transform-width'></div>
                    </div>
                </Link>
                <Link to='/projects'>
                    <div className='nav-item transform-color'>
                        Projects    
                        <div className='nav-item-underline transform-width'></div>
                    </div>
                </Link>
                {/* Currently disabled - under development */}
                <Link to='/members' onClick={ (event) => event.preventDefault() }>
                    <div className='nav-item transform-color'>
                        Members
                        <div className='nav-item-underline transform-width'></div>
                    </div>
                </Link>
                {/* <Link to="/login"> */}
                {/* Login with Github Works thus removing the need for a link to a login page */}
                {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
                {/* </Link> */}
            </div>
            <div className="hamburger" onClick={() => toggle()}>
                { navOpen? <MenuIcon/>:<CloseIcon/>}
            </div>
        </div>
        )
}

interface LoginProps {

}

const LoginButton: React.FC<LoginProps> = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        // <button className="login-button" >
        //          <div className="github-logo"></div>
        //          <div className="login-button-text">Log In</div>
        // </button>
        <Button variant="primary" onClick={() => loginWithRedirect()}>Log In</Button>
    )
}

interface LogoutProps {

}

const LogoutButton: React.FC<LogoutProps> = () => {
    const { user, logout } = useAuth0();
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    <Avatar size="40" name={user?.name} src={user?.picture} round={ true }/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}



export default AltNav;