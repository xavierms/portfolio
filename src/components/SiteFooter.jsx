import { Anchor, Group, Paper, Text, ThemeIcon } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import { navigation, profile } from '../data/profile';

export function SiteFooter({ navigationItems = navigation }) {
  return (
    <Paper component="footer" radius={0} className="footer" px={{ base: '5%', sm: '7%' }} py="md">
      <Group justify="space-between">
        <Anchor href="#home" underline="never" c="white">
          <Group gap="xs" fw={800} fz="sm">
            <ThemeIcon size={25} radius="xl" color="blue" c="dark.9"><Text fw={800} fz="xs">{profile.initials}</Text></ThemeIcon>
            {profile.name}<sup className="accent">®</sup>
          </Group>
        </Anchor>
        <Text className="mono footer-note" c="dimmed" size="xs">DESIGNED AND BUILT WITH INTENTION</Text>
        <Group gap="md" className="footer-links">
          {navigationItems.filter(({ id }) => id !== 'home').map(({ id, label }) => <Anchor key={id} href={`#${id}`} className="mono" c="gray.5" size="xs">{label}</Anchor>)}
          <Anchor href={profile.github} target="_blank" rel="noreferrer" className="mono" c="gray.5" size="xs">GITHUB</Anchor>
          <Anchor href={profile.linkedin} target="_blank" rel="noreferrer" className="mono" c="gray.5" size="xs">LINKEDIN</Anchor>
          <Anchor href="#home" className="mono" c="gray.5" size="xs">BACK TO TOP <IconArrowUpRight size={13} /></Anchor>
        </Group>
        <Text className="mono" c="dimmed" size="xs">© {new Date().getFullYear()}</Text>
      </Group>
    </Paper>
  );
}
