import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

import '@firebase/firestore';
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    databaseURL: "https://slack-clone-277f2-default-rtdb.firebaseio.com/"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const database = getDatabase()
