// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC5oV7AiSc2_sb7NSBFopbtjTi07pxiZE",
  authDomain: "linkedin-clone-2b6ad.firebaseapp.com",
  projectId: "linkedin-clone-2b6ad",
  storageBucket: "linkedin-clone-2b6ad.firebasestorage.app",
  messagingSenderId: "803557929758",
  appId: "1:803557929758:web:7ef0b1da6aba28b1b58f0f",
  measurementId: "G-1LS56TJ4D0"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const  auth = firebase.auth();

  export { db , auth , firebaseApp , firebase};
 