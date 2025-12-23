// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX7NsyxsDpVnk-oz8HfmEFqnqmqr9QE2k",
  authDomain: "mockmate-375b8.firebaseapp.com",
  projectId: "mockmate-375b8",
  storageBucket: "mockmate-375b8.firebasestorage.app",
  messagingSenderId: "891311675530",
  appId: "1:891311675530:web:837aea67ff70d1f9043573",
  measurementId: "G-WHFD6XYEQZ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)