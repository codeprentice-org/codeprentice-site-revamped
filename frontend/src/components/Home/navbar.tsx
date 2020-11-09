import React from 'react';
import '../../styles/navbar.css'
interface navbarProps {

}

const Navbar: React.FC<navbarProps> = () => {
    return (
        <div className="navbar">
            <div className="logo-container">
                <div className="codeprentice-logo"></div>
            </div>
            <div className="options-container">
                <div className='nav-item transform-color'>
                    About
                    <div className='nav-item-underline transform-width'></div>
                </div>
                <div className='nav-item transform-color'>
                    Projects    
                    <div className='nav-item-underline transform-width'></div>
                </div>
                <div className='nav-item transform-color'>
                    Members
                    <div className='nav-item-underline transform-width'></div>
                </div>
                <div className="login-button">
                    <div className="github-logo"></div>
                    <div className="login-button-text">Login with Github</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;