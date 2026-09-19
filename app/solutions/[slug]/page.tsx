import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { CTA, PageHero, SectionHeading, SiteShell } from '@/components/site'
import { Faq } from '@/components/faq'
import { pageMetadata } from '@/lib/metadata'

type Solution = {
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

const data: Record<string, Solution> = {
  'ai-automation': {
    title: 'AI agents that understand, decide, and act.',
    copy: 'AI agents are our core specialty. We design and ship production-grade autonomous agents, multi-agent systems, copilots, and RAG pipelines on OpenAI, Anthropic, and open-source models—with evaluation, guardrails, and observability engineered in from day one.',
    eyebrow: 'AI AGENTS & AGENTIC AUTOMATION',
    seoTitle: 'AI Agent Development & Agentic Automation Services',
    seoDescription: 'Production-grade AI agents, multi-agent systems, RAG pipelines, LLM copilots, and MCP tool-use built on OpenAI, Anthropic, and open models—with evals, guardrails, and observability.',
    items: ['Autonomous AI agents', 'Multi-agent systems', 'RAG & retrieval pipelines', 'AI copilots & assistants', 'MCP & tool-use', 'Function calling', 'Workflow automation', 'Document intelligence', 'Voice & chat agents', 'Model fine-tuning', 'Evals & guardrails', 'Agent observability'],
    sections: [
      ['What we build', 'Autonomous and multi-agent systems, copilots, retrieval pipelines, tool-using agents, and document workflows—engineered to fit the way your team already works.'],
      ['How we build agents', 'We map the workflow, define where autonomy helps, prototype against real data, then ship behind clear boundaries with tool-use, memory, and human-in-the-loop control.'],
      ['Models & tooling', 'OpenAI, Anthropic Claude, and open-source models via LangChain, LlamaIndex, and the Model Context Protocol (MCP)—chosen per task, with vector databases for retrieval.'],
      ['Reliability & safety', 'Every agent ships with evaluation suites, guardrails, permission boundaries, and observability—so you can trust what it does in production, not just in a demo.'],
    ],
    outcomesTitle: 'What you get from an AI agent engagement.',
    outcomesCopy: 'A production system, not a proof of concept—scoped around the workflow you actually need automated.',
    outcomes: ['A scoped agent architecture mapped to a real workflow, not a generic chatbot', 'Production deployment with logging, guardrails, and permission boundaries', 'An evaluation suite so you can measure accuracy and regressions over time', 'Human-in-the-loop controls for anything that shouldn’t run fully autonomous', 'Documentation your team can use to extend or hand off the system', 'A clear view of model, hosting, and inference cost before you commit'],
    faqs: [
      ['How is this different from just calling the OpenAI or Anthropic API?', 'Calling a model API is the easy part. The work is in retrieval quality, tool-use design, memory, evaluation, guardrails, and the orchestration that turns a single prompt into a reliable multi-step agent your team can trust in production.'],
      ['Do you build with our existing data and internal tools?', 'Yes. Most agent projects start with your internal documents, databases, or APIs as the source of truth via RAG or direct tool integration, rather than relying on model knowledge alone.'],
      ['How do you keep an autonomous agent from doing something wrong?', 'Every agent ships with permission boundaries, guardrails, evaluation suites, and human-in-the-loop checkpoints for higher-risk actions, so autonomy is scoped deliberately rather than open-ended.'],
      ['Which AI models and frameworks do you use?', 'We work with OpenAI, Anthropic, and open-source models, using LangChain, LlamaIndex, and the Model Context Protocol (MCP) for orchestration and tool-use—choosing the stack based on the task, not a fixed preference.'],
    ],
  },
  'software-engineering': {
    title: 'Software engineered for today—and designed for what’s next.',
    copy: 'Build durable digital products with a team that can think across product, frontend, backend, integrations, testing, and deployment.',
    eyebrow: 'SOFTWARE ENGINEERING',
    seoTitle: 'Custom Software Engineering & Web Development Services',
    seoDescription: 'SaaS platforms, web applications, APIs, and backend systems built with React, Next.js, TypeScript, Node.js, and Python by a senior engineering team.',
    items: ['SaaS platforms', 'Web applications', 'Backend systems', 'APIs', 'Enterprise systems', 'Third-party integrations', 'Modernization', 'Testing & DevOps'],
    sections: [
      ['A full product view', 'We connect product intent to technical decisions so the system stays useful after the first release.'],
      ['Capabilities, not logo walls', 'React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, Redis, AWS, and Docker are tools we apply when they fit.'],
      ['Built for change', 'Clear boundaries, testing, documentation, and deployment practices make the next iteration easier.'],
    ],
    outcomesTitle: 'What you get from a software engagement.',
    outcomesCopy: 'A codebase you can keep building on, not a one-off delivery that quietly becomes technical debt.',
    outcomes: ['A working product milestone you can see and test early, not just at the end', 'Architecture decisions documented so the next engineer isn’t guessing', 'Automated tests around the logic that actually needs to stay correct', 'CI/CD so releases are routine, not risky events', 'Clean handoff: source, docs, and infrastructure access—no lock-in', 'A technical point of contact who can explain every decision made'],
    faqs: [
      ['Do you work with an existing codebase, or only greenfield projects?', 'Both. We regularly take over existing codebases—auditing the architecture first, then either extending it directly or planning a staged modernization if that’s the better path.'],
      ['What does your technology stack look like?', 'We lean on React, Next.js, TypeScript, Node.js, and Python, with PostgreSQL, MongoDB, and Redis for data, and AWS or Docker for infrastructure—but the stack is chosen for the problem, not applied by default.'],
      ['How do you scope a fixed-price project vs. an ongoing team?', 'Well-defined builds with a clear end state are usually fixed-scope. Products that will keep evolving after launch are better served by an embedded team on a rolling engagement—we’ll recommend whichever fits during discovery.'],
      ['Who owns the code and infrastructure after the engagement?', 'You do. Source code, documentation, and infrastructure access are yours from day one—there’s no proprietary lock-in to a framework or hosting arrangement only we control.'],
    ],
  },
  mobile: {
    title: 'Mobile products people actually want to use.',
    copy: 'Create focused, reliable mobile experiences that connect cleanly to the systems behind them and stay maintainable as the product grows.',
    eyebrow: 'MOBILE ENGINEERING',
    seoTitle: 'Mobile App Development Services (iOS, Android & Cross-Platform)',
    seoDescription: 'React Native, Flutter, iOS, and Android app development with clean API integration, authentication, payments, and confident store deployment.',
    items: ['React Native', 'Flutter', 'iOS', 'Android', 'API integration', 'Authentication', 'Payments', 'Push notifications', 'Analytics', 'App deployment'],
    sections: [
      ['Experience and systems', 'We design the mobile surface and the APIs, auth, payments, notifications, and analytics it depends on.'],
      ['Cross-platform where it helps', 'React Native and Flutter can create speed and consistency; native technologies remain available when the product needs them.'],
      ['Release with confidence', 'Testing, observability, and store deployment are part of shipping—not an afterthought.'],
    ],
    outcomesTitle: 'What you get from a mobile engagement.',
    outcomesCopy: 'A shipped app in the store—backed by the APIs, auth, and payments it actually depends on.',
    outcomes: ['A native-feeling app built in React Native, Flutter, or fully native where it matters', 'Authentication, payments, and push notifications wired to real providers, not stubs', 'API and backend integration handled as part of the same engagement', 'App Store and Google Play submission managed end-to-end', 'Crash reporting and analytics in place before launch, not after an incident', 'A maintenance plan so OS updates don’t quietly break the app'],
    faqs: [
      ['Should we build native or cross-platform?', 'React Native or Flutter cover most product needs with one codebase across iOS and Android. We move to native only when a feature genuinely requires it—we’ll tell you plainly if that’s your situation instead of defaulting to it.'],
      ['Do you handle App Store and Google Play submission?', 'Yes—provisioning, store listings, review requirements, and submission are part of the engagement, not a separate handoff you have to figure out yourself.'],
      ['Can you build the backend and APIs too, or just the app?', 'Both. Most mobile products need auth, payments, and data APIs behind them, and we regularly build or integrate that backend as part of the same engagement.'],
      ['What happens after launch when iOS or Android update?', 'We offer ongoing maintenance so OS and store policy changes get handled proactively, rather than surfacing as a crash report from a user.'],
    ],
  },
  'cloud-devops': {
    title: 'Infrastructure that keeps your product moving.',
    copy: 'Bring engineering and infrastructure together with secure delivery pipelines, observable systems, and cloud architecture built around the product.',
    eyebrow: 'CLOUD & DEVOPS',
    seoTitle: 'Cloud & DevOps Services (AWS, CI/CD & Infrastructure)',
    seoDescription: 'Secure CI/CD pipelines, infrastructure automation, monitoring, and scalable AWS and Azure cloud architecture built around your product, with Terraform, Docker, and Kubernetes.',
    items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Infrastructure automation', 'Monitoring & observability', 'Security & compliance', 'Cost optimization', 'Zero-downtime deployment'],
    sections: [
      ['Delivery as a capability', 'Automated testing and deployment pipelines reduce the friction between a finished change and a useful release, so shipping becomes routine instead of risky.'],
      ['Infrastructure as code', 'Environments defined in Terraform or equivalent tooling so infrastructure is versioned, reviewable, and reproducible—not a snowflake server someone configured by hand.'],
      ['Operational clarity', 'Monitoring, centralized logging, alerting, and clear runbooks help your team understand what a system is doing in production before it becomes an incident.'],
      ['Scale deliberately', 'We choose the simplest infrastructure that meets current needs, sized to real usage, with a documented path to scale further when the product actually needs it.'],
    ],
    outcomesTitle: 'What you get from a cloud & DevOps engagement.',
    outcomesCopy: 'Infrastructure your team can operate with confidence, not a black box only one person understands.',
    outcomes: ['A CI/CD pipeline so deploys are routine, tested, and reversible', 'Infrastructure defined as code (Terraform or equivalent), not manual console changes', 'Centralized monitoring, logging, and alerting before something breaks in production', 'A security and access review across cloud accounts, secrets, and permissions', 'A cost breakdown of your current cloud spend with concrete optimization options', 'Runbooks and documentation your team can actually follow without you on call'],
    faqs: [
      ['We already have infrastructure—do you have to rebuild it?', 'No. We start with an audit of what exists, then improve or migrate incrementally—wrapping in CI/CD, monitoring, and infrastructure-as-code around what’s already working rather than a risky rebuild from scratch.'],
      ['Which cloud providers do you work with?', 'Primarily AWS, Azure, and GCP, using Terraform for infrastructure as code, Docker and Kubernetes for containerization, and standard CI/CD tooling—matched to what your team already uses where possible.'],
      ['Can you help reduce our current cloud costs?', 'Yes—a cost review is part of most engagements. Right-sizing resources, reserved capacity, and removing unused infrastructure typically surface meaningful savings before any architecture changes are needed.'],
      ['Do you offer ongoing support after the infrastructure is set up?', 'Yes. Many clients move from a fixed setup engagement into ongoing monitoring, incident response, and infrastructure maintenance so the system stays healthy as usage grows.'],
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(data).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = data[slug]
  if (!item) return pageMetadata('Solutions', 'VectorShip solution capabilities and engineering services.', '/solutions/' + slug)
  return pageMetadata(item.seoTitle, item.seoDescription, '/solutions/' + slug)
}

export default async function SolutionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = data[slug] || data['software-engineering']
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: item.seoTitle,
    description: item.seoDescription,
    serviceType: item.seoTitle,
    provider: { '@type': 'Organization', name: 'VectorShip AI Solutions', url: 'https://vectorship.ai' },
    areaServed: 'Worldwide',
    url: `https://vectorship.ai/solutions/${slug}`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: item.seoTitle,
      itemListElement: item.items.map(i => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: i } })),
    },
  }
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: item.faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
  return (
    <SiteShell>
      <main>
        <PageHero eyebrow={item.eyebrow} title={item.title} copy={item.copy}>
          <Link href="/contact" className="card-link">Discuss this capability <ArrowUpRight className="size-4" /></Link>
        </PageHero>
        <section className="section shell">
          <SectionHeading eyebrow="CAPABILITIES" title="A practical toolkit for the work ahead." />
          <div className="tag-list large-tags mt-10">{item.items.map(i => <span key={i}>{i}</span>)}</div>
          <div className="detail-sections mt-20">
            {item.sections.map(([title, copy]) => (
              <article key={title}>
                <p className="eyebrow">{title}</p>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section approach-section">
          <div className="shell pillars-panel">
            <div className="pillars-panel-main">
              <p className="eyebrow">WHAT YOU GET</p>
              <h3>{item.outcomesTitle}</h3>
              <p className="pillars-copy">{item.outcomesCopy}</p>
              <Link href="/contact" className="card-link">Talk to an engineer <ArrowUpRight className="size-4" /></Link>
            </div>
            <ul className="pillars-points">
              {item.outcomes.map(pt => (
                <li key={pt}><Check className="size-4 shrink-0" aria-hidden="true" /> {pt}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="section shell">
          <SectionHeading eyebrow="COMMON QUESTIONS" title={`Questions about ${item.eyebrow.toLowerCase()}.`} />
          <Faq items={item.faqs} />
        </section>
        <CTA title="Ready to explore the opportunity?" copy="Bring us the problem. We will help you find the right technical path." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </main>
    </SiteShell>
  )
}
