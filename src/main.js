import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'
import './assets/print.css'
import VueHtmlToPaper from './plugins/VueHtmlToPaper'
import axios from 'axios'
import VueAxios from 'vue-axios'
const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=no',
    'scrollbars=no'
  ],
  styles: [
    'https://wollter.ru/app.a5fb9be7.css'
  ]
}
const app = createApp(App)
app.use(VueAxios, axios, VueHtmlToPaper, options)
app.mount('#app')
