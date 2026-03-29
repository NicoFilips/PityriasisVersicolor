import { Container, Title, Text, Stack, Paper, Divider, ThemeIcon, Group, Badge, SimpleGrid, Alert, Table } from '@mantine/core';
import { IconAlertTriangle, IconStethoscope, IconHeart, IconArrowsExchange } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import HoverPaper from '../components/HoverPaper';

const conditions = [
  { key: 'vitiligo', color: 'blue' },
  { key: 'alba', color: 'gray' },
  { key: 'rosea', color: 'pink' },
  { key: 'tinea', color: 'orange' },
  { key: 'seborrheic', color: 'yellow' },
  { key: 'contact', color: 'red' },
  { key: 'hypopigmentation', color: 'cyan' },
  { key: 'pmh', color: 'teal' },
  { key: 'mycosis', color: 'grape' },
];

const diagnostics = ['koh', 'wood', 'biopsy', 'culture'];

function ConditionCard({ conditionKey, color, t }) {
  return (
    <HoverPaper p="lg" radius="md" withBorder>
      <Stack gap="sm">
        <Group justify="space-between" wrap="nowrap" align="flex-start">
          <Title order={4}>{t(`misdiagnosis.conditions.${conditionKey}.name`)}</Title>
          <Badge variant="light" color={color} size="sm" style={{ flexShrink: 0 }}>
            {t(`misdiagnosis.conditions.${conditionKey}.type`)}
          </Badge>
        </Group>
        <Text size="sm">{t(`misdiagnosis.conditions.${conditionKey}.desc`)}</Text>
        <Paper p="xs" radius="sm" bg="var(--mantine-color-violet-light)">
          <Text size="xs" fw={600}>{t(`misdiagnosis.conditions.${conditionKey}.key`)}</Text>
        </Paper>
      </Stack>
    </HoverPaper>
  );
}

export default function Misdiagnosis() {
  const { t } = useTranslation();

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Stack gap="xs" className="reveal">
          <Title order={1} className="gradient-title">{t('misdiagnosis.title')}</Title>
          <Text c="dimmed" size="lg">{t('misdiagnosis.intro')}</Text>
        </Stack>

        <Divider className="reveal reveal-delay-1" />

        <div className="reveal reveal-delay-2">
          <Alert icon={<IconAlertTriangle size={20} />} title={t('misdiagnosis.important.title')} color="orange" variant="light">
            <Text size="sm">{t('misdiagnosis.important.text')}</Text>
          </Alert>
        </div>

        <Title order={2} className="reveal reveal-delay-3">Conditions That Look Similar</Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" className="reveal reveal-delay-4">
          {conditions.map((c) => (
            <ConditionCard key={c.key} conditionKey={c.key} color={c.color} t={t} />
          ))}
        </SimpleGrid>

        <HoverPaper p="lg" radius="md" withBorder className="reveal reveal-delay-5">
          <Stack gap="md">
            <Group gap="sm">
              <ThemeIcon variant="light" size="lg" radius="md" color="teal">
                <IconArrowsExchange size={20} />
              </ThemeIcon>
              <Title order={2}>{t('misdiagnosis.conditions.pmh.comparison.title')}</Title>
            </Group>
            <Table striped highlightOnHover withTableBorder withColumnBorders>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Feature</Table.Th>
                  <Table.Th>PMH</Table.Th>
                  <Table.Th>Pityriasis Versicolor</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td fw={600}>Color</Table.Td>
                  <Table.Td>{t('misdiagnosis.conditions.pmh.comparison.pmhColor')}</Table.Td>
                  <Table.Td>{t('misdiagnosis.conditions.pmh.comparison.pvColor')}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td fw={600}>Scaling</Table.Td>
                  <Table.Td>{t('misdiagnosis.conditions.pmh.comparison.pmhScale')}</Table.Td>
                  <Table.Td>{t('misdiagnosis.conditions.pmh.comparison.pvScale')}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td fw={600}>Symptoms</Table.Td>
                  <Table.Td>{t('misdiagnosis.conditions.pmh.comparison.pmhItch')}</Table.Td>
                  <Table.Td>{t('misdiagnosis.conditions.pmh.comparison.pvItch')}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td fw={600}>Cause</Table.Td>
                  <Table.Td>{t('misdiagnosis.conditions.pmh.comparison.pmhCause')}</Table.Td>
                  <Table.Td>{t('misdiagnosis.conditions.pmh.comparison.pvCause')}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td fw={600}>Treatment</Table.Td>
                  <Table.Td>{t('misdiagnosis.conditions.pmh.comparison.pmhTreatment')}</Table.Td>
                  <Table.Td>{t('misdiagnosis.conditions.pmh.comparison.pvTreatment')}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td fw={600}>Location</Table.Td>
                  <Table.Td>{t('misdiagnosis.conditions.pmh.comparison.pmhLocation')}</Table.Td>
                  <Table.Td>{t('misdiagnosis.conditions.pmh.comparison.pvLocation')}</Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
            <Paper p="sm" radius="sm" bg="var(--mantine-color-teal-light)">
              <Text size="sm" fw={600} ta="center">{t('misdiagnosis.conditions.pmh.comparison.quickRule')}</Text>
            </Paper>
          </Stack>
        </HoverPaper>

        <Divider />

        <HoverPaper p="lg" radius="md" withBorder className="reveal reveal-delay-6">
          <Stack gap="md">
            <Group gap="sm">
              <ThemeIcon variant="light" size="lg" radius="md">
                <IconStethoscope size={20} />
              </ThemeIcon>
              <Title order={2}>{t('misdiagnosis.diagnostics.title')}</Title>
            </Group>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
              {diagnostics.map((key) => (
                <HoverPaper key={key} p="md" radius="sm" withBorder>
                  <Text fw={600} size="sm" mb={4}>{t(`misdiagnosis.diagnostics.${key}.name`)}</Text>
                  <Text size="xs" c="dimmed">{t(`misdiagnosis.diagnostics.${key}.desc`)}</Text>
                </HoverPaper>
              ))}
            </SimpleGrid>
          </Stack>
        </HoverPaper>

        <div className="reveal reveal-delay-6">
          <Alert icon={<IconHeart size={20} />} title={t('misdiagnosis.advice.title')} color="violet" variant="light">
            <Text size="sm">{t('misdiagnosis.advice.text')}</Text>
          </Alert>
        </div>
      </Stack>
    </Container>
  );
}
