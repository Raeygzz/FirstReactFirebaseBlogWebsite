// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClpWkRUAkTDTqXqDDmg1zCwMSHg4OIvXo",
  authDomain: "rfirebaseblogsite.firebaseapp.com",
  projectId: "rfirebaseblogsite",
  storageBucket: "rfirebaseblogsite.appspot.com",
  messagingSenderId: "525137755382",
  appId: "1:525137755382:web:c14e8ceab3924a6bd840d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();