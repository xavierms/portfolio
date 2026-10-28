import { ActionIcon, Anchor, Box, Button, Container, Grid, Group, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconArrowDown, IconArrowRight, IconBrandGithub, IconBrandLinkedin, IconCloud, IconCode, IconDatabase, IconSparkles } from '@tabler/icons-react';
import { Reveal } from '../components/Reveal';
import { profile } from '../data/profile';

const systemParts = [
  { label: 'Interfaces', icon: IconCode },
  { label: 'APIs', icon: IconArrowRight },
  { label: 'Data', icon: IconDatabase },
  { label: 'AI + Cloud', icon: IconCloud },
];

export function HeroSection() {
  return (
    <Box component="section" id="home" data-section className="hero">
      <Container size="lg" className="hero-inner">
        <Grid gutter={{ base: 40, md: 64 }} align="center">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Reveal>
              <Group gap="xs" className="mono" mb="xl">
                <span className="availability-dot" />
                <Text size="xs" c="dimmed" style={{ letterSpacing: '.11em' }}>{profile.role.toUpperCase()} · BUILDING END-TO-END SOFTWARE</Text>
              </Group>
              <Title order={1} className="hero-title">{profile.headline}<br /><span className="accent">across systems.</span></Title>
              <Text className="hero-value" c="gray.4" maw={590}>{profile.valueProposition}</Text>
              <Group mt="xl" gap="sm">
                <Button component="a" href="#projects" color="blue" rightSection={<IconArrowDown size={16} />}>Explore projects</Button>
                <Button component="a" href={`mailto:${profile.email}`} variant="outline" color="gray.5">Get in touch</Button>
                {profile.resumeUrl && <Button component="a" href={profile.resumeUrl} download variant="subtle" color="gray.4">Download CV</Button>}
              </Group>
              <Group mt="xl" gap="xs">
                <ActionIcon component="a" href={profile.github} target="_blank" rel="noreferrer" variant="subtle" color="gray.5" aria-label="GitHub"><IconBrandGithub size={18} /></ActionIcon>
                <ActionIcon component="a" href={profile.linkedin} target="_blank" rel="noreferrer" variant="subtle" color="gray.5" aria-label="LinkedIn"><IconBrandLinkedin size={18} /></ActionIcon>
                <Anchor href={`mailto:${profile.email}`} size="xs" c="dimmed" ml="xs">{profile.email}</Anchor>
              </Group>
            </Reveal>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Reveal delay={120}>
              <Paper className="systems-panel" p={{ base: 'lg', sm: 28 }} radius="md" withBorder>
                <Group justify="space-between" mb="xl">
                  <Text className="mono" size="xs" c="dimmed">A SYSTEMS VIEW</Text>
                  <ThemeIcon variant="light" color="blue" radius="xl"><IconSparkles size={16} /></ThemeIcon>
                </Group>
                <SimpleGrid cols={2} spacing="sm">
                  {systemParts.map(({ label, icon: Icon }, index) => (
                    <Box className={`system-node node-${index + 1}`} key={label}>
                      <Icon size={19} stroke={1.5} />
                      <Text size="sm" fw={500} mt="sm">{label}</Text>
                    </Box>
                  ))}
                </SimpleGrid>
                <Stack gap={6} mt="xl">
                  <Text className="mono" size="xs" c="dimmed">FOCUS AREAS</Text>
                  <Text size="sm">{profile.focusAreas.join(' · ')}</Text>
                </Stack>
              </Paper>
            </Reveal>
          </Grid.Col>
        </Grid>
        <Group className="hero-scroll mono" gap="sm" mt={{ base: 52, md: 80 }}>
          <Text size="xs" c="dimmed">SCROLL TO EXPLORE</Text>
          <Box className="scroll-line" />
          <Text size="xs" c="dimmed">01 / 06</Text>
        </Group>
      </Container>
    </Box>
  );
}
