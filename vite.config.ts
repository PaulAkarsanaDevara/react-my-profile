import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

const SITEMAP_ROUTES = ['/', '/me', '/resume', '/portfolio', '/contact'];

/**
 * Fills the public site URL (VITE_SITE_URL) into index.html and emits
 * robots.txt / sitemap.xml at build time. Without a URL, the sitemap is
 * skipped because sitemaps require absolute URLs.
 */
const siteMeta = (siteUrl: string): Plugin => ({
  name: 'site-meta',
  transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl),
  generateBundle() {
    const robots = ['User-agent: *', 'Allow: /'];
    if (siteUrl) robots.push(`Sitemap: ${siteUrl}/sitemap.xml`);
    this.emitFile({
      type: 'asset',
      fileName: 'robots.txt',
      source: robots.join('\n') + '\n',
    });

    if (!siteUrl) return;
    const urls = SITEMAP_ROUTES.map(
      (route) => `  <url><loc>${siteUrl}${route === '/' ? '' : route}</loc></url>`
    ).join('\n');
    this.emitFile({
      type: 'asset',
      fileName: 'sitemap.xml',
      source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    });
  },
});

/**
 * PWA: installable app + offline support. The app shell is precached; PDFs,
 * the pdf.js worker and Google Fonts are cached at runtime on first use.
 */
const pwa = () =>
  VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.svg', 'icons/apple-touch-icon.png'],
    manifest: {
      name: 'Farhan — Full Stack Developer',
      short_name: 'Farhan',
      description:
        'Portfolio of Farhan, a Full Stack Developer working across frontend, backend and DevOps.',
      lang: 'en',
      start_url: '/',
      scope: '/',
      display: 'standalone',
      orientation: 'portrait',
      theme_color: '#030305',
      background_color: '#030305',
      icons: [
        { src: '/icons/pwa-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icons/pwa-512.png', sizes: '512x512', type: 'image/png' },
        {
          src: '/icons/pwa-maskable-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
      shortcuts: [
        { name: 'Portfolio', url: '/portfolio', icons: [{ src: '/icons/pwa-192.png', sizes: '192x192' }] },
        { name: 'Contact', url: '/contact', icons: [{ src: '/icons/pwa-192.png', sizes: '192x192' }] },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,webp,ico,webmanifest}'],
      // heavy and rarely needed: cached on first use instead (see runtimeCaching)
      globIgnores: ['**/PdfPreview-*', '**/og-image.png'],
      navigateFallback: '/index.html',
      // downloads/PDFs must reach the network (or runtime cache), not the SPA shell
      navigateFallbackDenylist: [/^\/uploads\//, /^\/sitemap\.xml$/, /^\/robots\.txt$/],
      cleanupOutdatedCaches: true,
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.pathname.startsWith('/assets/PdfPreview-'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'pdf-viewer',
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        {
          urlPattern: ({ url }) => url.pathname.startsWith('/uploads/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'documents',
            expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 30 },
            cacheableResponse: { statuses: [0, 200] },
            rangeRequests: true,
          },
        },
        {
          urlPattern: ({ url }) => url.hostname === 'unpkg.com',
          handler: 'CacheFirst',
          options: {
            cacheName: 'pdf-worker',
            expiration: { maxEntries: 4, maxAgeSeconds: 60 * 60 * 24 * 365 },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        {
          urlPattern: ({ url }) => url.hostname === 'fonts.googleapis.com',
          handler: 'StaleWhileRevalidate',
          options: { cacheName: 'google-fonts-css' },
        },
        {
          urlPattern: ({ url }) => url.hostname === 'fonts.gstatic.com',
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-files',
            expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
      ],
    },
  });

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const siteUrl = (env.VITE_SITE_URL || '').replace(/\/+$/, '');

  return {
    plugins: [react(), siteMeta(siteUrl), pwa()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            motion: ['framer-motion'],
            ui: ['react-bootstrap'],
          },
        },
      },
    },
  };
});
