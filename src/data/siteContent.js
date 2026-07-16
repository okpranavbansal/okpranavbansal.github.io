import {
  Activity,
  GitBranch,
  ShieldCheck,
  Cloud,
  Network,
  Database,
  Server,
} from "lucide-react";

export const proofStats = [
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

export const operatingSignals = [
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

export const caseStudies = [
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

export const labProjects = [
  {
    title: 'AWS to GCP Migration Playbook',
    status: 'Documentation system',
    text: 'A practical guide for ECS to GKE workload movement, IAM to Workload Identity mapping, and VPC/network rebuild decisions.',
  },
  {
    title: 'Real-time Analytics Hackathon',
    status: 'Runner Up, 2025',
    text: 'Built a Kafka, Apache Pinot, and Superset analytics platform under hackathon constraints.',
  },
  {
    title: 'Gemma 4 on Cloud Run',
    status: 'Serverless AI inference',
    text: 'Hosted the Gemma 4 LLM on Google Cloud Run using attached GPUs, decoupled GCS storage, and vLLM for high-throughput serving.',
  },
];

export const faq = [
  {
    q: "What kind of roles is Pranav targeting?",
    a: "SRE, Platform Engineering, AI Infrastructure, Cloud Infrastructure, and leadership-facing platform ownership roles (CEO/CTO trajectory).",
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
    a: "I am a 'Curious Builder'. I operate as a T-shaped engineer—deeply technical in SRE/Platform, but broadly curious about AI, product, and finance.",
  },
];

export const navItems = [
  ["Proof", "#proof"],
  ["Case Studies", "#case-studies"],
  ["Stack", "#stack"],
  ["Experience", "#experience"],
  ["Curiosity", "#lab"],
];

export const loaderSteps = [
  "resolve profile",
  "map platform proof",
  "hydrate case studies",
  "ready",
];

export const architectureNodes = [
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

export const certificationShowcase = [
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
