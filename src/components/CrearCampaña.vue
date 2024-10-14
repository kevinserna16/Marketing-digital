<template>
  <div>
<!--    TODO: Aqui define buenos colores para usar que se vea bontio...-->
    <h2>Crear Campaña Turística</h2>
<!--    TODO: Intenta usar los componentes del vuetify-->
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
      campaña: { // TODO: cambiar por campanias pero cuando sientas confianza...
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
        // TODO: aqui va la llamada a la API y como esta en el ejemplo se pasas la informacion
        // TODO: de momento usa
        alert('Campaña creada con éxito');
      } catch (error) {
        console.error('Error creando campaña', error);
      }
    }
  }
};
</script>