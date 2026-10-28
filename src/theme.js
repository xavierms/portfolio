import { createTheme } from '@mantine/core';

export const accent = '#8fa8ff';

export const theme = createTheme({
  primaryColor: 'blue',
  colors: {
    blue: ['#f3f5ff', '#e3e9ff', '#cbd5ff', '#b0c0ff', '#8fa8ff', '#718fe9', '#5874c8', '#40599f', '#2c3e72', '#1b2648'],
    dark: ['#e9edf5', '#c5ccda', '#a4aec0', '#7f8ba0', '#5b677c', '#414c60', '#2e3748', '#1b2331', '#121925', '#0b1019'],
  },
  fontFamily: 'Manrope, sans-serif',
  headings: { fontFamily: 'Manrope, sans-serif', fontWeight: '600' },
});
