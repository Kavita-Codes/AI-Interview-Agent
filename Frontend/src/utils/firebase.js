// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "interviewai-68c7d.firebaseapp.com",
  projectId: "interviewai-68c7d",
  storageBucket: "interviewai-68c7d.firebasestorage.app",
  messagingSenderId: "153222927504",
  appId: "1:153222927504:web:47a1c0b0767a1ca79a3415"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const provider = new GoogleAuthProvider(auth);