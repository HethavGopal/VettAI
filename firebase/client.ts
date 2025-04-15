// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore}  from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCd47sgTVDcQex8GpbiKK2afTIhhzUbDM0",
    authDomain: "vettai.firebaseapp.com",
    projectId: "vettai",
    storageBucket: "vettai.firebasestorage.app",
    messagingSenderId: "307131767277",
    appId: "1:307131767277:web:82c2df8a1f2c4deeedefe4",
    measurementId: "G-8WGL1DRDY3"
};

// Initialize Firebase
const app = !getApp.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);