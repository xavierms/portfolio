import { Anchor, Box, Container, Group, Paper, SimpleGrid, Text, Title } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';

export function WritingSection({ articles }) {
  if (!articles.length) return null;

  return (
    <Box component="section" id="writing" data-section className="writing-section">
      <Container size="lg" py={{ base: 76, md: 108 }}>
        <Reveal><SectionLabel>TECHNICAL WRITING</SectionLabel></Reveal>
        <Title order={2} className="section-title" mb="xl">Ideas worth<br /><span className="muted">writing down.</span></Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          {articles.map((article) => (
            <Reveal key={article.id}>
              <Paper className="article-card" p="lg" radius="md" withBorder h="100%">
                {article.date && <Text className="mono" c="dimmed" size="xs" mb="sm">{article.date}</Text>}
                <Title order={3} fz="lg">{article.title}</Title>
                <Text size="sm" c="gray.5" lh={1.8} mt="sm">{article.summary}</Text>
                {article.url && <Group justify="end" mt="md"><Anchor href={article.url} target="_blank" rel="noreferrer" size="sm">Read article <IconArrowUpRight size={15} /></Anchor></Group>}
              </Paper>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
