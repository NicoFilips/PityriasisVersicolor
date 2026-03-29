import { Card, Text, Title, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function SectionCard({ to, icon, title, text }) {
  return (
    <Card
      component={Link}
      to={to}
      padding="lg"
      radius="md"
      withBorder
      style={{ textDecoration: 'none', transition: 'transform 150ms ease, box-shadow 150ms ease' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--mantine-shadow-md)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <Stack gap="sm">
        <Text size="2rem">{icon}</Text>
        <Title order={3} size="h4">{title}</Title>
        <Text size="sm" c="dimmed">{text}</Text>
      </Stack>
    </Card>
  );
}
