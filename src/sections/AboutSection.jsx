import { Container, Grid, Stack, Text, Title } from '@mantine/core';
import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { profile } from '../data/profile';

export function AboutSection() {
  return (
    <Container component="section" id="about" data-section size="lg" py={{ base: 76, md: 112 }}>
      <Reveal><SectionLabel>02 / PROFILE</SectionLabel></Reveal>
      <Grid gutter={{ base: 28, md: 72 }}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Reveal><Title order={2} className="section-title">Engineering<br />the connections<br /><span className="muted">between systems.</span></Title></Reveal>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Reveal delay={100}>
            <Stack gap="md" maw={620}>
              <Text size="lg" lh={1.7} fw={500}>{profile.biography[0]}</Text>
              <Text c="gray.5" size="sm" lh={1.9}>{profile.biography[1]}</Text>
              <Text className="mono" c="dimmed" size="xs" mt="xs">CURRENT FOCUS · {profile.focusAreas.join(' · ').toUpperCase()}</Text>
            </Stack>
          </Reveal>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
