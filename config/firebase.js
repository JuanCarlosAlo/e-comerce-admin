// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: "e-comerce-420015.firebaseapp.com",
  projectId: "e-comerce-420015",
  storageBucket: "e-comerce-420015.appspot.com",
  messagingSenderId: "834319404320",
  appId: "1:834319404320:web:0eaf6f57d1b7ff5b5ddb45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);