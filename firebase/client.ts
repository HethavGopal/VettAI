// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCd47sgTVDcQex8GpbiKK2afTIhhzUbDM0",
    authDomain: "vettai.firebaseapp.com",
    projectId: "vettai",
    storageBucket: "vettai.firebasestorage.app",
    messagingSenderId: "307131767277",
    appId: "1:307131767277:web:82c2df8a1f2c4deeedefe4",
    measurementId: "G-8WGL1DRDY3"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)
