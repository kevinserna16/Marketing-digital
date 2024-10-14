import { createApp } from 'vue'; // Esto es para Vue 3
import { createVuetify } from 'vuetify'; // Esto es para Vuetify 3
import 'vuetify/styles'; // Estilos de Vuetify 3
import { aliases, mdi } from 'vuetify/iconsets/mdi'; // Importar Material Design Icons
import App from './App.vue';
import router from "./router";

// TODO: cuando sientas confianza con vue cambia todos esos campanias con enie a sin enie, que sea campanias asi mero, las tildes y eso no van en el codigo.
// Crear la instancia de Vuetify
const vuetify = createVuetify({
  theme: {
    // defaultTheme: 'light',
    themes: {
      light: {
        // primary: '#1976D2',
        // secondary: '#424242',
        // accent: '#82B1FF',
        // error: '#FF5252',
        // info: '#2196F3',
        // success: '#4CAF50',
        // warning: '#FFC107',
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

// Crear la app de Vue con Vuetify
createApp(App)
    .use(vuetify)
    .use(router)
    .mount('#app');
