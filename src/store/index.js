import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuario: null,
    campañas: []
  },
  mutations: {
    setUsuario(state, usuario) {
      state.usuario = usuario;
    },
    setCampañas(state, campañas) {
      state.campañas = campañas;
    }
  },
  actions: {
    registrarUsuario({ commit }, usuario) {
      // Lógica para registrar el usuario (con axios, por ejemplo)
      commit('setUsuario', usuario);
    },
    crearCampaña({ commit }, campaña) {
      // Lógica para crear la campaña
      commit('setCampañas', campaña);
    }
  }
});
