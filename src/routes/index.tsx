import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../components/ui/shared/error-page';

/** Each page is its own chunk, loaded when the route is first visited. */
const page = (load: () => Promise<{ default: React.ComponentType }>) => ({
  lazy: async () => ({ Component: (await load()).default }),
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, ...page(() => import('../pages/Home')) },
      { path: '/me', ...page(() => import('../pages/About')) },
      { path: '/resume', ...page(() => import('../pages/Resume')) },
      { path: '/portfolio', ...page(() => import('../pages/Project')) },
      {
        path: '/porto/:id/project',
        ...page(() => import('../pages/DetailProject')),
      },
      { path: '/contact', ...page(() => import('../pages/Contact')) },
      {
        path: '/resume-online',
        ...page(() => import('../pages/ResumeOnline')),
      },
    ],
  },
]);

export default router;
