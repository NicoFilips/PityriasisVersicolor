import { Container, Title, Text, Stack, Paper, Divider, ThemeIcon, Group, Badge, SimpleGrid, List, Alert } from '@mantine/core';
import { IconDroplet, IconPill, IconLeaf, IconSalad, IconAlertTriangle, IconHeart } from '@tabler/icons-react';
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

function SupplementCard({ name, desc }) {
  return (
    <Paper p="md" radius="sm" withBorder>
      <Text fw={600} size="sm" mb={4}>{name}</Text>
      <Text size="xs" c="dimmed">{desc}</Text>
    </Paper>
  );
}

export default function Treatments() {
  const { t } = useTranslation();

  const supplements = ['zinc', 'probiotics', 'inulin', 'spirulina', 'omega3', 'chia', 'garlic'];

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Stack gap="xs">
          <Title order={1}>{t('treatments.title')}</Title>
          <Text c="dimmed" size="lg">{t('treatments.intro')}</Text>
        </Stack>

        <Divider />

        <Section icon={IconDroplet} title={t('treatments.topical.title')}>
          <Stack gap="sm">
            <Paper p="md" radius="sm" withBorder>
              <Group gap="sm" mb="xs">
                <Badge variant="light">Topical</Badge>
                <Text fw={600} size="sm">{t('treatments.topical.ketoconazole.name')}</Text>
              </Group>
              <Text size="sm" c="dimmed">{t('treatments.topical.ketoconazole.desc')}</Text>
            </Paper>
            <Paper p="md" radius="sm" withBorder>
              <Group gap="sm" mb="xs">
                <Badge variant="light">Topical</Badge>
                <Text fw={600} size="sm">{t('treatments.topical.nizoral.name')}</Text>
              </Group>
              <Text size="sm" c="dimmed">{t('treatments.topical.nizoral.desc')}</Text>
            </Paper>
          </Stack>
        </Section>

        <Section icon={IconPill} title={t('treatments.oral.title')}>
          <Text>{t('treatments.oral.text')}</Text>
        </Section>

        <Section icon={IconLeaf} title={t('treatments.supplements.title')}>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
            {supplements.map((key) => (
              <SupplementCard
                key={key}
                name={t(`treatments.supplements.${key}.name`)}
                desc={t(`treatments.supplements.${key}.desc`)}
              />
            ))}
          </SimpleGrid>
        </Section>

        <Section icon={IconSalad} title={t('treatments.diet.title')}>
          <Text>{t('treatments.diet.text')}</Text>
          <Paper p="sm" radius="sm" bg="var(--mantine-color-violet-light)">
            <Text size="sm" fw={500}>{t('treatments.diet.why')}</Text>
          </Paper>
          <Text size="sm" c="dimmed" fs="italic">{t('treatments.diet.challenge')}</Text>
        </Section>

        <Section icon={IconAlertTriangle} title={t('treatments.triggers.title')}>
          <List spacing="sm" size="sm">
            <List.Item>{t('treatments.triggers.carbs')}</List.Item>
            <List.Item>{t('treatments.triggers.alcohol')}</List.Item>
            <List.Item>{t('treatments.triggers.sugar')}</List.Item>
            <List.Item>{t('treatments.triggers.hygiene')}</List.Item>
          </List>
        </Section>

        <Alert icon={<IconHeart size={20} />} title={t('treatments.honest.title')} color="violet" variant="light">
          <Text size="sm">{t('treatments.honest.text')}</Text>
        </Alert>
      </Stack>
    </Container>
  );
}
