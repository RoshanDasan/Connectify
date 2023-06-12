import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "connectify-f50e3.firebaseapp.com",
  projectId: "connectify-f50e3",
  storageBucket: "connectify-f50e3.appspot.com",
  messagingSenderId: "648893555299",
  appId: "1:648893555299:web:d451d5591a45ac91c8ce56",
  measurementId: "G-J7MD4RX44Z"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app)

export { auth, provider, storage }