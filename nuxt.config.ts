// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-viewport", "@pinia/nuxt", "@nuxt/image"],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  typescript: {
    typeCheck: true,
  },
  tailwindcss: {
    exposeConfig: true,
  },
});