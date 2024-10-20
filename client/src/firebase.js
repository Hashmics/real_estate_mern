// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-real-estate-bc189.firebaseapp.com",
    projectId: "mern-real-estate-bc189",
    storageBucket: "mern-real-estate-bc189.appspot.com",
    messagingSenderId: "479722699379",
    appId: "1:479722699379:web:ac30347973ee1556464806"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);