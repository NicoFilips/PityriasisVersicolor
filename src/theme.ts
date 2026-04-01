import { createTheme } from '@mantine/core';

const theme = createTheme({
  primaryColor: 'violet',
  colors: {
    violet: [
      '#f3e8ff',
      '#e4ccff',
      '#c99dff',
      '#aa3bff',
      '#9333ea',
      '#7e22ce',
      '#6b21a8',
      '#581c87',
      '#4a1772',
      '#3b1260',
    ],
  },
  fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif",
  headings: {
    fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif",
    fontWeight: '600',
  },
  defaultRadius: 'md',
});

export default theme;
