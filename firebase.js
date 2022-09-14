// Import the functions you need from the SDKs you need
import { initializeApp, getApps,getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhmt8gNJgRwLPB-b8ygeX99PxDNFWcua0",
    authDomain: "insta-nextjs-b4f8e.firebaseapp.com",
    projectId: "insta-nextjs-b4f8e",
    storageBucket: "insta-nextjs-b4f8e.appspot.com",
    messagingSenderId: "348646772402",
    appId: "1:348646772402:web:97b0cec66fd77c284d83ab"
};

// Initialize Firebase
// checker først om der er en app ? hvis der ikke er en initializer den en app...
// ellers tag den der allerede er. singleton pattern
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };