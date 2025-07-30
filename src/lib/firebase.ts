import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4Nhnhs3L2atAjaMVr3oe2p3YbcCK3bKs",
  authDomain: "stem-simplified.firebaseapp.com",
  projectId: "stem-simplified",
  storageBucket: "stem-simplified.firebasestorage.app",
  messagingSenderId: "601660409202",
  appId: "1:601660409202:web:ed09f39060079619cb09eb",
  measurementId: "G-ZWN2SG82VV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; 