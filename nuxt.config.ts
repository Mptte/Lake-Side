import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  ssr: false,
  typescript: {
    shim: false,
  },
  generate: {
    fallback: "true",
  },
});
