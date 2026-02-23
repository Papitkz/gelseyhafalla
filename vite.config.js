// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'node:url' // <-- ADD THIS IMPORT

export default defineConfig({
  plugins: [
    vue(),
    Icons({
      autoInstall: true,
    }),
    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ['lucide'],
        }),
      ],
    }),
  ],
  server: {
  // host: '10.169.142.147', // This allows access from other devices on the network
  host: '10.169.130.43', // This allows access from other devices on the network
  port: 5177,
  proxy: {
      // '/api': 'http://10.169.141.193:8001' // Adjust this URL if needed
      '/api': 'http://10.169.142.147:8001' // Adjust this URL if needed
  }},
  resolve: {
    alias: {
      // <-- ADD THIS SECTION
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})