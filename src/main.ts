import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import App from './App.vue'
import router from './router'

const licenseKey = import.meta.env.VITE_PRIMEVUE_LICENSE_KEY

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
  license: licenseKey,
})
app.use(createPinia())
app.use(router)

app.mount('#app')
