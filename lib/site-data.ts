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

export const siteOverview = [
  { label: 'SOLUTIONS', title: 'Technology matched to the problem, not the trend.', copy: 'How we pick the right architecture—AI, software, mobile, or cloud—based on the outcome you actually need.', href: '/solutions', cta: 'See solutions' },
  { label: 'SERVICES', title: 'The full engineering menu, end to end.', copy: 'Every service we offer, from AI agents to backend systems to DevOps, laid out in one place.', href: '/services', cta: 'See services' },
  { label: 'APPROACH', title: 'A delivery process built to stay honest.', copy: 'The five stages we run every engagement through, and how we keep communication clear along the way.', href: '/approach', cta: 'See our approach' },
  { label: 'WORK', title: 'The kinds of problems we take on.', copy: 'A look at the engagements we support while our public case study library comes together.', href: '/work', cta: 'See our work' },
  { label: 'RECRUITMENT', title: 'Need to grow your own team instead?', copy: 'How we help you hire vetted software, AI, and cloud talent—permanent, contract, or contract-to-hire.', href: '/recruitment', cta: 'See recruitment' },
  { label: 'ABOUT', title: 'Who is actually behind the work.', copy: 'The team, the standards, and the reasoning behind how VectorShip operates as a partner.', href: '/about', cta: 'See about us' },
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

/* ── Recruitment / Talent ──────────────────────────────────────────────── */

export const recruitmentModels = [
  { title: 'Permanent / Direct Hire', label: 'STAFFING MODEL', copy: 'We recruit and vet full-time engineers, product, and leadership hires who join your team directly—backed by a replacement guarantee.' },
  { title: 'Contract Staffing', label: 'STAFFING MODEL', copy: 'On-demand specialists for defined projects. We handle payroll, benefits, taxes, and compliance so you carry none of the employer liability.' },
  { title: 'Contract-to-Hire', label: 'STAFFING MODEL', copy: 'Evaluate talent on real work before committing. Start on contract, convert to permanent when the fit is proven—low risk, high confidence.' },
  { title: 'Dedicated Squads', label: 'STAFFING MODEL', copy: 'A ready-assembled, senior team embedded with your organization when you need capacity and velocity without a long hiring cycle.' },
]

export const recruitmentRoles: [string, string[]][] = [
  ['Software Engineering', ['Frontend', 'Backend', 'Full-Stack', 'Mobile (iOS/Android)', 'Staff & Principal', 'Tech Leads']],
  ['AI, Data & ML', ['ML Engineers', 'Data Scientists', 'Data Engineers', 'MLOps', 'AI Product', 'Analytics']],
  ['Cloud, DevOps & Security', ['DevOps', 'SRE', 'Cloud Architects', 'Platform Engineers', 'Security Engineers', 'Infrastructure']],
  ['Product & Design', ['Product Managers', 'Product Designers', 'UX Researchers', 'Delivery Leads', 'Scrum Masters', 'BAs']],
  ['Engineering Leadership', ['CTO & VP Engineering', 'Engineering Managers', 'Directors', 'Heads of Product', 'Architects', 'Fractional CTOs']],
  ['QA & Support', ['QA Automation', 'SDET', 'Manual QA', 'Release Engineers', 'Support Engineers', 'DevRel']],
]

export const recruitmentProcess = [
  ['01', 'Intake & Calibration', 'We align on the role, must-have skills, seniority, budget, and success profile before sourcing begins.'],
  ['02', 'Targeted Sourcing', 'We tap a pre-vetted network and active outreach to reach candidates who fit—not just those who apply.'],
  ['03', 'Technical Vetting', 'Every candidate clears an engineering-led screen, skills assessment, and reference checks before you see them.'],
  ['04', 'Curated Shortlist', 'You receive a short, high-signal shortlist—often within days—not a stack of unqualified resumes.'],
  ['05', 'Offer & Onboard', 'We manage interviews, salary negotiation, offer coordination, and onboarding—backed by a replacement guarantee.'],
]

export const recruitmentFaqs: [string, string][] = [
  ['How quickly can you present candidates?', 'For most roles we deliver a curated shortlist within days, and typically fill positions within 2–4 weeks depending on seniority and specialization.'],
  ['How do you vet candidates before presenting them?', 'Every candidate completes an engineering-led screen: a recruiter interview, technical skills assessment, and reference checks. Because our screening is run by engineers, you only meet people who can actually do the work.'],
  ['What is the difference between contract, contract-to-hire, and direct hire?', 'Contract staffing brings in specialists for a defined period while we act as the employer of record. Contract-to-hire lets you evaluate someone on real work before converting them to a full-time employee. Direct hire places a permanent employee on your team from day one.'],
  ['Do you handle payroll, benefits, and compliance for contractors?', 'Yes. For contract and contract-to-hire engagements we assume full responsibility for payroll, benefits, employer taxes, insurance, and compliance—removing the administrative burden and liability from your team.'],
  ['Do you offer a placement guarantee?', 'Yes. Direct-hire placements include a replacement guarantee period—if a hire does not work out within that window, we find a replacement at no additional fee.'],
  ['Which roles and industries do you cover?', 'We specialize in technology talent across engineering, AI and data, cloud and DevOps, product, design, QA, and engineering leadership—serving SaaS, fintech, healthcare, e-commerce, logistics, and professional services teams.'],
  ['How do your fees work?', 'Direct hire is a success-based fee owed only when you make a hire. Contract and contract-to-hire are billed at a transparent hourly or monthly rate that includes payroll and compliance. We confirm terms before any work begins.'],
]
