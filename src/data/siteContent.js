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
    value: "88%",
    label: "Messaging cost reduced",
    detail: "Confluent to GCP MSAK",
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
    label: "MAU infrastructure exposure",
    detail: "ASTRA / OLX Indonesia",
  },
  {
    value: "99.99%",
    label: "Chatbot Uptime",
    detail: "10k+ MAU (XMPP/OpenAI)",
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
    title: "Reliability & AI Ops",
    text: "SLO thinking, Datadog LLM observability, proactive load testing, and maintaining 99.99% uptime for agentic AI workloads and chat infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Secure cloud boundaries",
    text: "Establishing technical readiness for ISO 27001, SOC2, and GDPR compliance through RBAC, network isolation, and least-privilege defaults.",
  },
];

export const caseStudies = [
  {
    number: "01",
    type: "Migration",
    title: "AWS to GCP cloud migration",
    summary:
      "Led Wyzard's AWS-to-GCP migration path from ECS Fargate toward GKE, mapping compute, identity, networking, gateway policy, GitOps delivery and service exposure into a cleaner Kubernetes runtime.",
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
      "Worked across telemetry, cost and data operations: Datadog/Grafana/Loki migrations, Confluent to GCP MSAK messaging migrations, AWS Spot and RDS tuning, and operational stores such as MongoDB (managed and self-hosted), DynamoDB, ClickHouse, and Neo4j.",
    points: [
      "Confluent to GCP MSAK (~88% savings)",
      "Datadog / Grafana / Loki",
      "Spot strategy + RDS tuning",
      "Self-Hosted MongoDB + ClickHouse",
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
    title: 'Gemma 4 Serverless GPU Inference',
    status: 'Serverless AI inference',
    text: 'Engineered a deployment for google/gemma-4-E4B-it on Cloud Run using attached NVIDIA L4 GPUs, Run:ai GCS streamer, and on-the-fly FP8 quantization.',
  },
  {
    title: 'Personal Finance Engineering',
    status: 'System Design (Ongoing)',
    text: 'Operationalizing a Buffett/Munger-inspired finance system, tracking credit profiles (CIBIL/Experian), and optimizing reward-stacking credit card strategies.',
  },
];

export const faq = [
  {
    q: "What kind of roles is Pranav targeting?",
    a: "SRE, Platform Engineering, AI Platform Engineer, Cloud Infrastructure, and leadership-facing platform ownership roles (CEO/CTO trajectory).",
  },
  {
    q: "What is the strongest proof signal?",
    a: "Executing zero-downtime infrastructure cutovers at scale (Wyzard.ai), and driving measurable outcomes across reliability, security, and cloud cost.",
  },
  {
    q: "What stack is interview-ready?",
    a: "Kubernetes, GKE, Cloud Run, AWS, GCP, Terraform, Argo CD, SOPS, Datadog, MSAK/Kafka, Vertex AI, OpenAI APIs, Python, Bash, and Go.",
  },
  {
    q: "What makes the profile different from generic DevOps?",
    a: "I am a 'Curious Builder'. I operate as a T-shaped engineer—deeply technical in SRE/Platform, but broadly curious about AI, product, and value investing.",
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

export const migrationsData = [
  {
    id: "aws-gcp",
    title: "AWS to GCP Orchestration",
    subtitle: "ECS Fargate → GKE",
    icon: Cloud,
    from: "AWS ECS Fargate",
    to: "GCP GKE + Workload Identity",
    metrics: [
      { value: "0", label: "Downtime during cutover" },
      { value: "40%", label: "Deployment Toil Reduction" }
    ],
    description: "Led the migration of the Wyzard AI platform from AWS to GCP. Mapped AWS IAM roles to GCP Workload Identity, transitioned from ECS to a Kubernetes runtime (GKE), and enforced GitOps delivery via ArgoCD with zero production downtime."
  },
  {
    id: "messaging-msak",
    title: "Messaging Infrastructure",
    subtitle: "Confluent → GCP MSAK",
    icon: Network,
    from: "Confluent Cloud",
    to: "GCP Managed Service for Kafka",
    metrics: [
      { value: "88%", label: "Reduction in messaging costs" },
      { value: "Sub-ms", label: "Latency improvement" }
    ],
    description: "Orchestrated the migration of the core microservice fleet away from Confluent Cloud to GCP MSAK. Eliminated cross-cloud latency and massive egress charges without requiring application code rewrites."
  },
  {
    id: "observability-datadog",
    title: "Observability at Scale",
    subtitle: "ASTRA (OLX) Telemetry",
    icon: Activity,
    from: "Fragmented Logs & APM",
    to: "Datadog, Grafana & Loki",
    metrics: [
      { value: "9M+", label: "MAU Handled" },
      { value: "25%", label: "Reduction in noisy alerts" }
    ],
    description: "Supported the observability migration for 80+ microservices in ASTRA (OLX Indonesia). Optimized alerting thresholds, rolled out the LGTM stack for Wyzard, and integrated Datadog LLM observability for AI model pipelines."
  }
];
