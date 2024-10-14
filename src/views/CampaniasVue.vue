<!--TODO: aqui va las campanias-->
<template>
  <div>
    <h1>Campañas</h1>
    <CrearCampaña />
  </div>
</template>

<script>
// Importamos el componente CrearCampaña
import CrearCampaña from '@/components/CrearCampaña.vue'; // O '@/views/CrearCampaña.vue' si está en el directorio de vistas

export default {
  components: {
    CrearCampaña // Lo registramos en los componentes del archivo
  }
};
</script>
