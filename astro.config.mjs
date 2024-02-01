import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/serverless';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
    imageService: true,
  })
});