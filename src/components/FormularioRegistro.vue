html
<template>
  <div>
    <h2>Registro de Usuario</h2>
    <form @submit.prevent="registrarUsuario">
      <label for="nombre">Nombre:</label>
      <input type="text" v-model="usuario.nombre" required />

      <label for="email">Email:</label>
      <input type="email" v-model="usuario.email" required />

      <label for="password">Contraseña:</label>
      <input type="password" v-model="usuario.password" required />

      <button type="submit">Registrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        nombre: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async registrarUsuario() {
      try {
        // Aquí enviarías los datos a una API
        // Ejemplo: await axios.post('/api/registro', this.usuario)
        alert('Usuario registrado con éxito');
      } catch (error) {
        console.error('Error registrando usuario', error);
      }
    }
  }
};
</script>