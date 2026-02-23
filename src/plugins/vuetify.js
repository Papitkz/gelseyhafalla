// src/plugins/vuetify.js
import 'vuetify/styles' // You can keep this here or in main.js, but usually one place is enough. 
                        // If you have it in main.js, you can remove it here to avoid duplication, though it won't break anything.

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
})