import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: netlify(),
    site: 'https://www.johnthedev.com',
    integrations: [
        react(),
        tailwind(),
    ]
});
