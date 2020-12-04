import React,{useState} from 'react';
import DarkGithubLogo from '../../assets/images/dark.png';
import './login.css';
import { Link } from 'react-router-dom';

interface LoginProps {
    
}

const Login: React.FC<LoginProps> = () => {
    const [usr, changeUsr] = useState("");
    const [pwd, changePwd] = useState("");
    const loginUser = () => {
        alert(`Welcome ${usr}`)
    }
    return (
        <div className="login_page">
            <div className="login_box">
                <img className="dark_logo" src={DarkGithubLogo} />
                <div className="username">
                    <input className="cred_input" placeholder="Username" value={usr} onChange={(txt)=>changeUsr(txt.target.value)}/><br/>
                    <Link className="forgot_cred" to="">Forgot Username?</Link>
                </div>
                <div className="password">
                    <input className="cred_input" placeholder="Password" value={pwd} onChange={(txt)=>changePwd(txt.target.value)}/><br/>
                    <Link className="forgot_cred" to="">Forgot Password?</Link>
                </div>
                <button className="login_button" onClick={()=>loginUser()}>Login</button><br/>
                <Link className="forgot_cred" to="">Create Github Account</Link>
            </div>
        </div>
    );
};

export default Login;