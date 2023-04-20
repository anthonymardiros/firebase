// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4Mp7XOIa44MrNbnjLMgOdD__WDgAv0DA",
  authDomain: "fir-practice-f622e.firebaseapp.com",
  projectId: "fir-practice-f622e",
  storageBucket: "fir-practice-f622e.appspot.com",
  messagingSenderId: "113763981453",
  appId: "1:113763981453:web:ac8c17211ac7d67c976ac4",
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
