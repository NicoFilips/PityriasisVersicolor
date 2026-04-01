import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <AppShell>
      <Header />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}
