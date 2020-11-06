import React from 'react';
import '../../styles/navbar.css'
import logo from '../../logo.png'
import github_logo from '../../github_logo.png';
interface navbarProps {

}

const Navbar: React.FC<navbarProps> = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} className="pic" />
            </div>
            <div className="nav">
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Member</li>
                    <button className="loginbutton">Log In
                    <img src={github_logo} className="github_logo" />
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;