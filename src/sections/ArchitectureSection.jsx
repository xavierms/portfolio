import { Box, Container, Grid, Group, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconArrowRight, IconDatabase, IconFileText, IconMessageQuestion, IconQuote, IconSearch, IconServer, IconVector } from '@tabler/icons-react';
import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { projects } from '../data/projects';

const ragProject = projects.find(({ id }) => id === 'rag-knowledge-assistant');
const ingestion = [
  { label: 'Documents', icon: IconFileText },
  { label: 'Automated indexing', icon: IconServer },
  { label: 'Embeddings', icon: IconVector },
  { label: 'PostgreSQL + pgvector', icon: IconDatabase },
];
const retrieval = [
  { label: 'User question', icon: IconMessageQuestion },
  { label: 'Backend API', icon: IconServer },
  { label: 'Semantic retrieval', icon: IconSearch },
  { label: 'External LLM API', icon: IconVector },
  { label: 'Answer + citations', icon: IconQuote },
];

function FlowRow({ title, steps }) {
  return (
    <Box className="flow-row">
      <Text className="mono" size="xs" c="dimmed" mb="sm">{title}</Text>
      <SimpleGrid cols={{ base: 1, xs: 2, sm: steps.length }} spacing="xs">
        {steps.map(({ label, icon: Icon }, index) => (
          <Paper className="flow-node" key={label} p="sm" radius="sm" withBorder>
            <Group gap="xs" wrap="nowrap">
              <ThemeIcon size={30} variant="light" color="blue" radius="sm"><Icon size={16} /></ThemeIcon>
              <Text size="xs" fw={500} lh={1.4}>{label}</Text>
              {index < steps.length - 1 && <IconArrowRight className="flow-arrow" size={14} />}
            </Group>
          </Paper>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export function ArchitectureSection() {
  return (
    <Box component="section" id="architecture" data-section className="architecture-section">
      <Container size="lg" py={{ base: 76, md: 108 }}>
        <Reveal><SectionLabel>05 / ARCHITECTURE & ENGINEERING</SectionLabel></Reveal>
        <Grid gutter={{ base: 24, md: 56 }} mb={36}>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Reveal><Title order={2} className="section-title">Make the<br /><span className="muted">system visible.</span></Title></Reveal>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Reveal delay={100}>
              <Stack gap="sm">
                <Text size="sm" c="gray.4" lh={1.9}>A demonstration architecture for the RAG knowledge assistant. It separates document indexing from question-time retrieval, then grounds generated answers in retrieved sources.</Text>
                <Text className="mono" size="xs" c="dimmed">CURRENT STATE · {ragProject.status.toUpperCase()}</Text>
              </Stack>
            </Reveal>
          </Grid.Col>
        </Grid>

        <Reveal>
          <Paper className="architecture-diagram" p={{ base: 'md', sm: 'xl' }} radius="md" withBorder>
            <FlowRow title="1 / DOCUMENT INDEXING" steps={ingestion} />
            <Box className="flow-separator"><span>INDEXED KNOWLEDGE</span></Box>
            <FlowRow title="2 / QUESTION ANSWERING" steps={retrieval} />
            <Text c="dimmed" size="xs" mt="lg">Simplified view. Model and embedding providers are external APIs; deployment infrastructure is not yet configured.</Text>
          </Paper>
        </Reveal>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" mt="md">
          {[
            ['Retrieval', 'Use pgvector to search embedded document chunks and assemble relevant context.'],
            ['Traceability', 'Return citations with generated answers so the retrieved source can be checked.'],
            ['Operations', 'Track model cost and latency; establish access controls and retrieval evaluation before deployment.'],
          ].map(([title, text], index) => (
            <Reveal key={title} delay={index * 70}>
              <Paper className="engineering-note" p="lg" radius="md" withBorder h="100%">
                <Text className="mono" size="xs" c="blue.3" mb="sm">0{index + 1} / {title.toUpperCase()}</Text>
                <Text size="sm" c="gray.4" lh={1.8}>{text}</Text>
              </Paper>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
