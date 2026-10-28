const skill = (name) => ({ name, level: null });

export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description: 'Interfaces, design systems, and modular web applications.',
    items: ['React', 'TypeScript', 'Modern.js', 'Mantine UI', 'DevExtreme', 'Storybook', 'Microfrontends'].map(skill),
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    description: 'Application services, APIs, and enterprise integrations.',
    items: ['.NET', 'Node.js', 'NestJS', 'GraphQL', 'Hasura'].map(skill),
  },
  {
    id: 'data-messaging',
    title: 'Data & Messaging',
    description: 'Relational and vector data, queues, and caching.',
    items: ['Microsoft SQL Server', 'PostgreSQL', 'pgvector', 'RabbitMQ', 'Redis'].map(skill),
  },
  {
    id: 'architecture',
    title: 'Software Architecture',
    description: 'System integration, API design, modularity, and trade-offs.',
    items: ['System Integration', 'API Design', 'Microfrontends', 'Enterprise Applications'].map(skill),
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Cloud foundations, containers, delivery, and edge services.',
    items: ['Azure', 'AWS · Foundations', 'Docker', 'Kubernetes', 'Portainer', 'CDN', 'WAF', 'Business Intelligence'].map(skill),
  },
  {
    id: 'applied-ai',
    title: 'Applied AI',
    description: 'Retrieval workflows, vector search, source citations, and operations.',
    items: ['External LLM APIs', 'Embeddings', 'RAG', 'Vector Databases', 'Automated Indexing', 'Source Citations', 'Cost & Latency Monitoring'].map(skill),
  },
];

export const skillLevelGuide = {
  // Keep null until Xavier confirms a level; the UI hides unconfirmed levels.
  levels: ['Exploring', 'Working knowledge', 'Proficient', 'Advanced'],
};
