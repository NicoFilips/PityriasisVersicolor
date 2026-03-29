import { Container, Title, Text, Stack } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export default function Story() {
  const { t } = useTranslation();

  return (
    <Container size="md" py="xl">
      <Stack gap="md">
        <Title order={1}>{t('story.title')}</Title>
        <Text c="dimmed">{t('story.intro')}</Text>
      </Stack>
    </Container>
  );
}
