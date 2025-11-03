import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import "../assets/styles/Project.scss";

function Project({ mode }: { mode: string }) {
    const projects = [
        {
            title: "AWS Cost Monitoring & Security Insights",
            description:
                "Automates AWS cost tracking & security monitoring using Terraform, Lambda, and QuickSight. Collects real-time data, visualizes trends, and sends email alerts for high spending.",
            image: mock01,
            link: "https://github.com/JDoo2002/AWS-Cost-Monitoring",
            tags: ["#lambda", "#Terraform", "#S3", "#Cost Explorer API", "#SES", "#Flask", "#Jinja2", "#Bootstrap", "#Python", "#Railway"],
        },
        {
            title: "CI Process for Notes Application (Private)",
            description: (
                <>
                    CI/CD pipeline for a Node.js web app with automated testing, linting, and artifact generation.
                    <br />
                    <a 
                        href="mailto:jndoolan63@gmail.com?subject=Request Access to CI/CD Project" 
                        style={{ color: "#1e90ff", textDecoration: "underline", fontWeight: "bold", display: "inline-block", marginTop: "8px" }}
                    >
                        *Request Access
                    </a>
                </>
            ),
            image: mock02,
            link: "https://github.com/JDoo2002/CI_Process_For_Application",
            tags: ["#Node.js", "#Express.js", "#MongoDB", "#EJS", "#Github Actions", "#NPM"],
            access: "Private",
        },
        
        {
            title: "AI Resume Analyzer with Fit Score & Future Path",
            description:
                "Turn a resume into actionable career advice: Upload your resume and recieve, job recommendations with a 0–100 Fit Score, and a staged Future Path plan.",
            image: mock04,
            link: "https://github.com/JDoo2002/Ai_analyzer/tree/main",
            tags: ["#Ai", "#Nextjs", "#React", "#Typescript", "#tailwindcss", "#openai", "#vite", "#vercel", "#Python", "#HTML"],
        },
        
        {
            title: "Automated AWS Deployment (Private)",
            description: (
                <>
                    CI/CD pipeline for automated AWS infrastructure deployment using Terraform, Ansible, and GitHub Actions.
                    <br />
                    <a 
                        href="mailto:jndoolan63@gmail.com?subject=Request Access to AWS Deployment Project" 
                        style={{ color: "#1e90ff", textDecoration: "underline", fontWeight: "bold", display: "inline-block", marginTop: "8px" }}
                    >
                        *Request Access
                    </a>
                </>
            ),
            image: mock03,
            link: "https://github.com/JDoo2002/Automated_AWS_Deployment",
            tags: ["#Terraform", "#Ansible", "#Github Actions", "#Docker", "#Git", "#Bash", "#EC2", "#S3", "#ELB", "#DynamoDB"],
            access: "Private",
        },
    ];

    
    return (
        <div className={`projects-container ${mode}`} id="projects">
            <h1 className="projects-title">Personal Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className={`project-card ${mode}`} key={index}>
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                        </a>
                        <div className={`project-content ${mode}`}>
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <h2 className={`project-title ${mode}`}>{project.title}</h2>
                            </a>
                            <p className={`project-description ${mode}`}>
                                {project.description}
                            </p>
                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span className={`project-tag ${mode}`} key={i}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
