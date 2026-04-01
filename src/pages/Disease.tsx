import { Container, Title, Text, Stack, Paper, Divider, ThemeIcon, Group, Badge } from '@mantine/core';
import { IconMicroscope, IconBug, IconFlask, IconEye, IconStethoscope } from '@tabler/icons-react';
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

export default function Disease() {
  const { t } = useTranslation();

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Stack gap="xs" className="reveal">
          <Title order={1} className="gradient-title">{t('disease.title')}</Title>
          <Text c="dimmed" size="lg">{t('disease.intro')}</Text>
        </Stack>

        <Divider className="reveal reveal-delay-1" />

        <Section icon={IconMicroscope} title={t('disease.definition.title')} delay={2}>
          <Text>{t('disease.definition.text')}</Text>
        </Section>

        <Section icon={IconBug} title={t('disease.pathogen.title')} delay={3}>
          <Text>{t('disease.pathogen.text')}</Text>
        </Section>

        <Section icon={IconFlask} title={t('disease.pathogenesis.title')} delay={4}>
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

        <Section icon={IconEye} title={t('disease.symptoms.title')} delay={5}>
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

        <Section icon={IconStethoscope} title={t('disease.diagnosis.title')} delay={6}>
          <Text>{t('disease.diagnosis.text')}</Text>
          <Text>{t('disease.diagnosis.methods')}</Text>
        </Section>
      </Stack>
    </Container>
  );
}
