import { createApp } from 'vue';
import App from './IniciarSesion.vue'; // Este es el contenedor principal
import router from './router'; // Importa el router

const app = createApp(App);
app.use(router);
app.mount('#app');
