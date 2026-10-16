import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

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

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const siteUrl = (env.VITE_SITE_URL || '').replace(/\/+$/, '');

  return {
    plugins: [react(), dts({ rollupTypes: true }), siteMeta(siteUrl)],
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
