import { Container, Title, Text, Stack, Paper, Divider, ThemeIcon, Group, List } from '@mantine/core';
import { IconBook, IconBodyScan, IconMoodSad, IconBulb, IconHeart, IconStethoscope } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import HoverPaper from '../components/HoverPaper';
import { ComponentType, ReactNode } from 'react';

interface SectionProps {
  icon: ComponentType<{ size: number }>;
  title: string;
  children: ReactNode;
  delay?: number;
}

function Section({ icon: Icon, title, children, delay = 0 }: SectionProps) {
  return (
    <HoverPaper p="lg" radius="md" withBorder className={`reveal reveal-delay-${delay}`}>
      <Stack gap="md">
        <Group gap="sm">
          <ThemeIcon variant="light" size="lg" radius="md">
            <Icon size={20} />
          </ThemeIcon>
          <Title order={3}>{title}</Title>
        </Group>
        {children}
      </Stack>
    </HoverPaper>
  );
}

export default function Story() {
  const { t } = useTranslation();

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Stack gap="xs" className="reveal">
          <Title order={1} className="gradient-title">{t('story.title')}</Title>
          <Text c="dimmed" size="lg">{t('story.intro')}</Text>
        </Stack>

        <Divider className="reveal reveal-delay-1" />

        <Section icon={IconBook} title={t('story.beginning.title')} delay={2}>
          <Text>{t('story.beginning.text')}</Text>
        </Section>

        <Section icon={IconBodyScan} title={t('story.affected.title')} delay={3}>
          <List spacing="sm" size="sm">
            <List.Item>{t('story.affected.chest')}</List.Item>
            <List.Item>{t('story.affected.back')}</List.Item>
            <List.Item>{t('story.affected.mild')}</List.Item>
            <List.Item>{t('story.affected.pattern')}</List.Item>
          </List>
        </Section>

        <Section icon={IconMoodSad} title={t('story.struggle.title')} delay={4}>
          <Text>{t('story.struggle.text')}</Text>
          <Text size="sm" c="dimmed" fs="italic">{t('story.struggle.itching')}</Text>
        </Section>

        <Section icon={IconStethoscope} title={t('story.medical.title')} delay={5}>
          <Text>{t('story.medical.text')}</Text>
          <List spacing="sm" size="sm">
            <List.Item>{t('story.medical.confirmed')}</List.Item>
            <List.Item>{t('story.medical.xerosis')}</List.Item>
            <List.Item>{t('story.medical.relapse')}</List.Item>
            <List.Item>{t('story.medical.candida')}</List.Item>
          </List>
        </Section>

        <Section icon={IconBulb} title={t('story.discovery.title')} delay={6}>
          <Text>{t('story.discovery.text')}</Text>
          <Paper p="sm" radius="sm" bg="var(--mantine-color-violet-light)">
            <Text size="sm" fw={500}>{t('story.discovery.message')}</Text>
          </Paper>
        </Section>

        <Section icon={IconHeart} title={t('story.perspective.title')} delay={7}>
          <Text>{t('story.perspective.text')}</Text>
          <Text>{t('story.perspective.stress')}</Text>
          <Text>{t('story.perspective.growth')}</Text>
          <Paper p="sm" radius="sm" bg="var(--mantine-color-violet-light)">
            <Text size="sm" fw={500}>{t('story.perspective.message')}</Text>
          </Paper>
        </Section>
      </Stack>
    </Container>
  );
}
