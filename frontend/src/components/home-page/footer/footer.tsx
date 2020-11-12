import React from 'react';
import './footer.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

interface FooterProps {

}

const styles = {
    icon_style: {
        width: 30,
        height: 30
    }
};
const Footer: React.FC<FooterProps> = () => {
    return (
        <div className="footer_container">
            <ul className="social_list">
                <li><GitHubIcon style={styles.icon_style}/></li>
                <li><LinkedInIcon style={styles.icon_style}/></li>
                <li><FacebookIcon style={styles.icon_style}/></li>
                <li><InstagramIcon style={styles.icon_style}/></li>
            </ul>
        </div>
    );
};

export default Footer;