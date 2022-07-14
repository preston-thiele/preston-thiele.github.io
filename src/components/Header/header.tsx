import React from 'react';
import './header.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from '@material-ui/core';
const Header = () => (
  <div className="header">
    <h1>Preston Thiele</h1>
    <h3>CS & Econ @UChicago</h3>
    <div className="logos">
        <IconButton style={{color: "#00FA9A"}} href="https://www.github.com/prestonthiele">
            <GitHubIcon />
        </IconButton>
        <IconButton style={{color: "#00FA9A"}} href="https://www.linkedin.com/in/preston-thiele-459b131aa/">
            <LinkedInIcon/>
        </IconButton>
        <IconButton style={{color: "#00FA9A"}} href="mailto:preston@gmail.com">
            <EmailIcon/>
        </IconButton>
    </div>
  </div>
)
export default Header;