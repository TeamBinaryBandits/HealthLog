import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {  apiKey: "AIzaSyBhuRFWYHWV3iFDLzNH7THdp9xAjSV0vD0",
  authDomain: "healthlog-app-fd3dd.firebaseapp.com",
  projectId: "healthlog-app-fd3dd",
  storageBucket: "healthlog-app-fd3dd.firebasestorage.app",
  messagingSenderId: "564837681594",
  appId: "1:564837681594:web:e2dc478821431ca8f5b583",
  measurementId: "G-WTKS0LGBQT" };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);