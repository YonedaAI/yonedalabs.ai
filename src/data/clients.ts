export interface Client {
  name: string;
  period: string;
  role: string;
  summary: string;
  outcomes: string[];
  stack: string[];
}

export const clients: Client[] = [
  {
    name: 'Belden',
    period: '2026',
    role: 'Lead Software Engineer & DevOps Architect',
    summary:
      'Backend modernization of a collaborative network-design platform: SQLite-to-PostgreSQL migration preserving files, version history, accounts, and permissions, plus an enterprise Azure architecture.',
    outcomes: [
      'Transactional import tooling with data-integrity validation',
      'Permission-aware PostgreSQL search with idempotent retries and stale-write rejection',
      'Enterprise Azure architecture: private Container Apps, Key Vault, managed identities via modular Bicep',
      'Isolated dev / staging / production with least-privilege RBAC',
    ],
    stack: ['Python', 'aiohttp', 'PostgreSQL', 'Azure', 'Bicep'],
  },
  {
    name: 'Zoro / Grainger',
    period: '2024–2025',
    role: 'Lead Software Engineer — Data Platforms & DevOps',
    summary:
      'Palantir Foundry data pipelines and high-throughput order services supporting order, shipment, and returns workflows for a major industrial supplier.',
    outcomes: [
      'Real-time tracking service processing 2M+ daily package updates with sub-second response',
      '60% shipment-query latency reduction',
      'Order APIs scaled to 10K requests/second for peak holiday traffic',
      'Webhook failures eliminated 95% via FedEx integration with Datadog monitoring',
      'Returns processing efficiency +40%; manual intervention cut from 30% to 5%',
    ],
    stack: ['Palantir Foundry', 'Python', 'Terraform', 'GCP', 'GitHub Actions'],
  },
  {
    name: 'TSI (Techno-Sciences / Orolia)',
    period: '2020–2026',
    role: 'Lead Software Engineer & DevOps Architect',
    summary:
      'The Rescue Coordination System — a browser-based search-and-rescue platform with Cospas-Sarsat alerts, distress-beacon workflows, and real-time geospatial coordination, deployed for coast-guard-scale operations.',
    outcomes: [
      '99.95% uptime via AWS migration to auto-scaling Kubernetes',
      'Application performance +40% (2.5s → 1.5s average response)',
      'Infrastructure costs −25% through FinOps and Terraform IaC',
      'Real-time shared awareness via Laravel Echo/Pusher and ADS-B aircraft tracking',
    ],
    stack: ['React', 'TypeScript', 'Laravel', 'PostgreSQL', 'Redis', 'AWS EKS'],
  },
  {
    name: 'Regis Corporation',
    period: '2018–2022',
    role: 'Senior Full-Stack / DevOps Engineer',
    summary:
      'ML-powered document management and a franchise analytics platform for a national salon franchisor.',
    outcomes: [
      '94% classification accuracy with AWS SageMaker; manual review cut from 100% to 6%',
      'Client retention +25%; 60 hours/month freed per advisor',
      'React portfolio platform serving 500+ franchisees with real-time analytics',
    ],
    stack: ['React', 'AWS SageMaker', 'Python'],
  },
  {
    name: 'BetaCom',
    period: '2020–2021',
    role: 'Lead Full-Stack Engineer',
    summary:
      'Real-time monitoring and streaming telemetry for 5G network infrastructure.',
    outcomes: [
      'Kafka platform handling 50M+ daily events at 99.95% delivery guarantee',
      'Incident-detection time cut 95% (8 minutes → 20 seconds); SLA penalties −75%',
      'Query performance +80% via PostgreSQL time-series partitioning',
    ],
    stack: ['Kafka', 'Python', 'FastAPI', 'PostgreSQL', 'WebSockets'],
  },
  {
    name: 'Evident.io',
    period: '2016–2018',
    role: 'Senior Software Engineer',
    summary:
      'Core engineer on cloud security monitoring, contributing features that positioned the company for acquisition.',
    outcomes: [
      '$300M acquisition by Palo Alto Networks',
      'AWS costs reduced $70K/year (−35% monthly spend)',
      '1M+ events/day processed with 99.9% detection accuracy under 30s latency',
      'Bug Fix of the Year 2017 — 5× detection-speed improvement',
    ],
    stack: ['Microservices', 'AWS', 'Java'],
  },
  {
    name: 'Pop Secret (ConAgra)',
    period: 'Campaign',
    role: 'IVR Platform Engineer',
    summary:
      'The Buttery Secrets Hotline — a Twilio IVR campaign featuring Melissa Joan Hart: menu navigation, confession recording, and playback for a national promotion.',
    outcomes: ['Four-option IVR menu with confession record/playback flows', 'National campaign scale'],
    stack: ['Node.js', 'Twilio'],
  },
  {
    name: 'Cogability',
    period: '2023–2024',
    role: 'Senior Full-Stack / DevOps Engineer — Data & AI',
    summary: 'Data engineering and AI systems development.',
    outcomes: ['Data-platform and AI feature delivery'],
    stack: ['Data Engineering', 'AI/ML'],
  },
];
