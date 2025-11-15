// astro.config.js
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// La propiedad 'base' debe ser declarada en defineConfig
export default defineConfig({
  base: '/ecommerce-demo/', // ¡CRUCIAL!
  vite: {
    plugins: [tailwindcss()]
  }
});