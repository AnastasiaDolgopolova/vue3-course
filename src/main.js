//import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';
import router from "@/router/index.js";
import directives from '@/directives';

//console.log(components);

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive);
})


app.use(router);

app.mount('#app')
