import { Container } from "./styles";
import AnkitKumar from "../../assets/ankit_2.png";
import tailwindIcon from "../../assets/icons8-tailwind-css.svg"
import csharpIcon from "../../assets/c-sharp.png"
import sqlIcon from "../../assets/sql.png";
import blazorIcon from "../../assets/blazor.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import nextIcon from "../../assets/nextdotjs.svg";
import dotnetIcon from "../../assets/dotnet-tile.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Ankit, a passionate Full Stack Developer specializing in
            ASP.NET Core, C#, SQL, and modern frontend technologies like React, Next.js, and JavaScript.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I build scalable web applications, design robust backend APIs, and create
            dynamic, responsive user interfaces using HTML, CSS, Bootstrap, and Tailwind CSS.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I also have experience in developing admin panels, implementing authentication systems,
            and working with databases using Entity Framework Core and SQL Server. Additionally,
            I work with Blazor for modern .NET-based UI development and CMS platforms like WordPress
            to manage and deliver content-driven websites.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>Bachelor of Technology (B.Tech) - Computer Science Engineering</h4>
            <p>Maharishi Dyanand University Rohtak ,  Haryana  | 2016 - 2020</p>
            <p>7.0 CGPA</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Experience:</h3>

            <h4>Software Developer</h4>
            <p>Sprac Services Pvt. Ltd. | Febuary 2026 - Present</p>
            <p>Working on projects for Ministry of Housing and Urban Affairs, India </p>

            <h4 style={{ marginTop: "1rem" }}>Full Stack Developer</h4>
            <p>Hatchdesk Technologies Pvt. Ltd., Noida | March 2024 - December 2025</p>

            <h4 style={{ marginTop: "1rem" }}>Frontend Developer</h4>
            <p>Pride India Solutions Pvt. Ltd., Gurugram | April 2023 - February 2024</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={csharpIcon} alt="C#" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={dotnetIcon} alt=".NET Core" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={sqlIcon} alt="SQL Server" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={nextIcon} alt="Next.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={blazorIcon} alt="Blazor" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={tailwindIcon} alt="Tailwind CSS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={AnkitKumar} alt="Ankit Kumar" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
