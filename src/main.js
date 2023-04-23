import { createApp } from 'vue'
import App from './App.vue'

import components from './components.js'

import './reset.css'
import './style.sass'

const app = createApp(App);

components.forEach( component => {
  app.component(component.name, component)
});

app.mount('#app');