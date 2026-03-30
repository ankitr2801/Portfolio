import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";

import vedicVisionImg from "../../assets/vedic.png"
import housingFilerImg from "../../assets/housing.png"
import hatchdeskImg from "../../assets/hatchdesk.png"
import DSUImg from "../../assets/DSU.png"

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        {/*  1st project vedic vision  */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/ankitr2801/Astrology" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://www.vedicvision.guru/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>

            <div className="project-image">
              <img src={vedicVisionImg} alt="Vedic Vision Website" />
            </div>

            <div className="body">
              <h3>Vedic Vision - Spiritual & Content Management Website</h3>
              <p >
                Developed and maintained a dynamic website for Vedic Vision, focused on delivering
                spiritual content, articles, and user-friendly navigation. Implemented responsive UI,
                optimized performance, and ensured seamless content management experience.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Asp.net</li>
                <li>SQL</li>
        
                <li>JavaScript</li>
                <li>Bootstrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* 2nd project housing filer  */}

        <ScrollAnimation animateIn="flipInX">
          <div className="project">

            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/ankitr2801/Astrology" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://housingcourtfiler-dev.azurewebsites.net/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live Project" />
                </a>
              </div>
            </header>

            {/* 🔥 Project Image */}
            <div className="project-image">
              <img src={housingFilerImg} alt="Housing Filer Website" />
            </div>

            <div className="body">
              <h3>Housing Court Filer System</h3>
              <p>
                Developed a web-based application for managing housing court filings,
                enabling users to submit, track, and manage legal case data efficiently
                with a structured and user-friendly interface.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>ASP.NET </li>
                <li>C#</li>
                <li>SQL </li>
                <li>Web api</li>

              </ul>
            </footer>

          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">

            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/ankitr2801/employee-management" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="http://staffly123-001-site1.jtempurl.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live Project" />
                </a>
              </div>
            </header>

          {/* //  🔥 Project Image */}
            <div className="project-image">
           
            </div>

            <div className="body">
              <h3>Employee Management System</h3>
              <p>
                Built a comprehensive employee management system with features like attendance tracking,
                leave management, department handling, and role-based access control.
                Implemented efficient data handling and optimized database queries for performance.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>ASP.NET Web Api</li>
                <li>React</li>
                <li>SQL </li>
   
                <li>Javascript</li>
      
              </ul>
            </footer>

          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">

            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://hatchdesktech.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live Project" />
                </a>
              </div>
            </header>

            {/* 🔥 Project Image */}
            <div className="project-image">
              <img src={hatchdeskImg} alt="HatchDesk Website" />
            </div>

            <div className="body">
              <h3>HatchDesk Technologies - Company Website</h3>
              <p>
                Developed a responsive corporate website for HatchDesk Technologies,
                showcasing services, portfolio, and company information with a modern UI
                and optimized user experience.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>Asp.net MVC </li>
             
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>SQL Server</li>
              </ul>
            </footer>

          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">

            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://briks.gov.in/DSU" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live Project" />
                </a>
              </div>
            </header>

            {/* 🔥 Project Image */}
            <div className="project-image">
              <img src={DSUImg} alt="dsu Website" />
            </div>

            <div className="body">
              <h3>Data and Strategy Unit (DSU)</h3>
              <p>
                Integrated Mission Dashboard Built and maintained by Statistics Division, the Integrated Mission Dashboard serves as a centralized digital interface that consolidates data from all major schemes of MoHUA. It empowers stakeholders - including the Hon'ble Minister, senior officials, and mission teams - with real-time data analytics and performance tracking tools. 
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>ASP.NET Core</li>
                <li>C# </li>
                <li>JQuery</li>
                <li>Bootstrap</li>
                <li>SQL </li>
              </ul>
            </footer>

          </div>
        </ScrollAnimation>

    
      </div>
    </Container>
  );
}