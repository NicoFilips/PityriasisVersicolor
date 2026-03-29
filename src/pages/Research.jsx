import { Container, Title, Text, Stack } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export default function Research() {
  const { t } = useTranslation();

  return (
    <Container size="md" py="xl">
      <Stack gap="md">
        <Title order={1}>{t('research.title')}</Title>
        <Text c="dimmed">{t('research.intro')}</Text>
      </Stack>
    </Container>
  );
}
