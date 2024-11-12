import { createStore } from 'vuex';
import { db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default createStore({
  state: {
    users: [], 
  },
  mutations: {
    setUsers(state, users) {
      state.users = users; 
    },
    addUser(state, user) {
      state.users.push(user); 
    },
    deleteUser(state, userId) {
      state.users = state.users.filter(user => user.id !== userId); 
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const usersCollection = collection(db, 'users');
      const userSnapshot = await getDocs(usersCollection);
      const users = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      commit('setUsers', users); 
    },
    async addUser({ commit }, user) {
      try {
        const usersCollection = collection(db, 'users');
        const docRef = await addDoc(usersCollection, user);
        commit('addUser', { id: docRef.id, ...user }); 
      } catch (error) {
        console.error('Error al agregar usuario:', error);
      }
    },
    async deleteUser({ commit }, userId) {
      await deleteDoc(doc(db, 'users', userId));
      commit('deleteUser', userId); 
    },
  },
});
