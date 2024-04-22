import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWUBJIuFU-iRp6ELkH2-_jT2xxWHSBL8A",
  authDomain: "secondhand-website.firebaseapp.com",
  projectId: "secondhand-website",
  storageBucket: "secondhand-website.appspot.com",
  messagingSenderId: "572969560141",
  appId: "1:572969560141:web:eb6e06432ee4606b125404",
  databaseURL: "https://secondhand-website-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, database, auth, provider };
