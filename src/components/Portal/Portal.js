import React from 'react';
import './Portal.css';
import Projects from '../Views/Projects/Projects';
import Home from '../Views/Home/Home';
import Game from '../Views/Game/Game';

const Portal = (props) => {
    const { option: navSelection } = props;

    return(
        <div className="portalContainer" style={{ height: props.height }}>
            {navSelection === 'Home' && <Home />}
            {navSelection === 'Projects' && <Projects />}
            {navSelection === 'Game' && <Game />}
        </div>
    );
}

export default Portal;