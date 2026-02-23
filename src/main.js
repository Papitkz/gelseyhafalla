import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import vuetify from './plugins/vuetify'

// Replace this problematic line:
// import 'vuetify/styles'
// With this:
import 'vuetify/dist/vuetify.css'

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
