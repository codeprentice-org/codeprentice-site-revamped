import React from 'react';
import Home from "../home-page/home_page";
import Projects from "../projects-page/projects_page";
import Members from "../members-page/members_page";
import Navbar from '../navbar/navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

interface MainProps {

}

const Main: React.FC<MainProps> = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/about" exact component={Home}></Route>
                    <Route path="/projects" exact component={Projects}></Route>
                    <Route path="/members" exact component={Members}></Route>
                    <Route path="*" component={Home}></Route>
                </Switch>
            </div>  
        </Router>
    );
};

export default Main;