import React from 'react';
import './Portal.css';
import Projects from '../Views/Projects/Projects';
import Home from '../Views/Home/Home';
import Game from '../Views/Game/Game';
import Contact from '../Views/Contact/Contact'

const Portal = (props) => {
    const { option: navSelection } = props;

    return(
        <div className="portalContainer">
            {navSelection === 'Home' && <Home />}
            {navSelection === 'Projects' && <Projects />}
            {navSelection === 'Game' && <Game />}
            {navSelection === 'Contact' && <Contact />}
        </div>
    );
}

export default Portal;