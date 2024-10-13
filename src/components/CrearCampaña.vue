html

<template>
  <div>
    <h2>Crear Campaña Turística</h2>
    <form @submit.prevent="crearCampaña">
      <label for="titulo">Título de la campaña:</label>
      <input type="text" v-model="campaña.titulo" required />

      <label for="descripcion">Descripción:</label>
      <textarea v-model="campaña.descripcion"></textarea>

      <label for="fechaInicio">Fecha de Inicio:</label>
      <input type="date" v-model="campaña.fechaInicio" required />

      <label for="fechaFin">Fecha de Fin:</label>
      <input type="date" v-model="campaña.fechaFin" required />

      <label for="presupuesto">Presupuesto:</label>
      <input type="number" v-model="campaña.presupuesto" required />

      <button type="submit">Crear Campaña</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      campaña: {
        titulo: '',
        descripcion: '',
        fechaInicio: '',
        fechaFin: '',
        presupuesto: ''
      }
    };
  },
  methods: {
    async crearCampaña() {
      try {
        // Aquí enviarías los datos a la API
        // Ejemplo: await axios.post('/api/campañas', this.campaña)
        alert('Campaña creada con éxito');
      } catch (error) {
        console.error('Error creando campaña', error);
      }
    }
  }
};
</script>