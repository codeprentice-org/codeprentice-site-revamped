import React,{useState} from 'react';
import './main.css';
import '../navbar/navbar.css';
import Home from "../home-page/home_page";
import Projects from "../projects-page/projects_page";
import Members from "../members-page/members_page";
import Navbar from '../navbar/navbar';
import AltNav from '../navbar/altnavbar';
import Login from '../login/login';
import ProjectShowcase from '../project-showcase-page/projects_showcase_page'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

interface MainProps {

}

const Main: React.FC<MainProps> = () => {
    const [blur,undoBlur]=useState(true)
    return (
        <Router>
            <div className="body">
                <AltNav blurContent={undoBlur} blur={ blur}/>
                <div className={blur?"blur_content":"content"}>
                 <Switch>
                    <Route path="/about" exact component={Home}></Route>
                    <Route path="/projects" exact component={Projects}></Route>
                    <Route path="/projects/:name" exact component={ProjectShowcase}></Route>
                    <Route path="/members" exact component={Members}></Route>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="*" component={Home}></Route>
                 </Switch>
                </div>
            </div>  
        </Router>
    );
};

export default Main;