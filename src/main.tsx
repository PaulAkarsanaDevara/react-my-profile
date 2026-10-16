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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </I18nProvider>
  </React.StrictMode>
);
