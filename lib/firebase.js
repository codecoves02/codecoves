import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA96gKjI8IRGqEPW4rVXYEWQJY_jj_mhXg",
  authDomain: "codecoves-db1c4.firebaseapp.com",
  projectId: "codecoves-db1c4",
  storageBucket: "codecoves-db1c4.firebasestorage.app",
  messagingSenderId: "540494599605",
  appId: "1:540494599605:web:675a53495d84866909b5fc",
  measurementId: "G-Y1F5YCH4RS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);