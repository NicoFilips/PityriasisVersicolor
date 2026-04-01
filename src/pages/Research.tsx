import { Container, Title, Text, Stack, Divider, ThemeIcon, Group, Badge } from '@mantine/core';
import { IconAlertCircle, IconSalad, IconVirus, IconShield, IconUsers } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import HoverPaper from '../components/HoverPaper';
import { ComponentType } from 'react';

interface ResearchTopicProps {
  icon: ComponentType<{ size: number }>;
  title: string;
  text: string;
  status: 'investigating' | 'collecting';
  delay?: number;
}

function ResearchTopic({ icon: Icon, title, text, status, delay = 0 }: ResearchTopicProps) {
  return (
    <HoverPaper p="lg" radius="md" withBorder className={`reveal reveal-delay-${delay}`}>
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
    </HoverPaper>
  );
}

export default function Research() {
  const { t } = useTranslation();

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Stack gap="xs" className="reveal">
          <Title order={1} className="gradient-title">{t('research.title')}</Title>
          <Text c="dimmed" size="lg">{t('research.intro')}</Text>
        </Stack>

        <Divider className="reveal reveal-delay-1" />

        <ResearchTopic
          icon={IconAlertCircle}
          title={t('research.misdiagnosis.title')}
          text={t('research.misdiagnosis.text')}
          status="investigating"
          delay={2}
        />

        <ResearchTopic
          icon={IconSalad}
          title={t('research.dietFungal.title')}
          text={t('research.dietFungal.text')}
          status="investigating"
          delay={3}
        />

        <ResearchTopic
          icon={IconVirus}
          title={t('research.probioticsSkin.title')}
          text={t('research.probioticsSkin.text')}
          status="collecting"
          delay={4}
        />

        <ResearchTopic
          icon={IconShield}
          title={t('research.immuneSystem.title')}
          text={t('research.immuneSystem.text')}
          status="investigating"
          delay={5}
        />

        <ResearchTopic
          icon={IconUsers}
          title={t('research.communityNote.title')}
          text={t('research.communityNote.text')}
          status="collecting"
          delay={6}
        />
      </Stack>
    </Container>
  );
}
