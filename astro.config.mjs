import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/static';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true },
    imagesConfig: { sizes: [320, 640, 1280] },
    imageService: true,
  })
});