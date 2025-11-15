// astro.config.js
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 👇 AÑADIR ESTA LÍNEA
  base: '/ecommerce-demo/',
  // 👆
  vite: {
    plugins: [tailwindcss()]
  }
});