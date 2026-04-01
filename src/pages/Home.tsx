import { Container, Title, Text, SimpleGrid, Stack, Box } from '@mantine/core';
import {
  IconBook,
  IconMicroscope,
  IconPill,
  IconFileSearch,
  IconHeartbeat,
  IconZoomQuestion,
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import SectionCard from '../components/SectionCard';

const sections = [
  { key: 'story', to: '/story', icon: IconBook },
  { key: 'disease', to: '/disease', icon: IconMicroscope },
  { key: 'treatments', to: '/treatments', icon: IconPill },
  { key: 'research', to: '/research', icon: IconFileSearch },
  { key: 'gutSkin', to: '/gut-skin', icon: IconHeartbeat },
  { key: 'misdiagnosis', to: '/misdiagnosis', icon: IconZoomQuestion },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        {/* Hero with gradient background and floating dots */}
        <Box className="hero-section" px="xl" py="xl" ta="center">
          <div className="hero-dot" />
          <div className="hero-dot" />
          <div className="hero-dot" />
          <div className="hero-dot" />
          <div className="hero-dot" />
          <Stack gap="md" align="center" style={{ position: 'relative', zIndex: 1 }}>
            <Title order={1} size="2.5rem" className="gradient-title reveal">
              {t('home.heroTitle')}
            </Title>
            <Text size="lg" maw={700} c="dimmed" className="reveal reveal-delay-1">
              {t('home.heroText')}
            </Text>
          </Stack>
        </Box>

        <Stack gap="md" mt="md" className="reveal reveal-delay-2">
          <Title order={2} ta="center" className="gradient-title">{t('home.whatIs.title')}</Title>
          <Text ta="center" maw={700} mx="auto" c="dimmed">
            {t('home.whatIs.text')}
          </Text>
        </Stack>

        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing="lg"
          mt="xl"
        >
          {sections.map((section, i) => (
            <SectionCard
              key={section.key}
              to={section.to}
              icon={section.icon}
              title={t(`home.sections.${section.key}.title`)}
              text={t(`home.sections.${section.key}.text`)}
              className={`reveal reveal-delay-${i + 1}`}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
