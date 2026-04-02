import { Container, Title, Text, Stack, Paper, Divider, ThemeIcon, Group, List, Stepper, Alert } from '@mantine/core';
import { IconLink, IconBug, IconShield, IconLeaf, IconChecklist, IconMilk, IconClock } from '@tabler/icons-react';
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

export default function GutSkin() {
  const { t } = useTranslation();

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Stack gap="xs" className="reveal">
          <Title order={1} className="gradient-title">{t('gutSkin.title')}</Title>
          <Text c="dimmed" size="lg">{t('gutSkin.intro')}</Text>
        </Stack>

        <Divider className="reveal reveal-delay-1" />

        <Section icon={IconLink} title={t('gutSkin.connection.title')} delay={2}>
          <Text>{t('gutSkin.connection.text')}</Text>
        </Section>

        <Section icon={IconBug} title={t('gutSkin.candida.title')} delay={3}>
          <Text>{t('gutSkin.candida.text')}</Text>
          <List spacing="sm" size="sm" icon={
            <ThemeIcon color="violet" size="xs" radius="xl">
              <IconChecklist size={12} />
            </ThemeIcon>
          }>
            <List.Item>{t('gutSkin.candida.evidence1')}</List.Item>
            <List.Item>{t('gutSkin.candida.evidence2')}</List.Item>
            <List.Item>{t('gutSkin.candida.evidence3')}</List.Item>
            <List.Item>{t('gutSkin.candida.evidence4')}</List.Item>
            <List.Item>{t('gutSkin.candida.evidence5')}</List.Item>
          </List>
        </Section>

        <Section icon={IconShield} title={t('gutSkin.pvCandida.title')} delay={4}>
          <Text>{t('gutSkin.pvCandida.text')}</Text>
        </Section>

        <Section icon={IconMilk} title={t('gutSkin.dairy.title')} delay={5}>
          <Text>{t('gutSkin.dairy.text')}</Text>
          <Text size="sm">{t('gutSkin.dairy.nuance')}</Text>
          <Paper p="sm" radius="sm" bg="var(--mantine-color-violet-light)">
            <Text size="sm" fw={500}>{t('gutSkin.dairy.relevance')}</Text>
          </Paper>
        </Section>

        <Section icon={IconClock} title={t('gutSkin.triggerTiming.title')} delay={6}>
          <Text>{t('gutSkin.triggerTiming.text')}</Text>
          <Text size="sm" c="dimmed" fs="italic">{t('gutSkin.triggerTiming.implication')}</Text>
        </Section>

        <Section icon={IconLeaf} title={t('gutSkin.strategy.title')} delay={7}>
          <List spacing="sm" size="sm">
            <List.Item>{t('gutSkin.strategy.probiotics')}</List.Item>
            <List.Item>{t('gutSkin.strategy.prebiotics')}</List.Item>
            <List.Item>{t('gutSkin.strategy.spirulina')}</List.Item>
            <List.Item>{t('gutSkin.strategy.garlic')}</List.Item>
            <List.Item>{t('gutSkin.strategy.omega3')}</List.Item>
            <List.Item>{t('gutSkin.strategy.diet')}</List.Item>
          </List>
        </Section>

        <div className="reveal reveal-delay-8">
          <Alert icon={<IconChecklist size={20} />} title={t('gutSkin.tryThis.title')} color="violet" variant="light">
            <Text size="sm" mb="sm">{t('gutSkin.tryThis.text')}</Text>
            <Stepper active={-1} orientation="vertical" size="sm" color="violet">
              <Stepper.Step label={t('gutSkin.tryThis.step1')} />
              <Stepper.Step label={t('gutSkin.tryThis.step2')} />
              <Stepper.Step label={t('gutSkin.tryThis.step3')} />
              <Stepper.Step label={t('gutSkin.tryThis.step4')} />
              <Stepper.Step label={t('gutSkin.tryThis.step5')} />
            </Stepper>
          </Alert>
        </div>
      </Stack>
    </Container>
  );
}
