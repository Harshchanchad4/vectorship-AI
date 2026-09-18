import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CTA, PageHero, SectionHeading, SiteShell } from '@/components/site'
import { pageMetadata } from '@/lib/metadata'

type Solution = {
  title: string
  copy: string
  eyebrow: string
  seoTitle: string
  seoDescription: string
  items: string[]
  sections: [string, string][]
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
  },
  'cloud-devops': {
    title: 'Infrastructure that keeps your product moving.',
    copy: 'Bring engineering and infrastructure together with secure delivery pipelines, observable systems, and cloud architecture built around the product.',
    eyebrow: 'CLOUD & DEVOPS',
    seoTitle: 'Cloud & DevOps Services (AWS, CI/CD & Infrastructure)',
    seoDescription: 'Secure CI/CD pipelines, infrastructure automation, monitoring, and scalable AWS and Azure cloud architecture built around your product.',
    items: ['AWS', 'Azure', 'Docker', 'CI/CD', 'Infrastructure automation', 'Monitoring', 'Security', 'Scaling', 'Deployment'],
    sections: [
      ['Delivery as a capability', 'Automated testing and deployment reduce friction between a finished change and a useful release.'],
      ['Operational clarity', 'Monitoring, logging, and clear runbooks help teams understand systems in production.'],
      ['Scale deliberately', 'We choose the simplest infrastructure that meets current needs and leaves a clear path forward.'],
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
        <CTA title="Ready to explore the opportunity?" copy="Bring us the problem. We will help you find the right technical path." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      </main>
    </SiteShell>
  )
}
