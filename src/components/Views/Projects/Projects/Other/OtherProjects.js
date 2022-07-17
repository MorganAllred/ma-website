import React from 'react';
import { Grid } from '@mui/material';
import './OtherProjects.css';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


const OtherProjects = () => {

    return (
        <Grid 
            container 
            spacing={2}
            direction="row"
        >
            <Grid item xs={12}>
                {/*spacer*/}
            </Grid>
            <Grid item xs={12}>
                <a href="https://github.com/MorganAllred/Overmind"><strong>Overmind Py</strong><OpenInNewIcon sx={{ fontSize: 15 }}/></a>
                <p>A lightweight discord bot for task automation in python</p>
            </Grid>
            <Grid item xs={12}>
                <a href="https://github.com/MorganAllred/OvermindJS"><strong>Overmind JS</strong><OpenInNewIcon sx={{ fontSize: 15 }}/></a>
                <p>The same discord bot ported to node.js after python deprication</p>
            </Grid>
            <Grid item xs={12}>
                <a href="https://github.com/MorganAllred/EQ_Minimal"><strong>EQ Minimal</strong><OpenInNewIcon sx={{ fontSize: 15 }}/></a>
                <p>Custom XML Interface built for the original Titanium Everquest Client.</p>
            </Grid>
            <Grid item xs={12}>
                <div className="boxy">trash</div>
            </Grid>
        </Grid>
    );
}

export default OtherProjects;