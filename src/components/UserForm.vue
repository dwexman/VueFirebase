<template>
  <div class="form-container">
    <h2>Agregar Usuario</h2>
    <form @submit.prevent="submitUser" class="user-form">
      <input v-model="name" placeholder="Nombre" required />
      <input v-model="email" placeholder="Correo electrónico" required />
      <button type="submit">Agregar Usuario</button>
    </form>
  </div>
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

<style scoped>
.form-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
  color: #333;
}

.user-form input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}

.user-form button {
  width: 100%;
  padding: 10px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
}

.user-form button:hover {
  background-color: #0056b3;
}
</style>
