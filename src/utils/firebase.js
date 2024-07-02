// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD54Ez5bnUYMikHfOUB35GPHWREU5dsuYk",
  authDomain: "netflix-gpt-374ae.firebaseapp.com",
  projectId: "netflix-gpt-374ae",
  storageBucket: "netflix-gpt-374ae.appspot.com",
  messagingSenderId: "23359254827",
  appId: "1:23359254827:web:54ad57410f24114b0ed56e",
  measurementId: "G-55YK5F1G1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();