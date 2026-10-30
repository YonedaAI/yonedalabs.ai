export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'live' | 'shipped' | 'dev' | 'research';
  statusLabel: string;
  category: 'Agent Infrastructure' | 'Developer Tools' | 'Research Systems' | 'Consumer';
  stack: string[];
  url?: string;
  github?: string;
  featured?: boolean;
  metric?: string;
}

export const projects: Project[] = [
  {
    id: 'cmrps',
    name: 'CMRPS',
    tagline: 'A structural classification of mathematical physics — 12 volumes, Lean-checked',
    description:
      'The Classification of Mathematical Representations of Physical Systems: a twelve-volume series plus synthesis asking whether physics admits a structural classification analogous to the Classification of Finite Simple Groups. Kernel-checked in Lean 4 with 280 machine-checked claims, an executable Haskell taxonomy, and a Periodic Table of Mathematical Physics.',
    status: 'live',
    statusLabel: 'Live · 13 papers',
    category: 'Research Systems',
    stack: ['Lean 4', 'Haskell', 'LaTeX'],
    url: 'https://cmrps.vercel.app',
    featured: true,
    metric: '280 machine-checked claims',
  },
  {
    id: 'catdb',
    name: 'CatDB',
    tagline: 'A governed semantic data layer for AI agents',
    description:
      'CatDB federates CRM, billing, and ERP systems behind a typed schema and refuses to answer questions it cannot prove — no hallucinated rows, no silent joins. Live demo federates a Postgres CRM and MySQL billing system behind one query interface.',
    status: 'live',
    statusLabel: 'Live',
    category: 'Agent Infrastructure',
    stack: ['Rust', 'Postgres', 'MySQL'],
    url: 'https://catdb.ai',
    github: 'MagnetonIO/CatDB',
    featured: true,
    metric: 'Semantic multimodel federation',
  },
  {
    id: 'contextfs',
    name: 'ContextFS',
    tagline: 'Persistent memory for AI coding agents',
    description:
      'A Model Context Protocol server and CLI giving Claude Code, Codex, and other agents cross-session recall. Hybrid keyword + semantic search over 2,300+ stored memories. Published on PyPI with a live marketing site.',
    status: 'live',
    statusLabel: 'Live',
    category: 'Developer Tools',
    stack: ['Python', 'MCP'],
    url: 'https://contextfs.ai',
    github: 'contextfs',
    featured: true,
    metric: '2,300+ memories',
  },
  {
    id: 'yonedarepo',
    name: 'YonedaRepo',
    tagline: 'Git-compatible source control for agents',
    description:
      'A git-compatible repository layer purpose-built for AI agents: HTTP API + MCP server, server-side commits, no clone required. Full Git semantics implemented on Cloudflare Durable Objects with strong consistency.',
    status: 'live',
    statusLabel: 'Live',
    category: 'Agent Infrastructure',
    stack: ['Rust', 'Cloudflare Durable Objects'],
    url: 'https://yonedarepo.com',
    featured: true,
    metric: 'Transactional agent commits',
  },
  {
    id: 'agenthero',
    name: 'AgentHero',
    tagline: 'Durable runtime + marketplace for multi-agent apps',
    description:
      'An AI-agent marketplace platform built for a client: Next.js 16 + Supabase where Claude- and Codex-powered agents are deployed, supervised, and credit-metered. A companion Rust/Tokio runtime provides YAML-defined workflows, Git-worktree isolation, budgets, and crash recovery.',
    status: 'dev',
    statusLabel: 'In development',
    category: 'Agent Infrastructure',
    stack: ['Rust', 'Tokio', 'Next.js 16', 'Supabase'],
    featured: true,
    metric: 'Durable multi-agent execution',
  },
  {
    id: 'grokrxiv',
    name: 'GrokRxiv',
    tagline: 'Agentic peer review for research papers',
    description:
      'A multi-agent research pipeline that orchestrates parallel Claude research agents with Gemini peer review and Codex verification to autonomously draft, review, and publish formally-verified papers. 51 papers ingested; five fully-reviewed paper bundles published.',
    status: 'live',
    statusLabel: 'Live',
    category: 'Research Systems',
    stack: ['Rust', 'Supabase', 'Multi-agent'],
    url: 'https://grokrxiv.org',
    github: 'GrokRxiv',
    featured: true,
    metric: '51 papers · 5 full reviews',
  },
  {
    id: 'copied',
    name: 'Copied',
    tagline: 'Clipboard manager for macOS & iOS',
    description:
      'A native clipboard manager with iCloud sync, fuzzy search, and code detection. Shipped via Homebrew cask with an active iOS beta program.',
    status: 'shipped',
    statusLabel: 'Shipped',
    category: 'Consumer',
    stack: ['SwiftUI', 'SwiftData'],
    url: 'https://getcopied.app',
  },
  {
    id: 'mdreader',
    name: 'MDReader',
    tagline: 'Desktop Markdown library with encrypted sync',
    description:
      'A desktop library for large Markdown collections (macOS first, Windows/Linux planned, mobile in development). The companion web app includes an offline browser reader on SQLite WASM and an encrypted-sync Cloudflare Worker.',
    status: 'dev',
    statusLabel: 'In development',
    category: 'Developer Tools',
    stack: ['Rust', 'Cloudflare Workers', 'Next.js'],
    github: 'MagnetonIO/MDReader',
  },
  {
    id: 'japl',
    name: 'JAPL',
    tagline: 'A typed actor language that compiles to WASM',
    description:
      'A strict typed functional language combining Rust-style ownership, Erlang processes, and functional semantics. Compiler with 170+ tests, supervision trees, wasmCloud deployment, and a 46-page documentation site. Seven companion papers.',
    status: 'live',
    statusLabel: 'Live',
    category: 'Developer Tools',
    stack: ['Rust', 'WASM'],
    url: 'https://japl-lang.dev',
  },
  {
    id: 'ferrous-bridge',
    name: 'ferrous-bridge',
    tagline: 'AI-driven C-to-Rust translation',
    description:
      'A translation toolchain specified across a six-rung safety ladder, proven on libyaml and executed by autonomous agent teams. Documented across four peer-reviewed papers.',
    status: 'research',
    statusLabel: 'Research',
    category: 'Research Systems',
    stack: ['Rust', 'LLM agents'],
  },
  {
    id: 'quantumflow',
    name: 'QuantumFlow',
    tagline: 'Derived Hamiltonians for quantum simulation',
    description:
      'A Python library for derived Hamiltonians spanning QFT, lattice QCD, circuits, and biophysics. Built on JAX, PyTorch, and Qiskit. Backed by a US patent on inverse topological decoding.',
    status: 'live',
    statusLabel: 'v1.0.0',
    category: 'Research Systems',
    stack: ['Python', 'JAX', 'Qiskit'],
  },
  {
    id: 'voltforge',
    name: 'VoltForge',
    tagline: 'Software-defined battery adapters',
    description:
      'An embedded Rust research program building software-defined battery adapters for cross-brand power tools. Five research papers plus working firmware.',
    status: 'research',
    statusLabel: 'Research',
    category: 'Research Systems',
    stack: ['Embedded Rust'],
  },
  {
    id: 'ai-tui',
    name: 'ai-tui',
    tagline: 'Terminal UI protocol for AI agents',
    description:
      'A protocol, Rust renderer, and SDKs for agent-driven terminal interfaces — targeting first-class integration with agent CLIs.',
    status: 'dev',
    statusLabel: 'In development',
    category: 'Developer Tools',
    stack: ['Rust'],
  },
  {
    id: 'puzzlepals',
    name: 'PuzzlePals',
    tagline: 'An AI-pet match-3 game',
    description:
      'A free-to-play match-3 iOS game with an AI companion — Tamagotchi meets Candy Crush meets AI. Vertical slice complete with 31 passing tests, heading to TestFlight.',
    status: 'dev',
    statusLabel: 'Pre-TestFlight',
    category: 'Consumer',
    stack: ['Swift 6', 'XcodeGen'],
  },
];
