import React, { useState } from 'react';
import './Projects.css';
import Navbar from '../../Navbar/Navbar';
import Quicksort from './Projects/Quicksort/Quicksort';

const Projects = () => {
    const [navSelection, updateNavSelection] = useState('Quicksort');

    const handleNavClick = (event) => {
        updateNavSelection(event.target.id)
    }

    return(
        <>
            <Navbar
                click={handleNavClick}
                navOptions = {[
                    'Quicksort'
                ]}
            />
            <Quicksort />
        </>
    );
}

export default Projects;