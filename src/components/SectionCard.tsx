import { Card, Text, Title, Stack, ThemeIcon } from '@mantine/core';
import { Link } from 'react-router-dom';
import { ComponentType } from 'react';

interface SectionCardProps {
  to: string;
  icon: ComponentType<{ size: number }>;
  title: string;
  text: string;
  className?: string;
}

export default function SectionCard({ to, icon: Icon, title, text, className }: SectionCardProps) {
  return (
    <Card
      component={Link}
      to={to}
      padding="lg"
      radius="md"
      withBorder
      className={`section-card ${className || ''}`}
      style={{ textDecoration: 'none' }}
    >
      <Stack gap="sm">
        <ThemeIcon variant="light" size="xl" radius="md" color="violet">
          <Icon size={24} />
        </ThemeIcon>
        <Title order={3} size="h4">{title}</Title>
        <Text size="sm" c="dimmed">{text}</Text>
      </Stack>
    </Card>
  );
}
