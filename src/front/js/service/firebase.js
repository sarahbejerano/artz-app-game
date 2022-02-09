import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "final-project-fsc.firebaseapp.com",
    projectId: "final-project-fsc",
    storageBucket: "final-project-fsc.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};


export const app = initializeApp(firebaseConfig);
