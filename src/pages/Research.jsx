import { Container, Title, Text, Stack, Paper, Divider, ThemeIcon, Group, Badge } from '@mantine/core';
import { IconFileSearch, IconAlertCircle, IconSalad, IconVirus, IconShield, IconUsers } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

function ResearchTopic({ icon: Icon, title, text, status }) {
  return (
    <Paper p="lg" radius="md" withBorder>
      <Stack gap="md">
        <Group justify="space-between">
          <Group gap="sm">
            <ThemeIcon variant="light" size="lg" radius="md">
              <Icon size={20} />
            </ThemeIcon>
            <Title order={3}>{title}</Title>
          </Group>
          <Badge variant="light" color={status === 'investigating' ? 'yellow' : 'violet'} size="sm">
            {status === 'investigating' ? 'Investigating' : 'Collecting'}
          </Badge>
        </Group>
        <Text>{text}</Text>
      </Stack>
    </Paper>
  );
}

export default function Research() {
  const { t } = useTranslation();

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Stack gap="xs">
          <Title order={1}>{t('research.title')}</Title>
          <Text c="dimmed" size="lg">{t('research.intro')}</Text>
        </Stack>

        <Divider />

        <ResearchTopic
          icon={IconAlertCircle}
          title={t('research.misdiagnosis.title')}
          text={t('research.misdiagnosis.text')}
          status="investigating"
        />

        <ResearchTopic
          icon={IconSalad}
          title={t('research.dietFungal.title')}
          text={t('research.dietFungal.text')}
          status="investigating"
        />

        <ResearchTopic
          icon={IconVirus}
          title={t('research.probioticsSkin.title')}
          text={t('research.probioticsSkin.text')}
          status="collecting"
        />

        <ResearchTopic
          icon={IconShield}
          title={t('research.immuneSystem.title')}
          text={t('research.immuneSystem.text')}
          status="investigating"
        />

        <ResearchTopic
          icon={IconUsers}
          title={t('research.communityNote.title')}
          text={t('research.communityNote.text')}
          status="collecting"
        />
      </Stack>
    </Container>
  );
}
