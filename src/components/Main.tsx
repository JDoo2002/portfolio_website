import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={require('../assets/images/PFP.jpg')} alt="Profile" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/JDoo2002" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jesse-doolan-5477bb287/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Jesse Doolan</h1>
          <p>Passionate About Building and Growing in Tech</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/JDoo2002" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jesse-doolan-5477bb287/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;