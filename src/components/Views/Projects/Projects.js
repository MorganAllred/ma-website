import React, { useState } from 'react';
import './Projects.css';
import Navbar from '../../Navbar/Navbar';
import Quicksort from './Projects/Quicksort/Quicksort';
import OtherProjects from './Projects/Other/OtherProjects';
import DocUploader from './Projects/DocUploader/DocUploader';

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
                    'Quicksort',
                    'Doc Uploader',
                    'Other Projects'
                ]}
            />
                {navSelection === 'Quicksort' && <Quicksort />}
                {navSelection === 'Doc Uploader' && <DocUploader />}
                {navSelection === 'Other Projects' && <OtherProjects />}

        </>
    );
}

export default Projects;