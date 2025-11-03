import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Node.js", // Updated
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Terraform",
    "Pandas",
];

const labelsThird = [
    "Customer Support",
    "Incident Management",
    "SaaS Support",
    "Trello",
    "SQL Querying",
    "Troubleshooting",
    "Security Management",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I design and deliver internal products-APIs, dashboards, and workflows that make diagnosing and fixing issues faster and more consistent. On the front end I work in React and TypeScript (often Next.js) with a focus on clear, minimal UIs. on the back end I ship Python/Flask or Node when it fits, with sensible auth, logging, and error handling. I use MariaDB/PostgreSQL and validate data with payload diffing and lightweight checks. The goal is always the same: turn a one-off deep dive into a repeatable solution that teams actually use.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I keep these tools easy to ship and reliable in production. That means AWS S3 for artefacts and configs, CloudWatch for tracing and verification, and GitHub Actions for straightforward CI/CD. I use Terraform to make environments predictable and add health checks, scheduled tasks, and structured logs so issues are visible before they become incidents. Releases are simple, documented, and designed to reduce noise.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>IT Support & Technical Operations</h3>
                    <p>I lead the escalation path for complex issues across POS and ordering integrations. Day to day I guide consultants through investigations, step in on priority cases, and coordinate with Dev/Infra when needed. I rely heavily on SQL/MariaDB to verify the numbers, read/write to S3 for artefacts and configs, and use CloudWatch to trace errors and confirm fixes.I document well-scoped bugs, maintain step-by-step guides, and package repeatable solutions so similar issues are resolved quickly.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;