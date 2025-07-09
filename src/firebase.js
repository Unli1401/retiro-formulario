// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGF2xxptXOFGAxq2toKQuxtfTE7asMgU4",
  authDomain: "retiro-formulario.firebaseapp.com",
  projectId: "retiro-formulario",
  storageBucket: "retiro-formulario.firebasestorage.app",
  messagingSenderId: "797567264303",
  appId: "1:797567264303:web:107742ffc84a055cb388da",
  measurementId: "G-V9Z3ME31Y3"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore and assign to db

export {db};