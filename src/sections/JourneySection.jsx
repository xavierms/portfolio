import { Box, Container, Divider, Group, Stack, Text, Title } from '@mantine/core';
import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';

function JourneyGroup({ title, entries }) {
  if (!entries?.length) return null;
  return (
    <Stack gap="md" mb="xl">
      <Text className="mono" c="dimmed" size="xs">{title.toUpperCase()}</Text>
      {entries.map((entry) => (
        <Box key={`${entry.title}-${entry.organization}`}>
          <Group justify="space-between" align="start">
            <Box><Text fw={600} size="sm">{entry.title}</Text>{entry.organization && <Text c="gray.5" size="sm" mt={4}>{entry.organization}</Text>}</Box>
            {entry.period && <Text className="mono" c="dimmed" size="xs">{entry.period}</Text>}
          </Group>
          {entry.description && <Text c="gray.5" size="sm" lh={1.8} mt="sm">{entry.description}</Text>}
          <Divider color="dark.5" mt="md" />
        </Box>
      ))}
    </Stack>
  );
}

export function JourneySection({ journey }) {
  const hasEntries = Object.values(journey).some((entries) => entries.length > 0);
  if (!hasEntries) return null;

  return (
    <Box component="section" id="journey" data-section className="journey-section">
      <Container size="lg" py={{ base: 76, md: 108 }}>
        <Reveal><SectionLabel>PROFESSIONAL JOURNEY</SectionLabel></Reveal>
        <Title order={2} className="section-title" mb="xl">Experience &<br /><span className="muted">learning.</span></Title>
        <JourneyGroup title="Experience" entries={journey.experience} />
        <JourneyGroup title="Education" entries={journey.education} />
        <JourneyGroup title="Certifications" entries={journey.certifications} />
      </Container>
    </Box>
  );
}
