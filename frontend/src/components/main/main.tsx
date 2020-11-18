import React from 'react';
import './main.css';
import Home from "../home-page/home_page";
import Projects from "../projects-page/projects_page";
import Members from "../members-page/members_page";
import Navbar from '../navbar/navbar';
import ProjectShowcase from '../project-showcase-page/projects_showcase_page'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

interface MainProps {

}

const Main: React.FC<MainProps> = () => {
    return (
        <Router>
            <div className="body">
                <Navbar />
                <Switch>
                    <Route path="/about" exact component={Home}></Route>
                    <Route path="/projects" exact component={Projects}></Route>
                     <Route path="/projects/:name" exact component={ProjectShowcase}></Route>
                    <Route path="/members" exact component={Members}></Route>
                    <Route path="*" component={Home}></Route>
                </Switch>
            </div>  
        </Router>
    );
};

export default Main;