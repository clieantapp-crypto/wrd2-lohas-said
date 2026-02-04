// firebase.ts
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVuDP2-RaK509rdoZUGarOkdBb4CpT_f8",
  authDomain: "neewtaminsss.firebaseapp.com",
  databaseURL: "https://neewtaminsss-default-rtdb.firebaseio.com",
  projectId: "neewtaminsss",
  storageBucket: "neewtaminsss.firebasestorage.app",
  messagingSenderId: "873192027415",
  appId: "1:873192027415:web:724aafce2bcdbdb8e73352",
  measurementId: "G-JB0KP1FZH4"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth, db, database };
