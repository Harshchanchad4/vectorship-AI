export const solutionLinks = [{title:'AI Agents & Agentic Automation',href:'/solutions/ai-automation',copy:'Autonomous agents, multi-agent systems, copilots, RAG, and workflow automation.'},{title:'Software Engineering',href:'/solutions/software-engineering',copy:'SaaS platforms, APIs, backends, and modern product architecture.'},{title:'Mobile Engineering',href:'/solutions/mobile',copy:'Cross-platform and native mobile products built for real users.'},{title:'Cloud & DevOps',href:'/solutions/cloud-devops',copy:'Secure infrastructure, CI/CD, observability, and scale.'}]
export const serviceLinks = [
  {title:'AI Agents & Agentic Automation',href:'/solutions/ai-automation',copy:'Autonomous agents, copilots, and intelligent automation built to run in production—not just demos.',points:['Multi-agent orchestration and tool use','RAG pipelines grounded in your own data','Copilots embedded in existing workflows','Human-in-the-loop guardrails and evals']},
  {title:'Web & Software Engineering',href:'/solutions/software-engineering',copy:'Modern applications and APIs with an architecture that stays maintainable as you scale.',points:['Product web apps, portals, and dashboards','Well-documented, versioned APIs','Scalable, testable system architecture','Performance, accessibility, and QA baked in']},
  {title:'Mobile Engineering',href:'/solutions/mobile',copy:'Reliable mobile products built with the right technology for your users and roadmap.',points:['Cross-platform React Native and Flutter','Native iOS and Android where it counts','Offline-first behavior and real-time sync','App Store and Play Store delivery']},
  {title:'Backend & API Engineering',copy:'Durable services and clean data models that hold up under real-world load and change.',points:['Robust services and clean data models','Third-party and internal integrations','Event-driven and async processing','Auth, rate limiting, and observability']},
  {title:'Data Engineering & Analytics',copy:'Pipelines, warehouses, and analytics that turn scattered data into decisions people trust.',points:['Ingestion and ETL/ELT pipelines','Warehouses and lakehouse modeling','Dashboards and self-serve analytics','Data quality, lineage, and governance']},
  {title:'Cloud & DevOps',href:'/solutions/cloud-devops',copy:'Deployment automation and infrastructure that make shipping safe, repeatable, and fast.',points:['CI/CD and infrastructure as code','Containers and orchestration','Monitoring, logging, and alerting','Security hardening and cost control']},
  {title:'Product Development',copy:'From early product direction to production-ready software, with iteration guided by real usage.',points:['Discovery and product direction','Rapid prototyping and MVPs','Iterative delivery to production','Analytics-informed iteration']},
  {title:'Technology Modernization',copy:'Reduce technical drag and create a clear, low-risk path off aging systems.',points:['Legacy assessment and roadmap','Incremental refactoring and rewrites','Cloud and framework migration','Lower technical debt and risk']},
  {title:'Maintenance & Scaling',copy:'Keep important systems healthy, secure, and ready to grow long after launch.',points:['Proactive monitoring and support','Performance and scalability tuning','Security patching and upgrades','Ongoing feature development']},
]
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

/* ── Industries & Domains ──────────────────────────────────────────────── */

export const industryLinks = [
  { title: 'Fintech & Financial Services', href: '/industries/fintech', copy: 'Secure, compliant payment platforms, trading tools, dashboards, and financial integrations.' },
  { title: 'Healthcare & Health Tech', href: '/industries/healthcare', copy: 'HIPAA-aware systems, patient platforms, and clinical workflows built on privacy by design.' },
  { title: 'SaaS & Startups', href: '/industries/saas-startups', copy: 'Multi-tenant product platforms and MVPs built to launch fast and scale cleanly.' },
  { title: 'E-commerce & Retail', href: '/industries/ecommerce', copy: 'Storefronts, checkout, and backend systems engineered for conversion and scale.' },
  { title: 'Logistics & Supply Chain', href: '/industries/logistics', copy: 'Tracking, routing, and automation that removes operational friction end to end.' },
  { title: 'Professional Services', href: '/industries/professional-services', copy: 'Client portals, workflow automation, and AI copilots for expert-led teams.' },
]

export type Industry = {
  title: string
  copy: string
  eyebrow: string
  seoTitle: string
  seoDescription: string
  items: string[]
  sections: [string, string][]
  outcomesTitle: string
  outcomesCopy: string
  outcomes: string[]
  faqs: [string, string][]
}

export const industryData: Record<string, Industry> = {
  fintech: {
    title: 'Fintech software built for trust, compliance, and scale.',
    copy: 'We build secure financial products—payment platforms, lending tools, trading dashboards, and banking integrations—where correctness, auditability, and regulatory compliance are engineered in from the first commit, not bolted on before launch.',
    eyebrow: 'FINTECH & FINANCIAL SERVICES',
    seoTitle: 'Fintech Software Development Company | Payments, Banking & Compliance',
    seoDescription: 'Custom fintech software development: secure payment platforms, lending and trading systems, banking API integrations, and compliant financial dashboards built by a senior engineering team.',
    items: ['Payment platforms', 'Lending & underwriting', 'Trading & investing tools', 'Banking API integrations', 'KYC / AML workflows', 'Fraud detection', 'Financial dashboards', 'Ledger & reconciliation', 'PCI-DSS compliance', 'Open banking', 'Wallets & payouts', 'Regulatory reporting'],
    sections: [
      ['What we build', 'Payment and payout platforms, lending and underwriting engines, trading and portfolio tools, and the banking, card, and ledger integrations behind them—engineered for accuracy and auditability.'],
      ['Security & compliance first', 'PCI-DSS-aware architecture, encryption in transit and at rest, least-privilege access, and full audit trails, so security reviews and regulatory obligations are met by design rather than patched later.'],
      ['Integrations that matter', 'Stripe, Plaid, and core banking, card, KYC/AML, and open-banking providers connected cleanly, with reconciliation and idempotency handled so money movement stays correct under real-world failure.'],
      ['AI where it earns trust', 'Fraud detection, document intelligence, and financial copilots built with guardrails, explainability, and human-in-the-loop review—so automation supports decisions without becoming a black box.'],
    ],
    outcomesTitle: 'What you get from a fintech engagement.',
    outcomesCopy: 'A financial system you can defend in a security review and an audit—not just demo to investors.',
    outcomes: ['An architecture designed around correctness, idempotency, and auditability of every transaction', 'Security controls and access boundaries mapped to PCI-DSS and your regulatory scope', 'Clean integrations with payment, banking, and KYC/AML providers, with reconciliation built in', 'Fraud and risk tooling with explainable, human-reviewable decisions', 'Complete audit logging so compliance and disputes are traceable end to end', 'Documentation your compliance, security, and finance teams can actually rely on'],
    faqs: [
      ['Do you have experience with financial compliance and regulations?', 'Yes. We build to PCI-DSS-aware standards and design around KYC/AML, SOC 2, and audit requirements. We are engineers, not your compliance authority, so we work alongside your legal and compliance teams—but security, access control, and audit logging are engineered in from the start.'],
      ['Which payment and banking providers do you integrate with?', 'Commonly Stripe, Plaid, and major card, ACH, core-banking, and open-banking APIs. We handle reconciliation, idempotency, and failure recovery so money movement stays correct even when a provider or network call fails.'],
      ['How do you keep financial data and transactions secure?', 'Encryption in transit and at rest, least-privilege access, secrets management, tokenization of sensitive data, and complete audit trails—reviewed against your regulatory scope rather than a generic checklist.'],
      ['Can you build fraud detection or AI features for a financial product?', 'Yes. We build fraud and risk models, document intelligence, and financial copilots with guardrails, explainability, and human-in-the-loop review, so automated decisions remain defensible and auditable.'],
    ],
  },
  healthcare: {
    title: 'Healthcare software that respects patients, privacy, and clinical reality.',
    copy: 'We build health-tech platforms—patient portals, telehealth, clinical tools, and data systems—where privacy, reliability, and the way clinicians actually work come first. HIPAA-aware architecture and interoperability are part of the design, not a late-stage scramble.',
    eyebrow: 'HEALTHCARE & HEALTH TECH',
    seoTitle: 'Healthcare Software Development Company | HIPAA, Telehealth & Health Tech',
    seoDescription: 'HIPAA-aware healthcare software development: patient portals, telehealth platforms, clinical workflow tools, EHR/FHIR integrations, and secure health data systems built by senior engineers.',
    items: ['Patient portals', 'Telehealth platforms', 'Clinical workflow tools', 'EHR / EMR integration', 'HL7 & FHIR', 'HIPAA-aware architecture', 'Scheduling & intake', 'Remote monitoring', 'Health data pipelines', 'Care coordination', 'Medical device backends', 'Analytics & reporting'],
    sections: [
      ['What we build', 'Patient portals, telehealth and remote-monitoring platforms, clinical and care-coordination tools, and the secure data pipelines and integrations that connect them to the systems providers already use.'],
      ['Privacy by design', 'HIPAA-aware architecture with encryption, strict access control, audit logging, and data-minimization—so protected health information is safeguarded structurally, not by policy alone.'],
      ['Interoperability', 'HL7, FHIR, and EHR/EMR integrations that let your product exchange data with existing clinical systems instead of becoming another isolated island of information.'],
      ['Built for clinical workflows', 'We design around how clinicians and patients actually behave—reducing clicks, respecting real care pathways, and keeping the system reliable when it matters most.'],
    ],
    outcomesTitle: 'What you get from a healthcare engagement.',
    outcomesCopy: 'A health product that clears a privacy review and fits the way care is actually delivered.',
    outcomes: ['HIPAA-aware architecture with encryption, access control, and full audit logging', 'EHR/EMR interoperability via HL7 and FHIR, not a walled-off data silo', 'Workflows designed around real clinical and patient behavior, validated early', 'A reliability and data-integrity plan for systems people depend on', 'Clear separation and handling of PHI across every environment', 'Documentation your compliance and clinical stakeholders can review with confidence'],
    faqs: [
      ['Do you build HIPAA-compliant software?', 'We build HIPAA-aware systems—encryption, access control, audit logging, and data minimization engineered in from the start. Compliance is organizational as well as technical, so we work with your compliance team and can operate under a BAA, while owning the architecture and safeguards on the engineering side.'],
      ['Can you integrate with our EHR or EMR system?', 'Yes. We work with HL7 and FHIR and integrate with major EHR/EMR platforms so your product can exchange clinical data securely rather than living in isolation.'],
      ['How do you protect patient health information (PHI)?', 'PHI is encrypted in transit and at rest, access is least-privilege and logged, environments are separated, and we minimize where sensitive data flows—so protection is structural rather than dependent on policy alone.'],
      ['Can you build telehealth or remote patient monitoring features?', 'Yes. We build telehealth, scheduling, intake, and remote-monitoring platforms, including the secure video, messaging, and device-data pipelines behind them.'],
    ],
  },
  'saas-startups': {
    title: 'SaaS platforms and MVPs built to launch fast and scale cleanly.',
    copy: 'We help founders and product teams turn an idea into a real, revenue-ready SaaS product—multi-tenant architecture, billing, auth, and the core features that matter—shipped quickly without the technical debt that stalls the next round of growth.',
    eyebrow: 'SAAS & STARTUPS',
    seoTitle: 'SaaS Development Company for Startups | MVP & Multi-Tenant Platforms',
    seoDescription: 'SaaS and startup software development: multi-tenant platforms, MVPs, subscription billing, authentication, and product engineering built to launch fast and scale by a senior team.',
    items: ['MVP development', 'Multi-tenant SaaS', 'Subscription billing', 'Authentication & SSO', 'Admin & analytics dashboards', 'Usage metering', 'Role-based access', 'API & integrations', 'Onboarding flows', 'Feature flags', 'Scalable architecture', 'Product analytics'],
    sections: [
      ['What we build', 'End-to-end SaaS products: multi-tenant platforms, subscription billing, authentication and SSO, admin and analytics dashboards, and the APIs and integrations customers expect.'],
      ['Ship the MVP that proves it', 'We scope to the smallest product that validates the business, ship it fast, and keep the architecture clean enough to build on—so early speed does not become next year’s rewrite.'],
      ['Built to scale with revenue', 'Multi-tenancy, metering, and infrastructure sized to real usage, with a documented path to scale so growth is an upgrade, not an emergency.'],
      ['Founder-friendly delivery', 'Direct access to senior engineers, visible milestones, and honest tradeoff conversations—so a lean team can move fast without flying blind.'],
    ],
    outcomesTitle: 'What you get from a SaaS engagement.',
    outcomesCopy: 'A product you can sell and keep building on—not a demo that collapses under the first ten paying customers.',
    outcomes: ['A launched MVP scoped around what actually validates the business', 'Multi-tenant architecture with clean data isolation between customers', 'Subscription billing, authentication, and access control wired to real providers', 'An admin and analytics layer so you can see what users actually do', 'A codebase clean enough to raise on and hire into, not rewrite', 'A clear path to scale infrastructure as paying customers grow'],
    faqs: [
      ['Can you build an MVP quickly without creating technical debt?', 'Yes. We scope to the smallest product that validates the business and ship it fast, while keeping the architecture clean enough to extend—so speed early doesn’t force a rewrite later.'],
      ['Do you handle subscription billing and payments?', 'Yes. We integrate Stripe and similar providers for subscriptions, usage-based billing, and metering, including the plan, trial, and upgrade logic behind them.'],
      ['How do you build multi-tenant SaaS architecture?', 'We design tenant isolation, role-based access, and data separation from the start, choosing the right multi-tenancy model for your security needs and scale rather than defaulting to one pattern.'],
      ['Can you work with our existing product or take it over from another team?', 'Yes. We regularly inherit existing SaaS codebases—auditing the architecture first, then extending it or planning a staged improvement rather than a risky full rebuild.'],
    ],
  },
  ecommerce: {
    title: 'E-commerce and retail systems engineered for conversion and scale.',
    copy: 'We build storefronts, checkout flows, and the backend systems behind them—inventory, orders, payments, and integrations—engineered for fast pages, high conversion, and the traffic spikes that come with a successful campaign.',
    eyebrow: 'E-COMMERCE & RETAIL',
    seoTitle: 'E-commerce Development Company | Storefronts, Checkout & Retail Systems',
    seoDescription: 'E-commerce and retail software development: high-converting storefronts, custom checkout, headless commerce, inventory and order systems, and payment integrations built by senior engineers.',
    items: ['Custom storefronts', 'Headless commerce', 'Checkout optimization', 'Payment integrations', 'Inventory management', 'Order management', 'Shopify & platform builds', 'Product search', 'Subscriptions & recurring', 'ERP / POS integration', 'Performance & Core Web Vitals', 'Personalization'],
    sections: [
      ['What we build', 'High-converting storefronts, custom and headless checkout, and the inventory, order, payment, and fulfillment systems behind them—connected to the platforms and marketplaces you already sell on.'],
      ['Engineered for conversion', 'Fast pages, strong Core Web Vitals, and friction-free checkout, because in commerce, performance and conversion are the same conversation.'],
      ['Ready for the spike', 'Architecture that stays fast and correct through a launch, a sale, or a seasonal peak—so a successful campaign doesn’t take the store down.'],
      ['Connected operations', 'Clean integrations with payments, ERP, POS, and fulfillment so inventory, orders, and finance stay in sync instead of drifting apart.'],
    ],
    outcomesTitle: 'What you get from an e-commerce engagement.',
    outcomesCopy: 'A store that loads fast, converts, and stays correct when traffic and orders spike.',
    outcomes: ['A storefront tuned for Core Web Vitals and real-world conversion', 'A checkout flow engineered to reduce friction and abandonment', 'Inventory, order, and payment systems that stay consistent under load', 'Integrations with your ERP, POS, and fulfillment so operations stay in sync', 'Architecture that survives launch-day and seasonal traffic spikes', 'A maintainable codebase you or another team can keep extending'],
    faqs: [
      ['Do you build on Shopify, or custom, or headless?', 'All three. We build on Shopify and similar platforms, custom storefronts, and headless commerce—recommending the approach that fits your catalog, customization needs, and scale rather than defaulting to one.'],
      ['Can you improve our store’s speed and conversion?', 'Yes. We optimize Core Web Vitals, page performance, and checkout friction—the factors most directly tied to conversion—starting from a measured audit rather than guesswork.'],
      ['Will the store stay up during a big sale or launch?', 'That’s a core design goal. We architect for peak traffic with caching, scalable infrastructure, and load testing so campaigns don’t take the store down.'],
      ['Can you integrate our store with our ERP, POS, or fulfillment systems?', 'Yes. We build integrations that keep inventory, orders, payments, and finance in sync across your commerce platform, ERP, POS, and fulfillment providers.'],
    ],
  },
  logistics: {
    title: 'Logistics and supply-chain software that removes operational friction.',
    copy: 'We build the tracking, routing, and automation systems that keep operations moving—real-time visibility, dispatch and fleet tools, warehouse and inventory systems, and the integrations that connect a fragmented supply chain into one clear picture.',
    eyebrow: 'LOGISTICS & SUPPLY CHAIN',
    seoTitle: 'Logistics Software Development Company | Supply Chain, Fleet & Tracking',
    seoDescription: 'Logistics and supply-chain software development: real-time tracking, route optimization, fleet and dispatch tools, warehouse and inventory systems, and operations automation built by senior engineers.',
    items: ['Real-time tracking', 'Route optimization', 'Fleet management', 'Dispatch systems', 'Warehouse management', 'Inventory systems', 'Order & shipment management', 'Carrier integrations', 'Telematics & IoT', 'Operations dashboards', 'Workflow automation', 'Predictive ETA'],
    sections: [
      ['What we build', 'Real-time tracking and visibility platforms, route and dispatch optimization, fleet and warehouse management, and the carrier, telematics, and ERP integrations that tie operations together.'],
      ['Visibility across the chain', 'One accurate, real-time picture of shipments, inventory, and assets—so decisions are made on live data instead of stale spreadsheets and phone calls.'],
      ['Automation that removes friction', 'We automate the repetitive coordination—dispatch, status updates, exceptions, and reordering—so your team spends time on problems, not data entry.'],
      ['Built for the field', 'Reliable mobile and offline-tolerant tools for drivers and warehouse staff, plus dashboards that give operations and management the control they need.'],
    ],
    outcomesTitle: 'What you get from a logistics engagement.',
    outcomesCopy: 'One live, accurate view of your operation—and automation that gives your team hours back.',
    outcomes: ['Real-time visibility into shipments, inventory, and assets in one place', 'Route, dispatch, or warehouse optimization tuned to your actual constraints', 'Automation of the repetitive coordination work that eats operational time', 'Integrations across carriers, telematics, ERP, and existing systems', 'Reliable field-facing tools for drivers and warehouse staff', 'Operations dashboards that turn raw activity into decisions'],
    faqs: [
      ['Can you build real-time tracking and visibility?', 'Yes. We build real-time tracking for shipments, vehicles, and inventory using telematics, GPS, and IoT data, surfaced through dashboards and predictive ETAs your team can act on.'],
      ['Do you integrate with carriers, ERP, or existing logistics systems?', 'Yes. We connect carrier APIs, telematics providers, ERP, WMS, and legacy systems so data flows into one picture instead of living in disconnected tools.'],
      ['Can you optimize routing or dispatch?', 'Yes. We build route and dispatch optimization tuned to your real constraints—capacity, time windows, cost, and service levels—rather than a generic solver.'],
      ['Will field tools work with poor or no connectivity?', 'We design driver and warehouse tools to tolerate spotty connectivity, syncing reliably when a connection returns so field work isn’t blocked by dead zones.'],
    ],
  },
  'professional-services': {
    title: 'Software and AI copilots for expert-led professional teams.',
    copy: 'We build the client portals, workflow automation, and AI copilots that let professional-services firms—legal, accounting, consulting, agencies—scale their expertise without scaling headcount, turning manual, document-heavy work into leverage.',
    eyebrow: 'PROFESSIONAL SERVICES',
    seoTitle: 'Software for Professional Services | Client Portals, Automation & AI Copilots',
    seoDescription: 'Custom software for professional-services firms: client portals, workflow and document automation, practice-management tools, and AI copilots for legal, accounting, consulting, and agencies.',
    items: ['Client portals', 'Workflow automation', 'Document automation', 'AI copilots & assistants', 'Practice management', 'Time & billing', 'Knowledge retrieval (RAG)', 'Proposal & contract tools', 'Reporting dashboards', 'CRM integration', 'e-Signature & intake', 'Compliance workflows'],
    sections: [
      ['What we build', 'Client portals, practice-management and billing tools, document and workflow automation, and AI copilots that put a firm’s own knowledge and process to work.'],
      ['Turn expertise into leverage', 'We automate the repetitive, document-heavy work—intake, drafting, review, reporting—so senior people spend time on judgment, not busywork.'],
      ['AI grounded in your knowledge', 'RAG-based copilots and assistants built on your own documents, precedents, and processes, with guardrails and human review—so answers reflect your firm, not a generic model.'],
      ['Client-facing polish', 'Portals and workflows that make the client experience feel organized and premium, reflecting the quality of the advice behind them.'],
    ],
    outcomesTitle: 'What you get from a professional-services engagement.',
    outcomesCopy: 'Systems that let your best people do more of what only they can do.',
    outcomes: ['A client portal that makes the engagement feel organized and premium', 'Automation of the document-heavy, repetitive work that consumes billable hours', 'AI copilots grounded in your own knowledge, with human-in-the-loop review', 'Practice, billing, and reporting tools tailored to how your firm operates', 'Integrations with the CRM, e-signature, and tools you already use', 'A system your team adopts because it removes friction, not adds it'],
    faqs: [
      ['Can you build AI copilots trained on our firm’s documents and knowledge?', 'Yes. We build RAG-based copilots grounded in your own documents, precedents, and processes—with guardrails and human review—so responses reflect your firm’s knowledge rather than generic model output.'],
      ['What kinds of work can you automate for a professional-services firm?', 'Typically the repetitive, document-heavy work: intake, drafting, review, data extraction, reporting, and status updates—freeing senior people for judgment-driven work.'],
      ['Can you build a client portal that integrates with our existing tools?', 'Yes. We build client portals and workflows that integrate with your CRM, billing, e-signature, and document systems so clients and staff work in one coherent place.'],
      ['How do you keep confidential client data secure?', 'Access is least-privilege and logged, sensitive data is encrypted and minimized, and AI features are scoped so confidential material isn’t exposed—reviewed against your confidentiality obligations.'],
    ],
  },
}

export const siteOverview = [
  { label: 'SOLUTIONS', title: 'Technology matched to the problem, not the trend.', copy: 'How we pick the right architecture—AI, software, mobile, or cloud—based on the outcome you actually need.', href: '/solutions', cta: 'See solutions' },
  { label: 'SERVICES', title: 'The full engineering menu, end to end.', copy: 'Every service we offer, from AI agents to backend systems to DevOps, laid out in one place.', href: '/services', cta: 'See services' },
  { label: 'APPROACH', title: 'A delivery process built to stay honest.', copy: 'The five stages we run every engagement through, and how we keep communication clear along the way.', href: '/about#method', cta: 'See our approach' },
  { label: 'WORK', title: 'The kinds of problems we take on.', copy: 'A look at the engagements we support while our public case study library comes together.', href: '/work', cta: 'See our work' },
  { label: 'RECRUITMENT', title: 'Need to grow your own team instead?', copy: 'How we help you hire vetted software, AI, and cloud talent—permanent, contract, or contract-to-hire.', href: '/recruitment', cta: 'See recruitment' },
  { label: 'ABOUT', title: 'Who is actually behind the work.', copy: 'The team, the standards, and the reasoning behind how Nexio operates as a partner.', href: '/about', cta: 'See about us' },
]

export const serviceFaqs: [string, string][] = [
  ['What does a software development company like Nexio actually do?', 'We design, build, and scale custom software—web platforms, mobile apps, AI agents, data pipelines, and cloud infrastructure—for startups and growing companies that need a senior engineering partner.'],
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

/* ── Careers ────────────────────────────────────────────────────────────── */

export const careerValues: [string, string][] = [
  ['Senior-only team', 'You work alongside experienced engineers, not a junior bench. Every project is staffed with specialists who own their craft.'],
  ['Real ownership', 'You own problems end to end—from the first conversation to production—rather than picking up tickets someone else scoped.'],
  ['Direct communication', 'No layers of account managers or status theatre. You talk to the people doing the work and to the clients you build for.'],
  ['Meaningful work', 'We take on serious software and AI problems for ambitious teams, so the work you ship actually matters to a business.'],
  ['Remote-first, async-friendly', 'Work from where you do your best thinking. We optimize for focus and written clarity over meetings and presence.'],
  ['Growth without bureaucracy', 'A dedicated learning budget, exposure to modern AI and infra, and a flat structure where good ideas win regardless of title.'],
]

// [role, team, type, location, copy]
export const careerOpenings: [string, string, string, string, string][] = []

export const careerProcess = [
  ['01', 'Application', 'Send your CV or profile and a short note on the kind of problems you want to work on. Every application is read by an engineer.'],
  ['02', 'Intro Conversation', 'A relaxed call to understand your experience, what you are looking for, and whether the work and team are a genuine fit.'],
  ['03', 'Technical Deep-Dive', 'A practical, real-world technical conversation or exercise—no trick puzzles, just the kind of work you would actually do here.'],
  ['04', 'Team & Values Fit', 'A conversation about how you work, communicate, and collaborate, so both sides know the day-to-day will click.'],
  ['05', 'Offer & Onboarding', 'A clear offer and a structured onboarding that gets you into meaningful work quickly, with support from day one.'],
]

export const careerFaqs: [string, string][] = [
  ['Do you hire fully remote?', 'Yes. We are remote-first and async-friendly. Most of the team works fully remotely across time zones—we optimize for focus and written clarity rather than presence.'],
  ['Do you hire junior engineers?', 'Our client work is staffed senior-only, so most open roles ask for solid experience. We do occasionally open focused positions for exceptional early-career engineers—if that is you, apply and tell us why.'],
  ['What does your interview process look like?', 'A short intro conversation, a practical technical deep-dive based on real work (no trick puzzles), and a team-fit conversation—then an offer. The whole process is usually wrapped up in a couple of weeks.'],
  ['What is the tech stack I would work with?', 'It varies by project, but commonly TypeScript, React/Next.js, Node, Python, and Go, with AI work on OpenAI, Anthropic, and open models, and cloud on AWS, GCP, and Kubernetes. We pick the right tool for the problem.'],
  ['I don’t see a role that fits. Can I still apply?', 'Absolutely. We are always interested in talking to strong engineers, designers, and AI specialists. Send us an open application and tell us what you want to work on—we will reach out if there is a fit.'],
  ['Do you offer contract or freelance work?', 'Yes. Alongside full-time roles we work with contract and freelance specialists for specific projects. Mention your preferred engagement type when you apply.'],
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
