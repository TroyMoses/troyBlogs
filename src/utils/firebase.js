// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-2f362.firebaseapp.com",
  projectId: "blog-2f362",
  storageBucket: "blog-2f362.appspot.com",
  messagingSenderId: "648190230431",
  appId: "1:648190230431:web:1a8ae1ff63388cf78a07aa",
  measurementId: "G-0PGSCCV24S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);