import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import components from './components.js'
import router from './router/router'

import './reset.css'
import './style.sass'

const app = createApp(App);
const pinia = createPinia()

components.forEach( component => {
  app.component(component.name, component)
});

app
  .use(pinia)
  .use(router)
  .mount('#app');