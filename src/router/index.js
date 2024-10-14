import { createRouter, createWebHistory } from 'vue-router'; // Importar el enrutador de Vue 3
import Home from '@/views/HomeVue.vue';
import Registro from '@/views/RegistroVue.vue';
import Campanias from '@/views/CampaniasVue.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/registro', component: Registro },
  { path: '/campañas', component: Campanias }
];

const router = createRouter({
  history: createWebHistory(), // Usar modo 'history' en Vue Router 4
  routes, // Definir las rutas
});

export default router;
