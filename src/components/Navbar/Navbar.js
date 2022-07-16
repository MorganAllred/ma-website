import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    const { click: handleNavClick } = props;
    const { navOptions } = props;
    
    return(
        <div className="navContainer">
            <ul>
                {navOptions.map((option) => {
                    return <li id={option} key={option} onClick={handleNavClick}>{option}</li>
                })}
            </ul>
        </div>
    )
}

export default Navbar;