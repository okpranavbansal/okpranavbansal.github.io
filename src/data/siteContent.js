import {
  Activity,
  GitBranch,
  ShieldCheck,
  Cloud,
  Network,
  Database,
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
    label: "Fewer manual deploy steps",
    detail: "GitOps + KSOPS flow",
  },
  {
    value: "50-60%",
    label: "AWS spend reduced (2025)",
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
    text: "Argo CD and encrypted secrets (SOPS/KSOPS), so releases need fewer manual steps.",
  },
  {
    icon: Activity,
    title: "Reliability & AI Ops",
    text: "Datadog and Langfuse for LLM observability, and 99.99% uptime for the chat infrastructure (10k+ MAU).",
  },
  {
    icon: ShieldCheck,
    title: "Secure cloud boundaries",
    text: "Establishing ISO 27001 technical readiness and SOC2/GDPR-aligned controls through RBAC, network isolation, and least-privilege defaults.",
  },
];

export const caseStudies = [
  {
    number: "01",
    type: "Migration",
    title: "AWS to GCP cloud migration",
    summary:
      "Led Wyzard's AWS-to-GCP migration path from ECS Fargate toward GKE, including an ARM (Graviton) to x86 dependency shift, mapping compute, identity, networking, gateway policy, GitOps delivery and service exposure into a cleaner Kubernetes runtime.",
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
      "40% fewer manual deploy steps",
    ],
    icon: GitBranch,
  },
  {
    number: "03",
    type: "Operations",
    title: "Observability, cost, and data operations",
    summary:
      "Worked across telemetry, cost and data operations: New Relic to Datadog/Grafana/Loki migrations, Confluent to GCP MSAK messaging cutovers, AWS Spot and RDS tuning, and operational stores such as MongoDB (managed; self-hosted migration in progress), DynamoDB, ClickHouse, and Neo4j.",
    points: [
      "Confluent to GCP MSAK (~88% savings)",
      "Datadog / Langfuse / Grafana / Loki",
      "Spot strategy + RDS tuning",
      "MongoDB self-host (in progress) + ClickHouse",
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
    text: 'Deployed google/gemma-4-E4B-it on Cloud Run with an NVIDIA L4 GPU, a Run:ai GCS streamer, and vLLM FP8 quantization.',
  },
];

export const faq = [
  {
    q: "What kind of roles is Pranav targeting?",
    a: "SRE, Platform Engineering, AI Platform Engineer, Cloud Infrastructure, and leadership-facing platform ownership roles.",
  },
  {
    q: "What is the strongest proof signal?",
    a: "The biggest measured results are the ~88% messaging-cost cut (Confluent to GCP Kafka) and the zero-downtime AWS to GCP cutover at Wyzard.",
  },
  {
    q: "What stack is interview-ready?",
    a: "Kubernetes, GKE, Cloud Run, AWS, GCP, Terraform, Argo CD, SOPS, Datadog, Langfuse, MSAK/Kafka, Vertex AI, OpenAI APIs, Python, and Bash.",
  },
  {
    q: "What makes the profile different from generic DevOps?",
    a: "Deep in SRE and platform work, with a product and AI mindset. The 9M+ MAU figure is ASTRA at Roundcircle, not Wyzard.",
  },
];

export const navItems = [
  ["Proof", "#proof"],
  ["Case Studies", "#case-studies"],
  ["Stack", "#stack"],
  ["Experience", "#experience"],
  ["Curiosity", "#lab"],
];

export const bootLogLines = [
  "Initializing platform...",
  "Loading modules: kubernetes, terraform, argocd",
  "kubectl get engineer pranav -n sre",
  "Status: Running · 1/1 Ready",
  "Rendering profile...",
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
    issuer: "Course certificate",
    type: "Container orchestration foundation",
    proof: "Credential details listed on LinkedIn or available on request.",
    href: "https://www.linkedin.com/in/okpranavbansal/details/certifications/",
  },
];

export const migrationsData = [
  {
    id: "aws-gcp",
    title: "AWS to GCP",
    subtitle: "ECS Fargate → GKE",
    icon: Cloud,
    from: "AWS ECS Fargate",
    to: "GCP GKE + Workload Identity",
    metrics: [
      { value: "0", label: "Downtime during cutover" },
      { value: "Route 53", label: "Moved to Cloud DNS" }
    ],
    description: "Led the migration of the Wyzard AI platform from AWS to GCP. Mapped AWS IAM roles to GCP Workload Identity, resolved ARM (Graviton) to x86 package dependencies, transitioned from ECS to GKE, and enforced GitOps delivery via ArgoCD with zero production downtime."
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
      { value: "0", label: "Application code rewrites" }
    ],
    description: "Moved event streaming from Confluent to Google Cloud's managed Kafka. Monthly messaging cost fell by about 88%. The cutover finished inside a 4-hour window, with no lost messages and no application code changes."
  },
  {
    id: "observability-datadog",
    title: "Observability at Scale",
    subtitle: "ASTRA (OLX) Telemetry",
    icon: Activity,
    from: "New Relic APM",
    to: "Datadog and Grafana Loki",
    metrics: [
      { value: "Supported", label: "Not the owner of the fleet move" },
      { value: "25%", label: "Fewer noisy alerts" }
    ],
    description: "Supported the New Relic to Datadog move for ASTRA (OLX Indonesia): 80+ microservices and 9M+ MAU. Logs went to Grafana Loki. Langfuse is Wyzard-only, for LLM traces."
  }
];
