import { useState } from 'react';
import { Anchor, Burger, Button, Drawer, Group, Paper, Stack, Text, ThemeIcon } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import { navigation, profile } from '../data/profile';

export function SiteHeader({ activeSection, navigationItems = navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const links = navigationItems.map(({ id, label }) => (
    <Anchor key={id} href={`#${id}`} underline="never" c={activeSection === id ? 'white' : 'gray.5'} size="sm" onClick={closeMenu}>
      {label}
    </Anchor>
  ));

  return (
    <>
      <Paper component="header" radius={0} className="header" px={{ base: '5%', sm: '7%' }}>
        <Anchor href="#home" underline="never" c="white">
          <Group gap="xs" fw={800} fz="sm">
            <ThemeIcon size={28} radius="xl" color="blue" c="dark.9"><Text fw={800} fz="sm">{profile.initials}</Text></ThemeIcon>
            {profile.name}<sup className="accent">®</sup>
          </Group>
        </Anchor>
        <Group gap={34} visibleFrom="sm">
          {links}
          <Button component="a" href={`mailto:${profile.email}`} variant="outline" color="gray.5" size="xs" rightSection={<IconArrowUpRight size={15} />}>
            Let’s talk
          </Button>
        </Group>
        <Burger opened={menuOpen} onClick={() => setMenuOpen((open) => !open)} hiddenFrom="sm" size="sm" aria-label="Open navigation" />
      </Paper>
      <Drawer opened={menuOpen} onClose={closeMenu} title="Navigation" position="right" hiddenFrom="sm" size="xs">
        <Stack mt="md" gap="lg">
          {links}
          <Button component="a" href={`mailto:${profile.email}`} color="blue" c="dark.9">
            Let’s talk <IconArrowUpRight size={16} />
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
