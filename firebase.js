import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBMrQUTq63ggqDk9IkIKaCWerFcm67Hq4U",
  authDomain: "react-notes-38bdf.firebaseapp.com",
  projectId: "react-notes-38bdf",
  storageBucket: "react-notes-38bdf.appspot.com",
  messagingSenderId: "911213328483",
  appId: "1:911213328483:web:147bf51df3279822832056"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
