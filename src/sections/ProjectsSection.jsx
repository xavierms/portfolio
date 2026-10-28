import { Anchor, Badge, Box, Container, Group, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { IconArrowDown, IconArrowUpRight, IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { projects } from '../data/projects';

function DetailBlock({ title, items }) {
  if (!items?.length) return null;
  return (
    <Box>
      <Text className="mono" size="xs" c="dimmed" mb={6}>{title.toUpperCase()}</Text>
      {items.map((item) => <Text key={item} size="sm" c="gray.4" lh={1.8}>{item}</Text>)}
    </Box>
  );
}

function ProjectDetails({ project }) {
  const hasDetails = project.problem || project.requirements?.length || project.solution || project.contribution || project.architecture?.length || project.alternativesEvaluated?.length || project.decisions?.length || project.tradeoffs?.length || project.considerations?.length || project.scalability || project.maintainability || project.result;
  if (!hasDetails) return null;

  return (
    <details className="project-details">
      <summary>Technical overview <IconArrowDown size={15} /></summary>
      <Stack gap="lg" mt="md">
        {project.problem && <DetailBlock title="Problem" items={[project.problem]} />}
        <DetailBlock title="Requirements" items={project.requirements} />
        {project.solution && <DetailBlock title="Solution" items={[project.solution]} />}
        {project.contribution && <DetailBlock title="Contribution" items={[project.contribution]} />}
        <DetailBlock title="Architecture" items={project.architecture} />
        <DetailBlock title="Alternatives evaluated" items={project.alternativesEvaluated} />
        <DetailBlock title="Technical decisions" items={project.decisions} />
        <DetailBlock title="Trade-offs" items={project.tradeoffs} />
        <DetailBlock title="Security & operations considerations" items={project.considerations} />
        {project.scalability && <DetailBlock title="Scalability" items={[project.scalability]} />}
        {project.maintainability && <DetailBlock title="Maintainability" items={[project.maintainability]} />}
        {project.result && <DetailBlock title="Status & results" items={[project.status, project.result]} />}
      </Stack>
    </details>
  );
}

function ProjectCard({ project }) {
  return (
    <Reveal className={project.featured ? 'featured-project' : ''}>
      <Paper className={`project-card${project.featured ? ' project-card-featured' : ''}`} radius="md" withBorder>
        <Box className={`project-art ${project.id === 'chei-rd' ? 'project-art-chei' : 'project-art-rag'}`}>
          <Text className="project-index mono">PROJECT / {project.number}</Text>
          {project.id === 'rag-knowledge-assistant' ? (
            <Box className="rag-art" aria-hidden="true">
              <span className="rag-document">DOCS</span><span className="rag-connector" />
              <span className="rag-vector">VECTOR<br />SEARCH</span><span className="rag-connector" />
              <span className="rag-answer">ANSWER<br /><small>WITH SOURCES</small></span>
            </Box>
          ) : <Text className="chei-mark">CHEI-RD</Text>}
          <Text className="project-category mono">{project.category}</Text>
        </Box>
        <Stack className="project-content" p={{ base: 20, sm: 26 }} gap="sm">
          <Group justify="space-between" align="start">
            <Box>
              {project.role && <Text className="mono" c="dimmed" size="xs" mb={6}>ROLE · {project.role}</Text>}
              <Title order={3} fz={24}>{project.title}</Title>
            </Box>
            <Badge variant="light" color={project.featured ? 'blue' : 'gray'} radius="sm" size="sm" tt="none">{project.status}</Badge>
          </Group>
          <Text size="sm" c="gray.4" lh={1.8}>{project.summary}</Text>
          {project.technologies.length > 0 && (
            <Box mt={4}>
              <Text className="mono" size="xs" c="dimmed" mb={7}>TECHNOLOGIES</Text>
              <Text size="sm" c="gray.4" lh={1.8}>{project.technologies.join('  ·  ')}</Text>
            </Box>
          )}
          {project.topics?.length > 0 && <Text className="mono" c="dimmed" size="xs">{project.topics.join('  ·  ')}</Text>}
          <ProjectDetails project={project} />
          {(project.repository || project.demo) && (
            <Group gap="md" mt="xs">
              {project.repository && <Anchor href={project.repository} target="_blank" rel="noreferrer" size="sm" c="gray.3">Repository <IconBrandGithub size={15} /></Anchor>}
              {project.demo && <Anchor href={project.demo} target="_blank" rel="noreferrer" size="sm" c="gray.3">Live site <IconExternalLink size={15} /></Anchor>}
            </Group>
          )}
        </Stack>
      </Paper>
    </Reveal>
  );
}

export function ProjectsSection() {
  return (
    <Box component="section" id="projects" data-section className="work-section">
      <Container size="lg" py={{ base: 76, md: 108 }}>
        <Reveal><SectionLabel>04 / FEATURED PROJECTS</SectionLabel></Reveal>
        <Reveal>
          <Group justify="space-between" align="end" mb={42}>
            <Title order={2} className="section-title">Proof through<br /><span className="muted">working systems.</span></Title>
            <Text c="gray.5" size="sm" lh={1.8} maw={330}>Technical work, described with its current state and the decisions behind it.</Text>
          </Group>
        </Reveal>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
