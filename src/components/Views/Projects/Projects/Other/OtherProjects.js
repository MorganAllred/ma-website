import React from 'react';
import { Grid } from '@mui/material';
import './OtherProjects.css';


const OtherProjects = () => {

    return (
        <Grid 
            container 
            spacing={2}
            direction="row"
        >
            <Grid item xs={12}>
                <div>asdf</div>
                <a href="https://github.com/MorganAllred/EQ_Minimal">EQ Minimal</a>
            </Grid>
            <Grid item xs={12}>
                <div className="boxy">trash</div>
            </Grid>
            <Grid item xs={12}>
                <div className="boxy">trash</div>
            </Grid>
            <Grid item xs={12}>
                <div className="boxy">trash</div>
            </Grid>
        </Grid>
    );
}

export default OtherProjects;