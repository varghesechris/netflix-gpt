// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC530wmYrBrjYNbWwxvGLDvUlW2jC3nBZk",
  authDomain: "netflixgpt-5df2d.firebaseapp.com",
  projectId: "netflixgpt-5df2d",
  storageBucket: "netflixgpt-5df2d.appspot.com",
  messagingSenderId: "618067028722",
  appId: "1:618067028722:web:980c1c62a266ab9dd87e6b",
  measurementId: "G-09K0S5HFTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;

