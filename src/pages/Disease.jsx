import { Container, Title, Text, Stack, Paper, Divider, ThemeIcon, Group, List, Badge } from '@mantine/core';
import { IconMicroscope, IconBug, IconFlask, IconEye, IconStethoscope } from '@tabler/icons-react';
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

export default function Disease() {
  const { t } = useTranslation();

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Stack gap="xs">
          <Title order={1}>{t('disease.title')}</Title>
          <Text c="dimmed" size="lg">{t('disease.intro')}</Text>
        </Stack>

        <Divider />

        <Section icon={IconMicroscope} title={t('disease.definition.title')}>
          <Text>{t('disease.definition.text')}</Text>
        </Section>

        <Section icon={IconBug} title={t('disease.pathogen.title')}>
          <Text>{t('disease.pathogen.text')}</Text>
        </Section>

        <Section icon={IconFlask} title={t('disease.pathogenesis.title')}>
          <Text>{t('disease.pathogenesis.text')}</Text>
          <Paper p="sm" radius="sm" bg="var(--mantine-color-violet-light)">
            <Text size="sm" fw={500}>{t('disease.pathogenesis.triggers')}</Text>
          </Paper>
          <Text>{t('disease.pathogenesis.mechanism')}</Text>
          <Paper p="sm" radius="sm" bg="var(--mantine-color-violet-light)">
            <Text size="sm" fw={500}>{t('disease.pathogenesis.prevalence')}</Text>
          </Paper>
          <Text>{t('disease.pathogenesis.susceptibility')}</Text>
        </Section>

        <Section icon={IconEye} title={t('disease.symptoms.title')}>
          <Text>{t('disease.symptoms.text')}</Text>
          <Stack gap="sm">
            <Paper p="md" radius="sm" withBorder>
              <Group gap="sm" mb="xs">
                <Badge variant="light" color="gray">Alba</Badge>
                <Text fw={600} size="sm">{t('disease.symptoms.alba.title')}</Text>
              </Group>
              <Text size="sm">{t('disease.symptoms.alba.text')}</Text>
            </Paper>
            <Paper p="md" radius="sm" withBorder>
              <Group gap="sm" mb="xs">
                <Badge variant="light" color="orange">Rubra</Badge>
                <Text fw={600} size="sm">{t('disease.symptoms.rubra.title')}</Text>
              </Group>
              <Text size="sm">{t('disease.symptoms.rubra.text')}</Text>
            </Paper>
          </Stack>
        </Section>

        <Section icon={IconStethoscope} title={t('disease.diagnosis.title')}>
          <Text>{t('disease.diagnosis.text')}</Text>
          <Text>{t('disease.diagnosis.methods')}</Text>
        </Section>
      </Stack>
    </Container>
  );
}
