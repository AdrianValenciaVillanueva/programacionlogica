import { createApp } from 'vue';
import App from './IniciarSesion.vue'; // Este es el contenedor principal
import router from './router'; // Importa el router
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const app = createApp(App);
app.use(router);
app.mount('#app');
