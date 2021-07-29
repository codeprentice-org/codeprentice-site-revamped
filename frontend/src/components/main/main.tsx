import React, { useState, Suspense, lazy } from 'react';
import './main.css';
import '../navbar/navbar.css';
import AltNav from '../navbar/altnavbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../home-page/home_page";
// import Projects from "../projects-page/projects_page";
// import Members from "../members-page/members_page";
// import ProjectShowcase from '../project-showcase-page/projects_showcase_page';

const Projects = lazy(() => import("../projects-page/projects_page"));
const Members = lazy(() => import("../members-page/members_page"));
const ProjectShowcase = lazy(() => import('../project-showcase-page/projects_showcase_page'));

interface MainProps {

}

const Main: React.FC<MainProps> = () => {
    const [blur,undoBlur]=useState(true)
    return (
        <Router>
            <div className="body">
                <AltNav blurContent={undoBlur} blur={ blur}/>
                <div className={blur ? "HP blur_content" : "HP content"}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                    <Route path="/about" exact component={Home}></Route>
                    <Route path="/projects" exact component={Projects}></Route>
                    <Route path="/projects/:name" exact component={ProjectShowcase}></Route>
                    <Route path="/members" exact component={Members}></Route>
                    <Route path="*" component={Home}></Route>
                    </Switch>
                </Suspense>
                </div>
            </div>  
        </Router>
    );
};

export default Main;