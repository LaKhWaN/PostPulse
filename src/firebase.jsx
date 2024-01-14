// firebase.jsx
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDmHowaBc-9cMsK0tdXUtA_vAqmIhokH1U",
  authDomain: "postpulse-09.firebaseapp.com",
  projectId: "postpulse-09",
  storageBucket: "postpulse-09.appspot.com",
  messagingSenderId: "344041205712",
  appId: "1:344041205712:web:a7940ab0d8c65d04d513d5",
  measurementId: "G-F18Y79BSD5",
};
const app = firebase.initializeApp(firebaseConfig);
const Gauth = getAuth();
const provider = new GoogleAuthProvider();
const firestore = firebase.firestore();
const users = firestore.collection("users");

const emailAuth = firebase.auth();

export { emailAuth, provider, firestore, users };
