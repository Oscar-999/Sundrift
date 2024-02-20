import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwO8VG0IWomWUNYjMGL1VSwIRrYr8ASsM",
  authDomain: "sundriftdb.firebaseapp.com",
  projectId: "sundriftdb",
  storageBucket: "sundriftdb.appspot.com",
  messagingSenderId: "491210924756",
  appId: "1:491210924756:web:55bd1a4e53e81c02049141",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot)
  console.log(userSnapshot.exists())
};
