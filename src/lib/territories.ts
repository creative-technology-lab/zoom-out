export interface Territory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tagMatches: string[];
}

export const territories: Territory[] = [
  {
    id: 'the-people',
    name: 'The People',
    subtitle: 'Who builds the future of experience',
    description: 'The human side — how creative agencies operate, how teams form, how leaders navigate the shift from craft to orchestration.',
    tagMatches: ['operating-models', 'team-design', 'leadership', 'creative-agencies', 'ai-adoption', 'ai-literacy'],
  },
  {
    id: 'the-governance',
    name: 'The Governance',
    subtitle: 'Enablers, boundaries, trust and ethics',
    description: 'How we build trust into intelligent systems — governance as design, not compliance. Ethics, accountability, and the rules we choose.',
    tagMatches: ['governance', 'trust', 'ethics'],
  },
  {
    id: 'the-experience',
    name: 'The Experience',
    subtitle: 'Experience architecture, holistic design',
    description: 'The technical design of the systems that deliver the future of experience — intelligence architecture, orchestration, and the Experience Brain.',
    tagMatches: ['intelligence-architecture', 'orchestration', 'experience-design', 'immersive', 'physical-digital'],
  },
  {
    id: 'the-tools',
    name: 'The Tools',
    subtitle: 'Tools that deliver the future of experience',
    description: 'The products and platforms that underpin Return on Experience — agentic orchestration, personalisation engines, and the tools brands need.',
    tagMatches: ['ai-agents', 'agentic-workflows', 'octopus', 'synthetic-users', 'agencyos', 'agency-operations'],
  },
  {
    id: 'the-consumer',
    name: 'The Consumer',
    subtitle: 'Human engagement in an AI world',
    description: 'How people interact with intelligent systems — personal AI, the attention economy, digital literacy, and what happens when everyone has an AI filter.',
    tagMatches: ['personal-ai', 'ai-assistants', 'customer-experience', 'marketing', 'loyalty', 'digital-literacy', 'ai-literacy'],
  },
  {
    id: 'zoom-out',
    name: 'Zoom Out',
    subtitle: 'Why it all matters',
    description: 'Stepping back to see the larger shifts — future of work, economics, human purpose, and what happens when intelligence becomes abundant.',
    tagMatches: ['future-of-work', 'innovation', 'human-purpose', 'abundance', 'autonomy'],
  },
];

export function matchTerritory(tags: string[]): Territory | undefined {
  if (!tags.length) return undefined;
  let best: Territory | undefined;
  let bestScore = 0;
  for (const t of territories) {
    const score = tags.filter(tag => t.tagMatches.includes(tag)).length;
    if (score > bestScore) {
      bestScore = score;
      best = t;
    }
  }
  return best;
}
