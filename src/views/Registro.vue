<template>
    <v-container>
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="usuario.nombre"
          :rules="[rules.required]"
          label="Nombre"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="usuario.email"
          :rules="[rules.required, rules.email]"
          label="Email"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="usuario.password"
          :rules="[rules.required]"
          label="Contraseña"
          type="password"
          required
        ></v-text-field>
  
        <v-btn :disabled="!valid" @click="registrarUsuario">Registrar</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        valid: false,
        usuario: {
          nombre: '',
          email: '',
          password: ''
        },
        rules: {
          required: value => !!value || 'Este campo es obligatorio',
          email: value => /.+@.+\..+/.test(value) || 'Email inválido'
        }
      };
    },
    methods: {
      registrarUsuario() {
        if (this.$refs.form.validate()) {
          // Aquí puedes manejar el envío de datos
          console.log('Usuario registrado:', this.usuario);
        }
      }
    }
  };
  </script>
  