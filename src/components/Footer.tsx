import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/JDoo2002" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/jesse-doolan-5477bb287/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>The personal portfolio of <a href="https://github.com/JDoo2002/portfolio_website" target="_blank" rel="noreferrer">Jesse Doolan</a>  </p>
    </footer>
  );
}

export default Footer;