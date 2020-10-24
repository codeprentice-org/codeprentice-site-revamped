import React from 'react';
import Header './header.tsx'

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