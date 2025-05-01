// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwqI3N_5JD1dUxTzhf_bRvP5k-2pI6A9g",
  authDomain: "netflix-gpt-f135a.firebaseapp.com",
  projectId: "netflix-gpt-f135a",
  storageBucket: "netflix-gpt-f135a.firebasestorage.app",
  messagingSenderId: "978859178131",
  appId: "1:978859178131:web:ce7926fffa3504f251b566",
  measurementId: "G-MJ90Y2Q598"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();