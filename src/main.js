import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import vuetify from './plugins/vuetify'

// ✅ FIX: Use 'vuetify/styles' for Vuetify 3
// Do NOT use 'vuetify/dist/vuetify.css'
import 'vuetify/styles' 

import '@/styles/index.css'
import '@/styles/app.css'
import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

createApp(App)
  .use(pinia)
  .use(router)
  .use(vuetify)
  .mount('#app')