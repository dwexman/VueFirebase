import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS1s8aFNxu918p31Wvg1-eDoJnZpBDnhI",
  authDomain: "vue-proyect-1a9df.firebaseapp.com",
  projectId: "vue-proyect-1a9df",
  storageBucket: "vue-proyect-1a9df.firebasestorage.app",
  messagingSenderId: "686013351689",
  appId: "1:686013351689:web:9f2e23e46aeaac0dadf5d8",
  measurementId: "G-P5CC282H45"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { db };