export const solutionLinks = [{title:'AI Agents & Agentic Automation',href:'/solutions/ai-automation',copy:'Autonomous agents, multi-agent systems, copilots, RAG, and workflow automation.'},{title:'Software Engineering',href:'/solutions/software-engineering',copy:'SaaS platforms, APIs, backends, and modern product architecture.'},{title:'Mobile Engineering',href:'/solutions/mobile',copy:'Cross-platform and native mobile products built for real users.'},{title:'Cloud & DevOps',href:'/solutions/cloud-devops',copy:'Secure infrastructure, CI/CD, observability, and scale.'}]
export const serviceLinks = [{title:'AI Agents & Agentic Automation',href:'/solutions/ai-automation',copy:'Autonomous agents, multi-agent systems, copilots, and RAG built for production.'},{title:'Web & Software Engineering',href:'/solutions/software-engineering',copy:'Modern applications, APIs, and scalable product architectures.'},{title:'Mobile Engineering',href:'/solutions/mobile',copy:'Reliable mobile experiences using modern technologies.'},{title:'Backend & API Engineering',copy:'Durable services, integrations, data models, and backend systems.'},{title:'Data Engineering & Analytics',copy:'Pipelines, warehouses, and analytics that turn data into decisions.'},{title:'Cloud & DevOps',href:'/solutions/cloud-devops',copy:'Deployment automation, infrastructure, monitoring, and security.'},{title:'Product Development',copy:'From product direction to production-ready software.'},{title:'Technology Modernization',copy:'Reduce technical drag and create a clear path forward.'},{title:'Maintenance & Scaling',copy:'Keep important systems healthy, useful, and ready for growth.'}]
export const processSteps = [['01','Understand','We start with the business problem.'],['02','Architect','We define the right technical direction.'],['03','Build','We work in focused, visible iterations.'],['04','Ship','We test, deploy, document, and hand over properly.'],['05','Improve','We optimize based on real-world feedback.']]
export const techGroups: [string, string[]][] = [
  ['Languages', ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'Java', 'Kotlin', 'Swift', 'C#', 'PHP']],
  ['Frontend & Mobile', ['React', 'Next.js', 'Vue', 'Svelte', 'React Native', 'Flutter', 'SwiftUI', 'Tailwind CSS']],
  ['Backend & APIs', ['Node.js', 'NestJS', 'Django', 'FastAPI', 'Spring Boot', '.NET', 'Rails', 'GraphQL', 'gRPC']],
  ['AI & Machine Learning', ['OpenAI', 'Anthropic', 'LangChain', 'LlamaIndex', 'Hugging Face', 'PyTorch', 'MCP', 'Vector DBs', 'RAG']],
  ['Data & Analytics', ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Kafka', 'Snowflake', 'Elasticsearch', 'Airflow']],
  ['Cloud & DevOps', ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Vercel']],
]

export const marqueeTech = ['TypeScript', 'Python', 'Go', 'Rust', 'React', 'Next.js', 'Node.js', 'FastAPI', 'React Native', 'Flutter', 'LangChain', 'OpenAI', 'Anthropic', 'MCP', 'PyTorch', 'PostgreSQL', 'Kafka', 'Snowflake', 'AWS', 'GCP', 'Kubernetes', 'Terraform']

export const expertise: [string, string][] = [
  ['Full-stack product engineering', 'From pixel-perfect frontends to resilient backends—one senior team owning the whole stack.'],
  ['AI agents & LLM systems', 'Autonomous agents, multi-agent orchestration, RAG, and copilots built on OpenAI, Anthropic, and open models.'],
  ['Any language, any framework', 'TypeScript, Python, Go, Rust, Java, and more—we pick the right tool for the problem, not the trend.'],
  ['Data & infrastructure', 'Pipelines, warehouses, streaming, and cloud architecture that scale with your product.'],
  ['DevOps & platform engineering', 'CI/CD, Kubernetes, IaC, and observability so shipping stays fast and safe.'],
  ['Systems & performance', 'Low-latency services, high-throughput APIs, and architectures tuned for real-world load.'],
]

export type Pillar = { tab: string; eyebrow: string; title: string; copy: string; points: string[]; href: string }

export const pillars: Pillar[] = [
  {
    tab: 'AI Agents',
    eyebrow: 'AI AGENTS & AGENTIC AUTOMATION',
    title: 'AI agents that understand, decide, and act.',
    copy: 'AI agents are our specialty. We build production-grade autonomous agents, multi-agent systems, copilots, and RAG on OpenAI, Anthropic, and open models—with evals, guardrails, and observability built in.',
    points: ['Autonomous & multi-agent systems', 'RAG & retrieval pipelines', 'Copilots & tool-use (MCP)', 'Workflow & process automation', 'Evals, guardrails & observability'],
    href: '/solutions/ai-automation',
  },
  {
    tab: 'Software Engineering',
    eyebrow: 'SOFTWARE ENGINEERING',
    title: 'Custom software built to launch fast and scale cleanly.',
    copy: 'From SaaS platforms to internal tools, we ship durable web applications, APIs, and backends with a senior team that thinks across product, frontend, backend, and deployment.',
    points: ['SaaS platforms & web apps', 'APIs & backend systems', 'Third-party integrations', 'Enterprise systems', 'Modernization & refactoring'],
    href: '/solutions/software-engineering',
  },
  {
    tab: 'Mobile Engineering',
    eyebrow: 'MOBILE ENGINEERING',
    title: 'Mobile apps people actually want to use.',
    copy: 'We build focused, reliable iOS and Android apps—cross-platform or native—connected cleanly to the APIs, auth, and payments behind them, and shipped with confidence.',
    points: ['React Native & Flutter', 'Native iOS & Android', 'API integration & auth', 'Payments & notifications', 'App store deployment'],
    href: '/solutions/mobile',
  },
  {
    tab: 'Cloud & DevOps',
    eyebrow: 'CLOUD & DEVOPS',
    title: 'Infrastructure that keeps your product moving.',
    copy: 'Secure delivery pipelines, observable systems, and cloud architecture built around the product—so shipping a change is fast, safe, and repeatable.',
    points: ['AWS & Azure architecture', 'CI/CD pipelines', 'Infrastructure automation', 'Monitoring & observability', 'Security & scaling'],
    href: '/solutions/cloud-devops',
  },
]

export const industries: [string, string][] = [
  ['SaaS & Startups', 'Product platforms and MVPs built to launch fast and scale cleanly.'],
  ['Fintech', 'Secure, compliant financial products, dashboards, and integrations.'],
  ['Healthcare & Health Tech', 'Reliable systems that respect data privacy and clinical workflows.'],
  ['E-commerce & Retail', 'Storefronts, checkout, and backend systems built for conversion.'],
  ['Logistics & Operations', 'Automation and internal tools that remove operational friction.'],
  ['Professional Services', 'Client portals, workflow automation, and AI copilots for expert teams.'],
]

export const serviceFaqs: [string, string][] = [
  ['What does a software development company like VectorShip actually do?', 'We design, build, and scale custom software—web platforms, mobile apps, AI agents, data pipelines, and cloud infrastructure—for startups and growing companies that need a senior engineering partner.'],
  ['What technologies and programming languages do you work with?', 'A broad, modern stack: TypeScript, JavaScript, Python, Go, Rust, Java, Kotlin, and Swift, with frameworks like React, Next.js, Node.js, Django, and FastAPI. We choose the right tool for the problem rather than forcing a single stack.'],
  ['Do you specialize in AI agents and LLM applications?', 'Yes—AI agents are a core specialty. We build autonomous agents, multi-agent systems, RAG pipelines, copilots, and tool-using agents on OpenAI, Anthropic, and open-source models, with evaluation, guardrails, and observability built in.'],
  ['How large is your engineering team, and how do you staff projects?', 'We are a collective of senior engineers across frontend, backend, mobile, AI, data, and DevOps. We staff each project with the specific specialists it needs—no junior bench, no unnecessary layers.'],
  ['How does an engagement with your team start?', 'With a short technical conversation to understand the problem, followed by a scoped proposal covering architecture, timeline, and cost before any work begins.'],
  ['Do you work with fixed-scope projects or long-term teams?', 'Both. We support fixed-scope projects, dedicated engineering teams, staff augmentation, and long-term partnerships depending on what your product needs.'],
  ['Can you modernize or maintain an existing system instead of building from scratch?', 'Yes. Technology modernization, maintenance, and scaling existing systems are core parts of our software engineering services.'],
  ['Do you build AI agents and automation on top of tools we already use?', 'Yes. We build AI agents, RAG systems, and workflow automation that integrate with your existing stack rather than replacing it.'],
]
