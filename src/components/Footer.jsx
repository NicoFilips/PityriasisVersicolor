import { Container, Text, Divider, Stack } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <Container size="lg" component="footer" py="xl">
      <Divider mb="md" />
      <Stack gap="xs" align="center" ta="center">
        <Text size="xs" c="dimmed">
          {t('footer.disclaimer')}
        </Text>
        <Text size="xs" c="dimmed">
          {t('footer.copyright', { year })}
        </Text>
      </Stack>
    </Container>
  );
}
