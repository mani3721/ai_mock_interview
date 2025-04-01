import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdRN8jhxFST-PMT6ke_WmBSnbiU988iJM",
  authDomain: "propwise-5b150.firebaseapp.com",
  projectId: "propwise-5b150",
  storageBucket: "propwise-5b150.firebasestorage.app",
  messagingSenderId: "633289567303",
  appId: "1:633289567303:web:67b5b49d4aae02cfc79562",
  measurementId: "G-FEDVZZXDJB"
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);