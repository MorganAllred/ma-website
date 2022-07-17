import React from 'react';
import './Home.css';
import { Grid } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Home = () => {

    return(
        <div className="gridContainer">
            <Grid 
                container 
                spacing={1}
                direction="row"
            >
                <Grid item xs={12}>
                    <p><strong>About Me</strong></p>
                </Grid>
                <Grid item xs={12}>
                    <p>
                        I'm a Software Developer by profession and an aspiring athlete in my spare time. 
                        I very much enjoy my daily visits to the gym to keep a clear mind and healthy body, 
                        and my weekend leagues for beach Volleyball!
                    </p>
                </Grid>
                <Grid item xs={12}>
                    <p><strong>Education</strong></p>
                </Grid>
                <Grid item xs={12}>
                    <p>
                        Bachelor of Science: Computer Science - 2 classes remaining!
                    </p>
                </Grid>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={6}>
                    <div className="gridDiv">
                        <PhoneIcon />
                        <span>435-660-9637</span>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="gridDiv">
                        <EmailIcon />
                        <span>morgandallred123@gmail.com</span>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="gridDiv">
                        <LinkedInIcon sx={{ color: "#0A66C2" }}/>
                        <a href="https://www.linkedin.com/in/morgan-allred/" target="#">
                            LinkedIn
                            <OpenInNewIcon sx={{ fontSize: 15 }}/>
                        </a>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="gridDiv">
                        <GitHubIcon />
                        <a href="https://github.com/MorganAllred" target="#">
                            Github
                            <OpenInNewIcon sx={{ fontSize: 15 }}/>
                        </a>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;