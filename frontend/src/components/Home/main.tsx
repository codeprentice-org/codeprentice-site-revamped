import React from 'react';
import Home from './home_page'
import Header from './header'
import Footer from './footer'

interface MainProps {

}

const Main: React.FC<MainProps> = () => {
    return (
        <div>
            <Home />
        </div>
    );
};

export default Main;