// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';

import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDAQzTXhkVqpDe5_Wc7cfstMyda2_QoaY",
  authDomain: "pruebaunoapw.firebaseapp.com",
  projectId: "pruebaunoapw",
  storageBucket: "pruebaunoapw.firebasestorage.app",
  messagingSenderId: "640620456647",
  appId: "1:640620456647:web:0730f6296c70f666166ce2"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export const authFirebase = getAuth()

export const dbFirebase = getFirestore(appFirebase)

export default appFirebase