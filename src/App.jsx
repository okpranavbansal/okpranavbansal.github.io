import { useState, useEffect } from 'react';
import resumeData from './data/resumeData.json';
import './App.css';

const BOOT_SEQUENCE = [
  { text: "Initializing SRE portfolio...", delay: 400 },
  { text: "Loading modules: react, vite, vanilla-css, sync-resume.js", delay: 500 },
  { text: "Running query: SELECT * FROM developers WHERE name = 'pranav_bansal'", delay: 650 },
  { text: "Status: 200 OK - developer profile found", delay: 400, type: "success" },
  { text: "Loading structured resume catalog from Obsidian wiki...", delay: 500 },
  { text: "Injecting metrics: Uptime 99.99%, Toil -40%, Cost -60%", delay: 600 },
  { text: "Rendering profile dashboard...", delay: 400 }
];

function App() {
  const { name, title, location, links, education, skills, experience, projects } = resumeData;
  const [activeConsoleTab, setActiveConsoleTab] = useState('kubectl');
  
  // Boot loading states
  const [booting, setBooting] = useState(true);
  const [visibleLines, setVisibleLines] = useState([]);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let timer;
    let currentIdx = 0;
    
    const runSequence = () => {
      if (currentIdx < BOOT_SEQUENCE.length) {
        setVisibleLines((prev) => [...prev, BOOT_SEQUENCE[currentIdx]]);
        timer = setTimeout(() => {
          currentIdx++;
          runSequence();
        }, BOOT_SEQUENCE[currentIdx].delay);
      } else {
        // Wait briefly after completion, then fade out
        timer = setTimeout(() => {
          setIsFadingOut(true);
          // Terminate boot screen after transition
          timer = setTimeout(() => {
            setBooting(false);
          }, 800); // matches CSS opacity transition
        }, 800);
      }
    };

    runSequence();
    return () => clearTimeout(timer);
  }, []);

  if (booting) {
    return (
      <div className={`boot-overlay ${isFadingOut ? 'fade-out' : ''}`}>
        <div className="boot-terminal-window">
          <div className="boot-terminal-header">
            <div className="mac-controls">
              <span className="close"></span>
              <span className="minimize"></span>
              <span className="maximize"></span>
            </div>
            <span className="boot-title">dev@portfolio: ~</span>
          </div>
          <div className="boot-terminal-body font-mono">
            {visibleLines.map((line, idx) => (
              <div key={idx} className={`boot-line ${line.type === 'success' ? 'text-success' : ''}`}>
                <span className="prompt">$ &gt;</span> {line.text}
              </div>
            ))}
            {visibleLines.length < BOOT_SEQUENCE.length && (
              <div className="boot-line active-cursor">
                <span className="prompt">$ &gt;</span><span className="blinking-cursor">_</span>
              </div>
            )}
            {visibleLines.length === BOOT_SEQUENCE.length && (
              <div className="boot-success-footer">
                <br />
                <span className="success-banner">&gt;&gt; BOOT SYSTEM SUCCESSFUL</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-container fade-in-dashboard">
      {/* Background blueprint grid overlay */}
      <div className="blueprint-grid"></div>
      
      {/* Decorative Glow Orbs */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>

      <div className="content-wrapper">
        {/* Top Header Section */}
        <header className="site-header">
          <div className="profile-indicator">
            <span className="pulse-dot"></span>
            Active SRE / Platform Engineer
          </div>
          
          <div className="header-info">
            <h1 className="name-header">
              {name}
              <span className="verified-badge" title="Verified SRE">
                <svg viewBox="0 0 24 24" fill="currentColor" className="badge-icon">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </span>
            </h1>
            <p className="title-sub">{title} &bull; AI Infrastructure Specialist</p>
            <p className="location-sub">
              <svg className="loc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {location}
            </p>
          </div>

          <div className="action-buttons">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="action-btn btn-linkedin">
              <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="action-btn btn-github">
              <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </header>

        {/* Dynamic Interactive CLI Panel */}
        <section className="terminal-panel">
          <div className="terminal-header">
            <div className="mac-controls">
              <span className="close"></span>
              <span className="minimize"></span>
              <span className="maximize"></span>
            </div>
            <div className="terminal-tabs">
              <button 
                className={`tab-btn ${activeConsoleTab === 'kubectl' ? 'active' : ''}`}
                onClick={() => setActiveConsoleTab('kubectl')}
              >
                kubectl_get_pods.sh
              </button>
              <button 
                className={`tab-btn ${activeConsoleTab === 'metrics' ? 'active' : ''}`}
                onClick={() => setActiveConsoleTab('metrics')}
              >
                system_health.json
              </button>
            </div>
            <span className="terminal-title">bash - session</span>
          </div>
          <div className="terminal-body font-mono">
            {activeConsoleTab === 'kubectl' ? (
              <div className="cli-output">
                <span className="prompt">$</span> kubectl get pods -n wyzard-prod
                <br />
                <span className="comment"># Fetching active platform microservices...</span>
                <br />
                <span className="cli-table-header">NAME                                 READY   STATUS    RESTARTS   AGE</span>
                <br />
                wyzard-core-agent-59fdb-x5r8m        1/1     Running   0          42d
                <br />
                wyzard-gateway-api-bf6b6-9k2n1       1/1     Running   0          42d
                <br />
                vertex-ai-serving-8b5ff-c2k9f        1/1     Running   0          18d
                <br />
                sops-secret-decryptor-99af-q9ab     1/1     Running   0          11d
                <br />
                <br />
                <span className="prompt">$</span> kubectl get ingress -n wyzard-prod
                <br />
                <span className="cli-table-header">NAME             CLASS    HOSTS                   ADDRESS         PORTS   AGE</span>
                <br />
                wyzard-ingress   gce      okpranavbansal.dev      34.120.91.5     80, 443 180d
              </div>
            ) : (
              <div className="cli-output">
                <span className="prompt">$</span> curl -s https://okpranavbansal.github.io/metrics.json
                <br />
                <span className="json-output">
                  {`{
  "status": "active",
  "uptime_slo": "99.99%",
  "infrastructure": {
    "orchestrator": "GKE (Google Kubernetes Engine)",
    "automation": "Terraform, ArgoCD GitOps",
    "security": "GCP Gateway API, Cloud Armor, Workload Identity",
    "mlops": "Vertex AI (Model Garden, Agent Engine)"
  },
  "metrics": {
    "aws_cost_reduction": "50-60%",
    "deployment_toil_reduced": "40%",
    "microservices_migrated": 28,
    "collaborators": "CXOs / Founders"
  }
}`}
                </span>
              </div>
            )}
          </div>
        </section>

        {/* Blueprint statistics grid */}
        <section className="dashboard-stats">
          <div className="dashboard-stat-box">
            <span className="stat-label">experience</span>
            <span className="stat-value">2.5+ Yrs</span>
          </div>
          <div className="dashboard-stat-box">
            <span className="stat-label">migration scale</span>
            <span className="stat-value">28+ Services</span>
          </div>
          <div className="dashboard-stat-box">
            <span className="stat-label">toil reduction</span>
            <span className="stat-value">40%</span>
          </div>
          <div className="dashboard-stat-box">
            <span className="stat-label">academic cgpa</span>
            <span className="stat-value">9.77/10</span>
          </div>
        </section>

        {/* Dual Panel Split */}
        <main className="dashboard-main">
          
          {/* Left panel: Info & Skills */}
          <aside className="dashboard-left">
            
            {/* About Card */}
            <div className="blueprint-card">
              <h3 className="card-title">
                <span className="card-title-icon"></span>
                About
              </h3>
              <p className="about-text">
                Site Reliability & Platform Engineer specializing in high-performance cloud infrastructure, GitOps automation, and MLOps workflows. Proven track record of executing seamless migrations (AWS &rarr; GCP) and driving down operational cloud costs while maintaining strict uptime and compliance parameters.
              </p>
            </div>

            {/* Technical Skills Card */}
            <div className="blueprint-card">
              <h3 className="card-title">
                <span className="card-title-icon"></span>
                Infrastructure Stack
              </h3>
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-cat">
                  <span className="skill-cat-title">{category}</span>
                  <div className="skill-badges">
                    {items.map(skill => (
                      <span key={skill} className="skill-item-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education & Certs */}
            <div className="blueprint-card">
              <h3 className="card-title">
                <span className="card-title-icon"></span>
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="edu-item">
                  <h4 className="edu-deg">{edu.degree}</h4>
                  <p className="edu-sch">{edu.school} &bull; {edu.period}</p>
                  <p className="edu-gpa">{edu.details}</p>
                  {edu.certifications && (
                    <div className="certifications-inline">
                      {edu.certifications.map(c => (
                        <span key={c} className="cert-badge">{c}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </aside>

          {/* Right panel: Timeline & Projects */}
          <section className="dashboard-right">
            
            {/* Experience Timeline */}
            <div className="blueprint-card">
              <h3 className="card-title">
                <span className="card-title-icon"></span>
                Professional History
              </h3>
              
              <div className="custom-timeline">
                {experience.map((exp, index) => (
                  <div key={index} className="timeline-block">
                    <div className="timeline-connector"></div>
                    <div className="timeline-node"></div>
                    
                    <div className="timeline-meta">
                      <h4 className="timeline-company">{exp.company}</h4>
                      <span className="timeline-dates">{exp.period}</span>
                    </div>
                    {exp.context && <p className="timeline-context">{exp.context}</p>}

                    <div className="timeline-roles">
                      {exp.roles.map((role, rIndex) => (
                        <div key={rIndex} className="timeline-role-detail">
                          <h5 className="timeline-role-title">{role.title}</h5>
                          <ul className="timeline-bullets">
                            {role.bullets.map((bullet, bIndex) => {
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

            {/* Featured Projects Grid */}
            <div className="blueprint-card">
              <h3 className="card-title">
                <span className="card-title-icon"></span>
                Projects & Tooling
              </h3>
              
              <div className="custom-projects-grid">
                {projects.map((proj, index) => (
                  <div key={index} className="project-card">
                    <div className="project-top-bar"></div>
                    <h4 className="project-title">{proj.title}</h4>
                    <p className="project-desc">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </section>

        </main>

        {/* Footer */}
        <footer className="site-footer">
          <p>
            &copy; {new Date().getFullYear()} {name}. Built using Vite + React. Auto-synced from personal Obsidian wiki.
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;
