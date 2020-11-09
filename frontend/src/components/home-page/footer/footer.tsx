import React from 'react';
import './footer.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className="footer_section">
                <ul className="social_list">
                    <li><GitHubIcon /></li>
                    <li><LinkedInIcon /></li>
                    <li><FacebookIcon /></li>
                    <li><InstagramIcon /></li>
                </ul>
        </div>
    );
};

export default Footer;