<template>
  <div class="list-container">
    <h2>Lista de Usuarios</h2>
    <ul class="user-list">
      <li v-for="user in users" :key="user.id" class="user-item">
        <span>{{ user.name }} - {{ user.email }}</span>
        <button @click="deleteUser(user.id)" class="delete-button">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['users']),
  },
  methods: {
    ...mapActions(['fetchUsers', 'deleteUser']),
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
.list-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #f0f8ff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
}

.user-list {
  list-style: none;
  padding: 0;
}

.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.user-item:last-child {
  border-bottom: none;
}

.delete-button {
  background-color: #ff6b6b;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #ff4b4b;
}
</style>
