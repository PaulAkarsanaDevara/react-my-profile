import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import router from './routes';
import './styles/index.css';
import './styles/about.css';
import './styles/experience.css';
import './styles/portofolio.css';
import './styles/contact.css';
import './styles/resume.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './styles/theme.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
