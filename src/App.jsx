import { useEffect, useState } from "react";
import {
  Award,
  BadgeCheck,
  Briefcase,
  CodeXml,
  Download,
  ExternalLink,
  GraduationCap,
  Layers,
  Moon,
  Sparkles,
  Sun,
  Terminal,
} from "lucide-react";
import resumeData from "./data/resumeData.json";
import "./App.css";

import { Card } from "./components/UI/Card.jsx";
import { Badge } from "./components/UI/Badge.jsx";
import { BootLoader } from "./components/UI/BootLoader.jsx";
import { SectionHeader } from "./components/Sections/SectionHeader.jsx";
import { ArchitectureVisual } from "./components/Sections/ArchitectureVisual.jsx";
import { CommandSearch } from "./components/Sections/CommandSearch.jsx";

const GithubIcon = ({ size = 18, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 22.097 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = ({ size = 18, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
  </svg>
);

import {
  proofStats,
  operatingSignals,
  caseStudies,
  labProjects,
  navItems,
  certificationShowcase,
} from "./data/siteContent.js";

function parseBold(text) {
  if (!text.includes('**')) return text;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
      })}
    </>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const { name, location, links, education, skills, experience } =
    resumeData;
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || "dark";
  });

  const [isBooting, setIsBooting] = useState(() => {
    if (typeof window === "undefined") return false;
    const hasBooted = sessionStorage.getItem("hasBooted");
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return !hasBooted && !prefersReducedMotion;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!isBooting) return;
    const timeout = window.setTimeout(() => {
      setIsBooting(false);
      sessionStorage.setItem("hasBooted", "true");
    }, 1650);
    return () => window.clearTimeout(timeout);
  }, [isBooting]);

  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <div className="site-shell">
      {isBooting && <BootLoader />}

      <header className="topbar" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Pranav Bansal home">
          PB
        </a>
        <nav aria-label="Page sections">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="top-actions">
          <a
            href="/resumes/new/Pranav_Bansal_SRE_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Open resume PDF"
            title="Open resume PDF"
          >
            <Download aria-hidden="true" />
          </a>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun aria-hidden="true" />
            ) : (
              <Moon aria-hidden="true" />
            )}
          </button>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="Open GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="Open LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section reveal-on-scroll" aria-label="Profile introduction">
          <Card className="hero-copy" as="div" hasShadow>
            <div className="availability-pill">
              <span className="status-dot" />
              <span>Gurgaon / Remote · SRE & AI infrastructure</span>
            </div>
            <h1 className="text-gradient-shimmer">{name}</h1>
            <p className="hero-title">
              I build and operate the platform layer behind AI products: Kubernetes runtime, GitOps delivery, secure identity boundaries, useful observability and cost-aware cloud operations.
            </p>
            <div className="hero-actions">
              <a
                className="primary-action"
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon />
                Connect on LinkedIn
              </a>
              <a
                className="secondary-action"
                href="/resumes/new/Pranav_Bansal_SRE_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download aria-hidden="true" />
                Resume PDF
              </a>
            </div>
          </Card>
          <ArchitectureVisual />
        </section>

        <section className="proof-grid reveal-on-scroll" id="proof" aria-label="Proof metrics">
          {proofStats.map((stat) => (
            <Card key={stat.label} className="proof-card" hasShadow>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <p>{stat.detail}</p>
            </Card>
          ))}
        </section>

        <section className="profile-grid reveal-on-scroll" aria-label="Operating profile">
          <Card className="profile-card lead-card" as="div" hasShadow>
            <SectionHeader
              eyebrow="Operating Profile"
              title="Production platform work, explained through evidence."
              text="A quick map of the reliability, migration, delivery, security and observability work behind the profile."
              icon={Sparkles}
            />
            <div className="signal-grid">
              {operatingSignals.map((signal) => (
                <Card key={signal.title} className="signal-card" as="article">
                  <signal.icon aria-hidden="true" />
                  <h3>{signal.title}</h3>
                  <p>{signal.text}</p>
                </Card>
              ))}
            </div>
          </Card>
          <CommandSearch />
        </section>

        <section id="case-studies" className="content-section reveal-on-scroll">
          <SectionHeader
            eyebrow="Case Studies"
            title="Three stories recruiters can ask deeper questions about."
            text="Public-safe summaries of the work that should drive interview conversations."
            icon={CodeXml}
          />
          <div className="case-grid">
            {caseStudies.map((study) => (
              <Card key={study.title} className="case-card">
                <div className="case-top">
                  <span>{study.number}</span>
                  <study.icon aria-hidden="true" />
                </div>
                <p className="case-type">{study.type}</p>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
                <div className="case-tags">
                  {study.points.map((point) => (
                    <Badge key={point}>{point}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="stack" className="content-section split-section reveal-on-scroll">
          <div>
            <SectionHeader
              eyebrow="Stack Map"
              title="Tools grouped by the work they enable."
              text="Grouped for fast scanning across reliability, cloud, delivery, observability, AI operations and data systems."
              icon={Layers}
            />
          </div>
          <div className="stack-board">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="stack-group">
                <h3>{category}</h3>
                <div>
                  {items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section reveal-on-scroll">
          <SectionHeader
            eyebrow="Experience"
            title="Current and prior platform work."
            text="A concise timeline of the teams, platforms and operational work behind the profile."
            icon={Briefcase}
          />
          <div className="timeline">
            {experience.map((company) => (
              <Card key={company.company} className="timeline-company-card">
                <div className="timeline-company-head">
                  <div>
                    <h3>{company.company}</h3>
                    <p>{company.context}</p>
                  </div>
                  <span>{company.period}</span>
                </div>
                {company.roles.map((role) => (
                  <div
                    className="role-block"
                    key={`${company.company}-${role.title}`}
                  >
                    <div className="role-meta">
                      <strong>{role.title}</strong>
                      {role.subtitle && <span>{role.subtitle}</span>}
                    </div>
                    <ul>
                      {role.bullets.map((bullet) => (
                        <li key={bullet}>{parseBold(bullet)}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Card>
            ))}
          </div>
        </section>

        <section id="lab" className="content-section split-section reveal-on-scroll">
          <div>
            <SectionHeader
              eyebrow="Intellectual Curiosity"
              title="Rabbit Holes & Beyond the Terminal."
              text="Current explorations in Agentic AI, FinOps and Value Investing."
              icon={Terminal}
            />
          </div>
          <div className="lab-list">
            {labProjects.map((project) => (
              <Card key={project.title} className="lab-card">
                <div>
                  <span>{project.status}</span>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="content-section credential-section reveal-on-scroll">
          <Card className="credential-card" as="div">
            <GraduationCap aria-hidden="true" />
            <div>
              <span>Education</span>
              <h2>{education[0]?.degree}</h2>
              <p>
                {education[0]?.school} · {education[0]?.period} ·{" "}
                {education[0]?.details}
              </p>
            </div>
          </Card>
          <Card className="credential-card certification-card" as="div">
            <Award aria-hidden="true" />
            <div>
              <span>Certifications</span>
              <h2>AWS, Datadog and Kubernetes fundamentals.</h2>
              <div className="cert-list">
                {certificationShowcase.map((cert) => (
                  <Card key={cert.title} className="cert-item">
                    <div>
                      <strong>{cert.title}</strong>
                      <p>
                        {cert.issuer} · {cert.type}
                      </p>
                    </div>
                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noreferrer"
                      title={`Open ${cert.title} details on LinkedIn`}
                    >
                      <ExternalLink aria-hidden="true" />
                      View
                    </a>
                    <small>{cert.proof}</small>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
        </section>

        <Card className="contact-section reveal-on-scroll" aria-label="Contact" as="section" hasShadow>
          <div>
            <span className="section-kicker">
              <BadgeCheck aria-hidden="true" />
              Open to SRE, platform and AI infrastructure conversations
            </span>
            <h2>
              Looking for platform ownership with clear trade-off thinking?
            </h2>
          </div>
          <div className="contact-actions">
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon />
              Start on LinkedIn
            </a>
            <a
              href="/resumes/new/Pranav_Bansal_SRE_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Download aria-hidden="true" />
              Resume PDF
            </a>
          </div>
        </Card>
      </main>

      <footer className="site-footer">
        <span>{location}</span>
        <span>Built with Vite + React · SRE / platform profile</span>
      </footer>
    </div>
  );
}

export default App;
