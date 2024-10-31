import { createRouter, createWebHistory } from 'vue-router';
import IniciarComp from './components/InicioComp.vue';
import CrearCuenta from './CrearCuenta.vue';
import CrearEquipo from './CrearEquipo.vue';
import PanelUsuario from './PanelUsuario.vue';

const routes = [
  { path: '/', redirect: '/iniciar-sesion'},
  { path: '/iniciar-sesion', component: IniciarComp }, 
  { path: '/crear-cuenta', component: CrearCuenta },
  { path: '/crear-equipo', component: CrearEquipo },
  { path: '/panel-usuario', component: PanelUsuario}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

