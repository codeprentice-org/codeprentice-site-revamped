import React,{useState} from 'react';
import './navbar.css';
import { Link } from "react-router-dom";
interface navbarProps {

}

const AltNav: React.FC<navbarProps> = () => {
    const [navOpen,toggleNav] = useState(false);
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
                <div className="login-button">
                    <div className="github-logo"></div>
                    <div className="login-button-text">Login with Github</div>
                </div>
            </div>
            <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        </div>
        )
}



export default AltNav;