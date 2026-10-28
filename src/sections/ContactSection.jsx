import { ActionIcon, Anchor, Container, Grid, Group, Text, Title } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconCode, IconArrowUpRight, IconPointFilled } from '@tabler/icons-react';
import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { profile } from '../data/profile';
import { accent } from '../theme';

export function ContactSection() {
  return (
    <Container component="section" id="contact" data-section size="lg" py={{ base: 80, md: 110 }}>
      <Reveal><SectionLabel right="OPEN TO OPPORTUNITIES">06 / CONTACT</SectionLabel></Reveal>
      <Grid align="end" gutter={30}>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Reveal>
            <Group gap={7} className="mono" mb="lg">
              <IconPointFilled size={15} color={accent} />
              <Text size="xs" c="gray.4" style={{ letterSpacing: '.08em' }}>HAVE SOMETHING IN MIND?</Text>
            </Group>
            <Title order={2} className="contact-title">Let’s make it<br /><span className="accent">real.</span></Title>
            <Anchor href={`mailto:${profile.email}`} className="contact-mail">{profile.email} <IconArrowUpRight size={20} /></Anchor>
          </Reveal>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Reveal delay={120}>
            <Text size="xs" c="gray.5" mb="lg" lh={1.8}>The best things start<br />with a good conversation.</Text>
            <Group gap="xs">
              <ActionIcon component="a" href={profile.github} target="_blank" rel="noreferrer" variant="outline" color="gray.6" radius="xl" aria-label="GitHub"><IconBrandGithub size={17} /></ActionIcon>
              <ActionIcon component="a" href={profile.linkedin} target="_blank" rel="noreferrer" variant="outline" color="gray.6" radius="xl" aria-label="LinkedIn"><IconBrandLinkedin size={17} /></ActionIcon>
              <ActionIcon component="a" href={`mailto:${profile.email}`} variant="outline" color="gray.6" radius="xl" aria-label="Email"><IconCode size={17} /></ActionIcon>
            </Group>
          </Reveal>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
