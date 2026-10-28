import { Box, Container, Divider, Grid, Stack, Text, Title } from '@mantine/core';
import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { skillGroups } from '../data/skills';

export function SkillsSection() {
  return (
    <Box component="section" id="skills" data-section className="skills-section">
      <Container size="lg" py={{ base: 76, md: 108 }}>
        <Reveal><SectionLabel>03 / TECHNICAL SKILLS</SectionLabel></Reveal>
        <Grid gutter={{ base: 24, md: 60 }} mb="xl">
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Reveal><Title order={2} className="section-title">A broad toolkit,<br /><span className="muted">used with context.</span></Title></Reveal>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Reveal delay={100}><Text c="gray.5" size="sm" lh={1.9} maw={520}>Technologies are grouped by the work they support. I’m keeping proficiency levels unlisted until I can provide accurate, specific levels for each one.</Text></Reveal>
          </Grid.Col>
        </Grid>
        <Stack gap={0}>
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 35}>
              <Divider color="dark.5" />
              <Grid py="lg" gutter="md" align="start">
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Text fw={600} size="sm">{group.title}</Text>
                  <Text c="dimmed" size="xs" mt={5} lh={1.6}>{group.description}</Text>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 8 }}>
                  <Text size="sm" c="gray.4" lh={1.9}>
                    {group.items.map(({ name }) => name).join('  ·  ')}
                  </Text>
                  {group.items.some(({ level }) => level) && (
                    <Group gap="xs" mt="sm">
                      {group.items.filter(({ level }) => level).map(({ name, level }) => (
                        <Text key={name} className="mono" size="xs" c="dimmed">{name}: {level}</Text>
                      ))}
                    </Group>
                  )}
                </Grid.Col>
              </Grid>
            </Reveal>
          ))}
          <Divider color="dark.5" />
        </Stack>
      </Container>
    </Box>
  );
}
