import React from 'react';
import Header from './header'
import Footer from './footer'

interface MainProps {

}

const Main: React.FC<MainProps> = () => {
    return (
        <div>
            <h1>Main component that wraps entire app</h1>
        </div>
    );
};

export default Main;