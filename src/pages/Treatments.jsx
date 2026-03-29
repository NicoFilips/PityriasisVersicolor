import { Container, Title, Text, Stack } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export default function Treatments() {
  const { t } = useTranslation();

  return (
    <Container size="md" py="xl">
      <Stack gap="md">
        <Title order={1}>{t('treatments.title')}</Title>
        <Text c="dimmed">{t('treatments.intro')}</Text>
      </Stack>
    </Container>
  );
}
