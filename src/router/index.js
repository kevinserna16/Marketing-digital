import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Registro from '@/views/Registro.vue';
import Campañas from '@/views/Campañas.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/registro', component: Registro },
    { path: '/campañas', component: Campañas }
  ]
});

