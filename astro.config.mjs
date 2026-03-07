// @ts-check
import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import { loadEnv } from 'vite';

const env = loadEnv('', process.cwd(), 'PUBLIC_');

export default defineConfig({
  output: 'server',
  vite: {
    define: {
      'import.meta.env.PUBLIC_SUPABASE_URL': JSON.stringify(env.PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'),
      'import.meta.env.PUBLIC_SUPABASE_ANON_KEY': JSON.stringify(env.PUBLIC_SUPABASE_ANON_KEY || 'placeholder_key'),
    }
  },
  integrations: [
    react(),
    AstroPWA({
      registerType: 'autoUpdate',
      injectRegister: 'script',
      manifest: {
        name: 'Lifeline Jacket Bible Study',
        short_name: 'Lifeline Jacket',
        description: 'Bible Study App for Lifeline Jacket',
        theme_color: '#1a1a2e',
        background_color: '#1a1a2e',
        display: 'standalone',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: 'favicon.svg',
            sizes: '512x512',
            type: 'image/svg+xml'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,gif,webp,woff,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // < 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],

  adapter: vercel(),
});