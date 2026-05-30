import { useState } from 'react';
import resumeData from './data/resumeData.json';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('all');

  const { name, title, location, links, education, skills, experience, projects } = resumeData;

  // Filter skills or experiences if necessary, or just render sections.
  return (
    <div className="portfolio-container">
      {/* Decorative background glow elements */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>

      <header className="hero-section">
        <div className="profile-badge">Available for Remote / Hybrid Opportunities</div>
        <h1 className="hero-name">{name}</h1>
        <h2 className="hero-title">{title}</h2>
        <p className="hero-location">
          <svg className="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {location}
        </p>

        <div className="social-links">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </a>
        </div>
      </header>

      {/* Quick Stats Grid */}
      <section className="stats-section">
        <div className="stat-card">
          <h3>2.5+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-card">
          <h3>28+</h3>
          <p>Microservices Migrated</p>
        </div>
        <div className="stat-card">
          <h3>50-60%</h3>
          <p>AWS Cost Reduction</p>
        </div>
        <div className="stat-card">
          <h3>9.77/10</h3>
          <p>CS B.E. CGPA</p>
        </div>
      </section>

      {/* Main Layout Grid */}
      <main className="main-content-layout">
        
        {/* Left Side: Skills & Info */}
        <aside className="left-panel">
          
          {/* Skills Panel */}
          <div className="glass-card skills-panel">
            <h3 className="section-title">Technical Expertise</h3>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category-block">
                <h4>{category}</h4>
                <div className="skills-badge-list">
                  {items.map(skill => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Certs */}
          <div className="glass-card education-panel">
            <h3 className="section-title">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="education-block">
                <h4>{edu.degree}</h4>
                <p className="edu-school">{edu.school}</p>
                <div className="edu-meta">
                  <span className="edu-period">{edu.period}</span>
                  <span className="edu-details">{edu.details}</span>
                </div>
                {edu.certifications && edu.certifications.length > 0 && (
                  <div className="certs-list">
                    <h5>Certifications & Training</h5>
                    <ul>
                      {edu.certifications.map(cert => (
                        <li key={cert}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

        </aside>

        {/* Right Side: Timeline & Projects */}
        <section className="right-panel">
          
          {/* Professional Experience */}
          <div className="glass-card timeline-card">
            <h3 className="section-title">Professional Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-header">
                    <h4 className="company-name">{exp.company}</h4>
                    <span className="job-period">{exp.period}</span>
                  </div>
                  {exp.context && <p className="job-context">{exp.context}</p>}
                  
                  <div className="roles-container">
                    {exp.roles.map((role, rIndex) => (
                      <div key={rIndex} className="role-block">
                        <h5 className="role-title">{role.title}</h5>
                        <ul className="role-bullets">
                          {role.bullets.map((bullet, bIndex) => {
                            // Extract bold content in bullet points if any
                            const boldMatch = bullet.match(/^\*\*(.*?)\*\*:(.*)/);
                            if (boldMatch) {
                              return (
                                <li key={bIndex}>
                                  <strong>{boldMatch[1]}:</strong>{boldMatch[2]}
                                </li>
                              );
                            }
                            return <li key={bIndex}>{bullet}</li>;
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="glass-card projects-card">
            <h3 className="section-title">Key Projects & Achievements</h3>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-grid-item">
                  <div className="project-accent-bar"></div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </div>

        </section>

      </main>

      <footer className="portfolio-footer">
        <p>&copy; {new Date().getFullYear()} {name}. Built with Vite + React. Auto-synced from Obsidian Wiki.</p>
      </footer>
    </div>
  );
}

export default App;
