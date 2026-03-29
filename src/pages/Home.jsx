import { Container, Title, Text, SimpleGrid, Stack } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import SectionCard from '../components/SectionCard';

const sections = [
  { key: 'story', to: '/story', icon: '📖' },
  { key: 'disease', to: '/disease', icon: '🔬' },
  { key: 'treatments', to: '/treatments', icon: '💊' },
  { key: 'research', to: '/research', icon: '📚' },
  { key: 'gutSkin', to: '/gut-skin', icon: '🧬' },
  { key: 'misdiagnosis', to: '/misdiagnosis', icon: '🔍' },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Stack gap="md" align="center" ta="center">
          <Title order={1}>{t('home.heroTitle')}</Title>
          <Text size="lg" maw={700} c="dimmed">
            {t('home.heroText')}
          </Text>
        </Stack>

        <Stack gap="md" mt="xl">
          <Title order={2} ta="center">{t('home.whatIs.title')}</Title>
          <Text ta="center" maw={700} mx="auto" c="dimmed">
            {t('home.whatIs.text')}
          </Text>
        </Stack>

        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing="lg"
          mt="xl"
        >
          {sections.map((section) => (
            <SectionCard
              key={section.key}
              to={section.to}
              icon={section.icon}
              title={t(`home.sections.${section.key}.title`)}
              text={t(`home.sections.${section.key}.text`)}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
