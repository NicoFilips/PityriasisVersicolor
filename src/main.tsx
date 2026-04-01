import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './styles/global.css';
import './i18n';
import theme from './theme';
import App from './App';
import Search from './components/Search';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={null}>
      <HashRouter>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <App />
          <Search />
        </MantineProvider>
      </HashRouter>
    </Suspense>
  </StrictMode>,
);
