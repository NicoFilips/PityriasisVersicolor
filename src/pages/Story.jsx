import { Container, Title, Text, Stack, Paper, Divider, ThemeIcon, Group, List } from '@mantine/core';
import { IconBook, IconBodyScan, IconMoodSad, IconBulb, IconHeart } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

function Section({ icon: Icon, title, children }) {
  return (
    <Paper p="lg" radius="md" withBorder>
      <Stack gap="md">
        <Group gap="sm">
          <ThemeIcon variant="light" size="lg" radius="md">
            <Icon size={20} />
          </ThemeIcon>
          <Title order={3}>{title}</Title>
        </Group>
        {children}
      </Stack>
    </Paper>
  );
}

export default function Story() {
  const { t } = useTranslation();

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Stack gap="xs">
          <Title order={1}>{t('story.title')}</Title>
          <Text c="dimmed" size="lg">{t('story.intro')}</Text>
        </Stack>

        <Divider />

        <Section icon={IconBook} title={t('story.beginning.title')}>
          <Text>{t('story.beginning.text')}</Text>
        </Section>

        <Section icon={IconBodyScan} title={t('story.affected.title')}>
          <List spacing="sm" size="sm">
            <List.Item>{t('story.affected.chest')}</List.Item>
            <List.Item>{t('story.affected.back')}</List.Item>
            <List.Item>{t('story.affected.mild')}</List.Item>
            <List.Item>{t('story.affected.pattern')}</List.Item>
          </List>
        </Section>

        <Section icon={IconMoodSad} title={t('story.struggle.title')}>
          <Text>{t('story.struggle.text')}</Text>
          <Text size="sm" c="dimmed" fs="italic">{t('story.struggle.itching')}</Text>
        </Section>

        <Section icon={IconBulb} title={t('story.discovery.title')}>
          <Text>{t('story.discovery.text')}</Text>
          <Paper p="sm" radius="sm" bg="var(--mantine-color-violet-light)">
            <Text size="sm" fw={500}>{t('story.discovery.message')}</Text>
          </Paper>
        </Section>

        <Section icon={IconHeart} title={t('story.perspective.title')}>
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
