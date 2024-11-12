<template>
  <div class="app-container">
    <UserForm />
    <UserList />
  </div>
</template>

<script>
import UserForm from './components/UserForm.vue';
import UserList from './components/UserList.vue';

export default {
  components: {
    UserForm,
    UserList,
  },
};
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #e8f1f2;
  min-height: 100vh;
}
</style>
