import { Divider, Group, Text } from '@mantine/core';

export function SectionLabel({ children, right }) {
  return (
    <Group gap="sm" wrap="nowrap" mb={54} className="mono">
      <Text size="xs" c="dimmed" style={{ letterSpacing: '.08em', whiteSpace: 'nowrap' }}>{children}</Text>
      <Divider color="dark.4" style={{ flex: 1 }} />
      {right && <Text size="xs" c="dimmed" style={{ letterSpacing: '.08em', whiteSpace: 'nowrap' }}>{right}</Text>}
    </Group>
  );
}
