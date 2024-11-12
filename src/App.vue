<template>
  <div>
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
