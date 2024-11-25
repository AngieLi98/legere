// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEnY7MMsUVfu25w5FdA6gSARPKSMaoYoQ",
  authDomain: "proyecto-legere.firebaseapp.com",
  projectId: "proyecto-legere",
  storageBucket: "proyecto-legere.firebasestorage.app",
  messagingSenderId: "689825435514",
  appId: "1:689825435514:web:c6587c46fe4fe9b5edd0c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);