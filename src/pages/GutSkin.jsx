import { Container, Title, Text, Stack } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export default function GutSkin() {
  const { t } = useTranslation();

  return (
    <Container size="md" py="xl">
      <Stack gap="md">
        <Title order={1}>{t('gutSkin.title')}</Title>
        <Text c="dimmed">{t('gutSkin.intro')}</Text>
      </Stack>
    </Container>
  );
}
