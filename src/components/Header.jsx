import {
  Group,
  Title,
  Burger,
  Drawer,
  Stack,
  UnstyledButton,
  Text,
  Container,
  Divider,
  Box,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import {
  IconHome,
  IconBook,
  IconMicroscope,
  IconPill,
  IconFileSearch,
  IconHeartbeat,
} from '@tabler/icons-react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { key: 'home', to: '/', icon: IconHome },
  { key: 'story', to: '/story', icon: IconBook },
  { key: 'disease', to: '/disease', icon: IconMicroscope },
  { key: 'treatments', to: '/treatments', icon: IconPill },
  { key: 'research', to: '/research', icon: IconFileSearch },
  { key: 'gutSkin', to: '/gut-skin', icon: IconHeartbeat },
];

function NavItem({ to, label, icon: Icon, active, onClick }) {
  return (
    <UnstyledButton
      component={Link}
      to={to}
      onClick={onClick}
      py={8}
      px={12}
      style={(theme) => ({
        borderRadius: theme.radius.md,
        backgroundColor: active
          ? 'var(--mantine-color-violet-light)'
          : 'transparent',
        color: active
          ? 'var(--mantine-color-violet-light-color)'
          : 'var(--mantine-color-dimmed)',
        transition: 'background-color 150ms ease, color 150ms ease',
        '&:hover': {
          backgroundColor: active
            ? 'var(--mantine-color-violet-light)'
            : 'var(--mantine-color-default-hover)',
        },
      })}
      className="nav-item"
    >
      <Group gap={8} wrap="nowrap">
        <Icon size={18} stroke={active ? 2 : 1.5} />
        <Text size="sm" fw={active ? 600 : 400}>{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

function MobileNavItem({ to, label, icon: Icon, active, onClick }) {
  return (
    <UnstyledButton
      component={Link}
      to={to}
      onClick={onClick}
      py={12}
      px={16}
      style={(theme) => ({
        borderRadius: theme.radius.md,
        backgroundColor: active
          ? 'var(--mantine-color-violet-light)'
          : 'transparent',
        color: active
          ? 'var(--mantine-color-violet-light-color)'
          : 'inherit',
      })}
    >
      <Group gap={12}>
        <Icon size={20} stroke={active ? 2 : 1.5} />
        <Text size="md" fw={active ? 600 : 400}>{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <Box component="header" style={{ borderBottom: '1px solid var(--mantine-color-default-border)' }}>
      <Container size="lg" py="md">
        <Group justify="space-between">
          <Title
            order={3}
            component={Link}
            to="/"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {t('site.title')}
          </Title>

          <Group gap="sm" visibleFrom="sm">
            <LanguageSwitcher />
            <ThemeToggle />
          </Group>

          <Group gap="xs" hiddenFrom="sm">
            <LanguageSwitcher />
            <ThemeToggle />
            <Burger opened={opened} onClick={toggle} size="sm" />
          </Group>
        </Group>

        <Group gap={4} mt="sm" visibleFrom="sm">
          {navItems.map((item) => (
            <NavItem
              key={item.key}
              to={item.to}
              label={t(`nav.${item.key}`)}
              icon={item.icon}
              active={location.pathname === item.to}
            />
          ))}
        </Group>
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        title={t('site.title')}
        size="xs"
        position="right"
      >
        <Stack gap={4}>
          {navItems.map((item) => (
            <MobileNavItem
              key={item.key}
              to={item.to}
              label={t(`nav.${item.key}`)}
              icon={item.icon}
              active={location.pathname === item.to}
              onClick={close}
            />
          ))}
        </Stack>
      </Drawer>
    </Box>
  );
}
