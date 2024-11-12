<template>
  <form @submit.prevent="submitUser">
    <input v-model="name" placeholder="Nombre" required />
    <input v-model="email" placeholder="Correo electrónico" required />
    <button type="submit">Agregar Usuario</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      name: '',
      email: '',
    };
  },
  methods: {
    ...mapActions(['addUser']), 
    async submitUser() {
      if (this.name && this.email) {
        await this.addUser({ name: this.name, email: this.email });
        this.name = '';
        this.email = '';
      }
    },
  },
};
</script>

