import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import router from './routes';
import I18nProvider from './i18n/I18nProvider';
import './styles/index.css';
import './styles/about.css';
import './styles/portofolio.css';
import './styles/contact.css';
import './styles/resume.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.css';

// After a deploy the old hashed chunks are gone, so a lazy import from a stale
// tab fails and the page renders blank. Reload once to pick up the new build.
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();
  try {
    const last = Number(sessionStorage.getItem('chunk-reload') ?? 0);
    if (Date.now() - last < 10_000) return;
    sessionStorage.setItem('chunk-reload', String(Date.now()));
  } catch {
    return;
  }
  window.location.reload();
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </I18nProvider>
  </React.StrictMode>
);
