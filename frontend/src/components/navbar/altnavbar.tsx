import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './navbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-router-dom";
import LoginGithub from 'react-login-github';
interface navbarProps {
    blurContent: React.Dispatch<React.SetStateAction<boolean>>,
    blur: Boolean
}

const onSuccess = (response: any) => console.log(response);
const onFailure = (response: any) => console.error(response);

const AltNav: React.FC<navbarProps> = (props) => {
    const [navOpen, toggleNav] = useState(true);
    const toggle = () => {
        toggleNav(!navOpen)
        props.blurContent(!props.blur)
    }
    return(
        <div className="navbar">
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
                <Link to='/members'>
                    <div className='nav-item transform-color'>
                        Members
                        <div className='nav-item-underline transform-width'></div>
                    </div>
                </Link>
                {/* <Link to="/login"> */}
                    {/* Login with Github Works thus removing the need for a link to a login page */}
                <LoginGithub className="login-button" clientId="ca409dfa0b78ab4efa25"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    buttonText="Login"/>
                {/* </Link> */}
            </div>
            <div className="hamburger" onClick={() => toggle()}>
                { navOpen? <MenuIcon/>:<CloseIcon/>}
        </div>
        </div>
        )
}



export default AltNav;