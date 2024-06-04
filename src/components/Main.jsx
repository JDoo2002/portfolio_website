import React, { useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FadeIn from 'react-fade-in';
import {
  Timeline,
  Expertise,
  Project,
  Contact,
} from './';
import '../assets/styles/Main.scss';

function Main() {

  useEffect(() => {
    document.title = "Jesse Doolan";
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
  <FadeIn transitionDuration={700}>
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Jesse Doolan</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
    <Expertise/>
    <Timeline/>
    <Project/>
    <Contact/>
  </FadeIn>
  );
}

export default Main;