//import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';
import router from "@/router/index.js";

//console.log(components);

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.use(router);

app.mount('#app')
