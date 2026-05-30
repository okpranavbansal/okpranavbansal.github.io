import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  Award,
  BadgeCheck,
  Briefcase,
  Cloud,
  CodeXml,
  Command,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Mail,
  Moon,
  Network,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
} from "lucide-react";
import resumeData from "./data/resumeData.json";
import heroAsset from "./assets/hero.png";
import "./App.css";

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

const proofStats = [
  {
    value: "AWS → GCP",
    label: "Platform migration",
    detail: "ECS Fargate to GKE",
  },
  {
    value: "40%",
    label: "Deployment toil reduced",
    detail: "GitOps + KSOPS flow",
  },
  {
    value: "50-60%",
    label: "AWS/ECS cost reduced",
    detail: "Spot + RDS tuning",
  },
  {
    value: "9M+",
    label: "MAU platform exposure",
    detail: "ASTRA / OLX Indonesia",
  },
];

const operatingSignals = [
  {
    icon: Cloud,
    title: "Cloud migrations",
    text: "AWS to GCP migration work across compute, IAM, networking, gateway policy, and runtime delivery.",
  },
  {
    icon: GitBranch,
    title: "GitOps delivery",
    text: "Argo CD App of Apps, environment parity, SOPS/KSOPS secret handling, and lower deployment toil.",
  },
  {
    icon: Activity,
    title: "Reliability loops",
    text: "SLO thinking, production runbooks, observability migrations, dashboards, and incident-ready operations.",
  },
  {
    icon: ShieldCheck,
    title: "Secure platform edges",
    text: "Workload Identity Federation, Cloud Armor, Gateway API, IAM boundaries, and least-privilege defaults.",
  },
];

const caseStudies = [
  {
    number: "01",
    type: "Migration",
    title: "AWS to GCP platform migration",
    summary:
      "Led Wyzard’s AWS-to-GCP platform migration path from ECS Fargate toward GKE, mapping compute, identity, networking, gateway policy, delivery, and service exposure into a cleaner Kubernetes runtime.",
    points: [
      "ECS Fargate to GKE",
      "Workload Identity mapping",
      "Gateway API + HTTPRoutes",
      "Cloud Armor edge policy",
    ],
    icon: Network,
  },
  {
    number: "02",
    type: "Delivery",
    title: "GitOps delivery and secrets flow",
    summary:
      "Built a repeatable delivery model with Argo CD App of Apps and SOPS/KSOPS so releases could move through encrypted configuration, drift visibility, and less manual deployment work.",
    points: [
      "Argo CD App of Apps",
      "SOPS / KSOPS decryption",
      "Kustomize overlays",
      "40% toil reduction",
    ],
    icon: GitBranch,
  },
  {
    number: "03",
    type: "Operations",
    title: "Observability, cost, and data operations",
    summary:
      "Worked across telemetry, cost, and data operations: Datadog/Grafana/Loki migrations, AWS Spot and RDS tuning, and operational stores used by product and analytics teams.",
    points: [
      "Datadog / Grafana / Loki",
      "Spot strategy + RDS tuning",
      "MongoDB Atlas + DynamoDB",
      "ClickHouse + Neo4j",
    ],
    icon: Database,
  },
];

const labProjects = [
  {
    title: "AWS to GCP Migration Playbook",
    status: "Documentation system",
    text: "A practical guide for ECS to GKE workload movement, IAM to Workload Identity mapping, and VPC/network rebuild decisions.",
  },
  {
    title: "Real-time Analytics Hackathon",
    status: "Runner Up, 2025",
    text: "Built a Kafka, Apache Pinot, and Superset analytics platform under hackathon constraints.",
  },
  {
    title: "Infra Projects Roadmap",
    status: "Next public proof",
    text: "Planned public projects include a Go K8s health checker, observability stack, Terraform environments, and a Backstage developer portal.",
  },
];

const faq = [
  {
    q: "What kind of roles is Pranav targeting?",
    a: "SRE, Platform Engineering, AI Infrastructure, Cloud Infrastructure, and leadership-facing platform ownership roles.",
  },
  {
    q: "What is the strongest proof signal?",
    a: "AWS to GCP migration work for an agentic AI platform, plus GitOps, observability, and cost outcomes.",
  },
  {
    q: "What stack is interview-ready?",
    a: "Kubernetes, GKE, AWS, GCP, Terraform, Argo CD, SOPS/KSOPS, Jenkins, Datadog, Grafana, Loki, Python, Bash, and Go fundamentals.",
  },
  {
    q: "What makes the profile different from generic DevOps?",
    a: "The portfolio is framed around reliability engineering, platform ownership, AI runtime operations, and business-impact infrastructure outcomes.",
  },
];

const navItems = [
  ["Proof", "#proof"],
  ["Case Studies", "#case-studies"],
  ["Stack", "#stack"],
  ["Experience", "#experience"],
  ["Lab", "#lab"],
];

const loaderSteps = [
  "resolve profile",
  "map platform proof",
  "hydrate case studies",
  "ready",
];

const architectureNodes = [
  {
    key: "gke",
    label: "GKE",
    command: "$ inspect runtime",
    outcome: "gke/serving",
    detail: "Kubernetes runtime for migrated ECS Fargate services.",
    icon: Server,
  },
  {
    key: "argocd",
    label: "Argo CD",
    command: "$ inspect delivery",
    outcome: "gitops/synced",
    detail:
      "App of Apps delivery, environment parity, and lower manual release toil.",
    icon: GitBranch,
  },
  {
    key: "armor",
    label: "Cloud Armor",
    command: "$ inspect edge",
    outcome: "edge/protected",
    detail:
      "Gateway API, HTTPRoutes, WAF rules, and least-privilege cloud boundaries.",
    icon: ShieldCheck,
  },
  {
    key: "datadog",
    label: "Datadog",
    command: "$ inspect telemetry",
    outcome: "signals/live",
    detail:
      "Production visibility through dashboards, traces, logs, and AI workflow checks.",
    icon: Activity,
  },
];

const certificationShowcase = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    type: "Cloud foundation",
    proof: "Credential details listed on LinkedIn or available on request.",
    href: "https://www.linkedin.com/in/okpranavbansal/details/certifications/",
  },
  {
    title: "Datadog Fundamentals",
    issuer: "Datadog",
    type: "Observability foundation",
    proof: "Credential details listed on LinkedIn or available on request.",
    href: "https://www.linkedin.com/in/okpranavbansal/details/certifications/",
  },
  {
    title: "Kubernetes for Beginners",
    issuer: "Kubernetes training",
    type: "Container orchestration foundation",
    proof: "Credential details listed on LinkedIn or available on request.",
    href: "https://www.linkedin.com/in/okpranavbansal/details/certifications/",
  },
];

function parseBold(text) {
  const match = text.match(/^\*\*(.*?)\*\*\s*:?\s*(.*)/s);
  if (!match) return text;
  return (
    <>
      <strong>{match[1]}:</strong> {match[2]}
    </>
  );
}

function SectionHeader({ eyebrow, title, text, icon: Icon }) {
  return (
    <div className="section-header">
      <div className="section-kicker">
        {Icon && <Icon aria-hidden="true" />}
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function CommandSearch() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return faq;
    return faq.filter((item) =>
      `${item.q} ${item.a}`.toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <div className="ask-panel" aria-label="Ask about Pranav">
      <div className="ask-topline">
        <Command aria-hidden="true" />
        <span>Ask about reliability, cloud, or AI platform work</span>
      </div>
      <label className="ask-input">
        <Search aria-hidden="true" />
        <span className="sr-only">Search portfolio answers</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try: migration, GitOps, stack, roles..."
        />
      </label>
      <div className="answer-stack">
        {results.length ? (
          results.map((item) => (
            <article key={item.q} className="answer-card">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))
        ) : (
          <article className="answer-card">
            <h3>No direct match yet</h3>
            <p>
              Use the case studies and experience timeline below for the deeper
              engineering proof.
            </p>
          </article>
        )}
      </div>
    </div>
  );
}

function ArchitectureVisual() {
  const [activeNodeKey, setActiveNodeKey] = useState("gke");
  const activeNode =
    architectureNodes.find((node) => node.key === activeNodeKey) ||
    architectureNodes[0];

  return (
    <div
      className="architecture-visual"
      aria-label="Platform architecture visual"
    >
      <div className="visual-grid" />
      <div className="visual-header">
        <span className="status-dot" />
        <span>platform-pranav.yaml</span>
      </div>
      <img src={heroAsset} alt="" className="hero-asset" />
      <div className="topology">
        {architectureNodes.map((node) => (
          <button
            key={node.key}
            className={`topology-node ${node.key === activeNodeKey ? "primary" : ""}`}
            type="button"
            onClick={() => setActiveNodeKey(node.key)}
            aria-pressed={node.key === activeNodeKey}
            title={`Explain ${node.label}`}
          >
            <node.icon aria-hidden="true" />
            <span>{node.label}</span>
          </button>
        ))}
      </div>
      <div className="terminal-readout" aria-live="polite">
        <span>{activeNode.command}</span>
        <strong>{activeNode.outcome}</strong>
        <span>{activeNode.detail}</span>
      </div>
    </div>
  );
}

function App() {
  const { name, title, location, links, education, skills, experience } =
    resumeData;
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || "dark";
  });
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsBooting(false), 1650);
    return () => window.clearTimeout(timeout);
  }, []);

  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <div className="site-shell">
      {isBooting && (
        <div
          className="boot-loader"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="boot-card">
            <div className="boot-mark">PB</div>
            <div className="boot-copy">
              <span>Initializing portfolio</span>
              <strong>SRE / AI platform profile</strong>
            </div>
            <div className="boot-grid" aria-hidden="true">
              {Array.from({ length: 16 }, (_, index) => (
                <span key={index} />
              ))}
            </div>
            <div className="boot-steps">
              {loaderSteps.map((step, index) => (
                <span key={step} style={{ "--step": index }}>
                  {step}
                </span>
              ))}
            </div>
            <div className="boot-progress" aria-hidden="true">
              <span />
            </div>
          </div>
        </div>
      )}

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
            href="/Pranav_Bansal_SRE_Resume.pdf"
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
        <section className="hero-section" aria-label="Profile introduction">
          <div className="hero-copy">
            <div className="availability-pill">
              <span className="status-dot" />
              <span>Gurgaon / Remote · SRE & AI infrastructure</span>
            </div>
            <h1>{name}</h1>
            <p className="hero-title">
              {title} focused on AWS-to-GCP migration, GitOps delivery,
              observability, and AI infrastructure reliability.
            </p>
            <p className="hero-summary">
              I build and operate the platform layer behind AI products:
              Kubernetes runtime, GitOps delivery, secure identity boundaries,
              useful observability, and cost-aware cloud operations.
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
                href="/Pranav_Bansal_SRE_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download aria-hidden="true" />
                Resume PDF
              </a>
              <a
                className="secondary-action"
                href={links.github}
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
                View GitHub
              </a>
            </div>
          </div>
          <ArchitectureVisual />
        </section>

        <section className="proof-grid" id="proof" aria-label="Proof metrics">
          {proofStats.map((stat) => (
            <article key={stat.label} className="proof-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <p>{stat.detail}</p>
            </article>
          ))}
        </section>

        <section className="profile-grid" aria-label="Operating profile">
          <div className="profile-card lead-card">
            <SectionHeader
              eyebrow="Operating Profile"
              title="Production platform work, explained through evidence."
              text="A quick map of the reliability, migration, delivery, security, and observability work behind the profile."
              icon={Sparkles}
            />
            <div className="signal-grid">
              {operatingSignals.map((signal) => (
                <article key={signal.title} className="signal-card">
                  <signal.icon aria-hidden="true" />
                  <h3>{signal.title}</h3>
                  <p>{signal.text}</p>
                </article>
              ))}
            </div>
          </div>
          <CommandSearch />
        </section>

        <section id="case-studies" className="content-section">
          <SectionHeader
            eyebrow="Case Studies"
            title="Three stories recruiters can ask deeper questions about."
            text="Public-safe summaries of the work that should drive interview conversations."
            icon={CodeXml}
          />
          <div className="case-grid">
            {caseStudies.map((study) => (
              <article key={study.title} className="case-card">
                <div className="case-top">
                  <span>{study.number}</span>
                  <study.icon aria-hidden="true" />
                </div>
                <p className="case-type">{study.type}</p>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
                <div className="case-tags">
                  {study.points.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="content-section split-section">
          <div>
            <SectionHeader
              eyebrow="Stack Map"
              title="Tools grouped by the work they enable."
              text="Grouped for fast scanning across reliability, cloud, delivery, observability, AI operations, and data systems."
              icon={Layers}
            />
          </div>
          <div className="stack-board">
            {Object.entries(skills).map(([category, items]) => (
              <article key={category} className="stack-group">
                <h3>{category}</h3>
                <div>
                  {items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section">
          <SectionHeader
            eyebrow="Experience"
            title="Current and prior platform work."
            text="A concise timeline of the teams, platforms, and operational work behind the profile."
            icon={Briefcase}
          />
          <div className="timeline">
            {experience.map((company) => (
              <article key={company.company} className="timeline-company-card">
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
              </article>
            ))}
          </div>
        </section>

        <section id="lab" className="content-section split-section">
          <div>
            <SectionHeader
              eyebrow="Projects & Lab"
              title="Public proof beyond job titles."
              text="A tighter project surface that favors case-study depth over a long gallery."
              icon={Terminal}
            />
          </div>
          <div className="lab-list">
            {labProjects.map((project) => (
              <article key={project.title} className="lab-card">
                <div>
                  <span>{project.status}</span>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section credential-section">
          <div className="credential-card">
            <GraduationCap aria-hidden="true" />
            <div>
              <span>Education</span>
              <h2>{education[0]?.degree}</h2>
              <p>
                {education[0]?.school} · {education[0]?.period} ·{" "}
                {education[0]?.details}
              </p>
            </div>
          </div>
          <div className="credential-card certification-card">
            <Award aria-hidden="true" />
            <div>
              <span>Certifications</span>
              <h2>Cloud, observability, and Kubernetes fundamentals.</h2>
              <div className="cert-list">
                {certificationShowcase.map((cert) => (
                  <article key={cert.title} className="cert-item">
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
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" aria-label="Contact">
          <div>
            <span className="section-kicker">
              <BadgeCheck aria-hidden="true" />
              Open to SRE, platform, and AI infrastructure conversations
            </span>
            <h2>
              Looking for platform ownership with clear trade-off thinking?
            </h2>
          </div>
          <div className="contact-actions">
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <Mail aria-hidden="true" />
              Start on LinkedIn
            </a>
            <a href={links.github} target="_blank" rel="noreferrer">
              <Globe aria-hidden="true" />
              Review GitHub
            </a>
            <a
              href="/Pranav_Bansal_SRE_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Download aria-hidden="true" />
              Resume PDF
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>{location}</span>
        <span>Built with Vite + React · SRE / platform profile</span>
      </footer>
    </div>
  );
}

export default App;
