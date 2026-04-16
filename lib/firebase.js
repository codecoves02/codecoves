// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA96gKjI8IRGqEPW4rVXYEWQJY_jj_mhXg",
  authDomain: "codecoves-db1c4.firebaseapp.com",
  projectId: "codecoves-db1c4",
  storageBucket: "codecoves-db1c4.firebasestorage.app",
  messagingSenderId: "540494599605",
  appId: "1:540494599605:web:675a53495d84866909b5fc",
  measurementId: "G-Y1F5YCH4RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);