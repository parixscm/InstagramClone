import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXcgKmaRIhCit-OxO0y_aaUqeyv7voK_A",
  authDomain: "insta-clone-5c43f.firebaseapp.com",
  projectId: "insta-clone-5c43f",
  storageBucket: "insta-clone-5c43f.appspot.com",
  messagingSenderId: "815534030278",
  appId: "1:815534030278:web:e45db9b683acf11fba86c7",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
