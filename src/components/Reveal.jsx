import { Box } from '@mantine/core';

export function Reveal({ children, delay = 0, ...props }) {
  return <Box className="reveal" style={{ '--delay': `${delay}ms` }} {...props}>{children}</Box>;
}
