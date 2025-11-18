import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC54OMBmh_dAqFKRJ6R5nyzfGIBH_GTKFo",
  authDomain: "green-shop-78077.firebaseapp.com",
  projectId: "green-shop-78077",
  storageBucket: "green-shop-78077.firebasestorage.app",
  messagingSenderId: "149827517970",
  appId: "1:149827517970:web:5cac213412d469e99462cb",
  measurementId: "G-3ZFV4N79HN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};
export const registerWithGoogle = () => {
  return signInWithPopup(auth, provider);
};
