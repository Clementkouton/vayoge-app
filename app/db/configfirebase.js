// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCYCMQ-QtX4xNJvroY4DfeAsh6rnu9x8mI",
  authDomain: "voyage-app1.firebaseapp.com",
  projectId: "voyage-app1",
  storageBucket: "voyage-app1.appspot.com",
  messagingSenderId: "209096829779",
  appId: "1:209096829779:web:bb18c796bc98bab551cfa6"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
