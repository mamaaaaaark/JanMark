import React from "react";
import "./App.css";

function App() {
  const skills = [
    { name: "HTML", icon: "/icons/html.png" },
    { name: "C#", icon: "/icons/csharp.png" },
    { name: "C++", icon: "/icons/cplusplus.png" },
    { name: "Python", icon: "/icons/python.png" },
    { name: "Java", icon: "/icons/java.png" },
    { name: "SQL", icon: "/icons/sql.png" },
    { name: "PHP", icon: "/icons/php.png" },
    { name: "JavaScript", icon: "/icons/js.png" },
    { name: "MongoDB", icon: "/icons/mongodb.png" },
    { name: "Flutter", icon: "/icons/flutter.png" },
    { name: "Dart", icon: "/icons/dart.png" },
    { name: ".NET", icon: "/icons/dotnet.png" },
    { name: "Blazor", icon: "/icons/blazor.png" },
    { name: "React", icon: "/logo192.png" },
  ];

  const projects = [
    {
      name: "Kain La Salle",
      description:
        "A food ordering and delivery system for De La Salle University Dasmariñas students.",
      link: "https://kain-lasalle-client-main.vercel.app/",
    },
  ];

  return (
    <div className="App">
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => window.location.reload()}>
          <img src="/icons/Icon.png" alt="Refresh" className="refresh-icon" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <header>
          <h1 className="name">Hi! My name is Jan Mark Arreza</h1>
        </header>
        <section className="about-section">
          <h2>About Me</h2>
          <p>
            Hello! I'm Jan Mark Arreza, a web developer with a passion for building functional and user-friendly applications. 
            I am constantly striving to expand my knowledge and explore new technologies. 
            I enjoy learning new programming languages and experimenting with creative design ideas to make my projects stand out.
          </p>
        </section>

        {/* Experience Section */}
        <section className="experience-section">
          <h2>Experience</h2>
          <div className="experience">
            <h3>Software Developer | CTI Alabang</h3>
            <p>
              <em>486 Hours (College OJT)</em>
            </p>
            <ul>
              <li>
                Automated server connection checks using C#, .Net, and Blazor,
                reducing manual effort,minimizing errors, and providing
                real-time updates on connection statuses for efficient
                monitoring.
              </li>
              <li>Edited source code and created a user guide for existing applications.</li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <h2>Languages I've Used:</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section">
          <h2>Project</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <img src="/icons/ksl.png" alt="Kain La Salle" className="project-image" />
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit Project
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h2>Contact</h2>
          <div className="contact-info">
            <a href="mailto:arrezajanmark@gmail.com" className="contact-link">
              arrezajanmark@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/jan-mark-arreza-689a77329/" className="contact-link">
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
