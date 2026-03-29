import { Container, Text, Divider, Stack, Group, ActionIcon, Tooltip } from '@mantine/core';
import { IconBrandLinkedin, IconMail, IconBrandGithub } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <Container size="lg" component="footer" py="xl">
      <Divider mb="lg" />
      <Stack gap="md" align="center" ta="center">
        <Text size="sm" fw={500}>{t('footer.contact')}</Text>
        <Group gap="sm">
          <Tooltip label={t('footer.email')}>
            <ActionIcon
              component="a"
              href="mailto:inquiries@nicofilips.de"
              variant="default"
              size="xl"
              radius="md"
            >
              <IconMail size={20} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label={t('footer.linkedin')}>
            <ActionIcon
              component="a"
              href="https://www.linkedin.com/in/nicofilips/"
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              size="xl"
              radius="md"
            >
              <IconBrandLinkedin size={20} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label={t('footer.github')}>
            <ActionIcon
              component="a"
              href="https://github.com/NicoFilips/PityriasisVersicolor"
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              size="xl"
              radius="md"
            >
              <IconBrandGithub size={20} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <Stack gap={4}>
          <Text size="xs" c="dimmed">
            {t('footer.disclaimer')}
          </Text>
          <Text size="xs" c="dimmed">
            {t('footer.copyright', { year })}
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}
