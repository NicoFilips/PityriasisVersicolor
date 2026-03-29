import { Container, Title, Text, Stack, Paper, Divider, ThemeIcon, Group, List, Stepper, Alert } from '@mantine/core';
import { IconHeartbeat, IconLink, IconBug, IconShield, IconLeaf, IconChecklist } from '@tabler/icons-react';
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

export default function GutSkin() {
  const { t } = useTranslation();

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Stack gap="xs">
          <Title order={1}>{t('gutSkin.title')}</Title>
          <Text c="dimmed" size="lg">{t('gutSkin.intro')}</Text>
        </Stack>

        <Divider />

        <Section icon={IconLink} title={t('gutSkin.connection.title')}>
          <Text>{t('gutSkin.connection.text')}</Text>
        </Section>

        <Section icon={IconBug} title={t('gutSkin.candida.title')}>
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

        <Section icon={IconShield} title={t('gutSkin.pvCandida.title')}>
          <Text>{t('gutSkin.pvCandida.text')}</Text>
        </Section>

        <Section icon={IconLeaf} title={t('gutSkin.strategy.title')}>
          <List spacing="sm" size="sm">
            <List.Item>{t('gutSkin.strategy.probiotics')}</List.Item>
            <List.Item>{t('gutSkin.strategy.prebiotics')}</List.Item>
            <List.Item>{t('gutSkin.strategy.spirulina')}</List.Item>
            <List.Item>{t('gutSkin.strategy.garlic')}</List.Item>
            <List.Item>{t('gutSkin.strategy.omega3')}</List.Item>
            <List.Item>{t('gutSkin.strategy.diet')}</List.Item>
          </List>
        </Section>

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
      </Stack>
    </Container>
  );
}
