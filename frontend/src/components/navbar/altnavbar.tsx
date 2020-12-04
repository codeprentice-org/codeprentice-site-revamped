import React,{useState} from 'react';
import './navbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-router-dom";
interface navbarProps {
    blurContent: React.Dispatch<React.SetStateAction<boolean>>,
    blur: Boolean
}

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
                <Link to="/login">
                <div className="login-button">
                    <div className="github-logo"></div>
                    <div className="login-button-text">Login with Github</div>
                    </div>
                    </Link>
            </div>
            <div className="hamburger" onClick={() => toggle()}>
                { navOpen? <MenuIcon/>:<CloseIcon/>}
        </div>
        </div>
        )
}



export default AltNav;