import { createRouter, createWebHistory } from 'vue-router';
import IniciarComp from './components/InicioComp.vue';
import CrearCuenta from './CrearCuenta.vue';
import CrearEquipo from './CrearEquipo.vue';
import PanelUsuario from './PanelUsuario.vue';
import HomeAdmin from './components/admin/HomeAdmin.vue';
import SeeTasks from './components/admin/SeeTasks.vue';
import TaskForm from './components/admin/TaskForm.vue';
import UsuariosAsignados from './components/admin/utils/UsuariosAsignados.vue';

const routes = [
  { path: '/', redirect: '/iniciar-sesion'},
  { path: '/iniciar-sesion', component: IniciarComp }, 
  { path: '/crear-cuenta', component: CrearCuenta },
  { path: '/crear-equipo', component: CrearEquipo },
  { path: '/panel-usuario', component: PanelUsuario, name:'panel-usuario'},
  { path: '/panel-admin/:userId', component: HomeAdmin, name:'panel-admin',
    children: [
      {path: 'ver-tareas/:teamId', component: SeeTasks, name:'ver-tareas'},
      {path: 'crear-tareas/:teamId', component: TaskForm, name:'crear-tareas'},
    ],
  },
  {path: '/tareas-usuarios/:teamId/:tarea', component: UsuariosAsignados, name: 'tareas-usuarios'}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

