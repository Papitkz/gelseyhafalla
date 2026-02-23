// src/plugins/vuetify.js
// Remove: import 'vuetify/styles'  - handled in main.js now

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
})
