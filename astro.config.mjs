// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://ederblanco.dev',
  integrations: [
    tailwind(),
    icon({
      include: {
        "simple-icons": ["*"],
        "vscode-icons": ["*"]
      }
    }),
    // Integración de Sanity
    sanity({
      projectId: "2a5byq8s",
      dataset: "production",
      useCdn: false, // para builds estáticos
      apiVersion: "2023-03-20", // usa la fecha actual en formato YYYY-MM-DD
    }),
  ]
});
