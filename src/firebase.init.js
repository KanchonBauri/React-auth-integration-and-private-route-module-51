// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWt5rx8sAo0UXGOzNWQKfBPpOCrU3PUn0",
  authDomain: "auth-moha-milon-12d1b.firebaseapp.com",
  projectId: "auth-moha-milon-12d1b",
  storageBucket: "auth-moha-milon-12d1b.firebasestorage.app",
  messagingSenderId: "54090884371",
  appId: "1:54090884371:web:f3f0651f0a9af4453c66e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);
