import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  output: "server",
  adapter: vercel({
    imageService: true,
  })
});