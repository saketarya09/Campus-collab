// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcxM-sve4pVXlbviojnhFulM9qRQ-jfd0",
  authDomain: "campuscollab-d91da.firebaseapp.com",
  projectId: "campuscollab-d91da",
  storageBucket: "campuscollab-d91da.appspot.com",
  messagingSenderId: "651776860653",
  appId: "1:651776860653:web:b1130a7095f7bef80107e4",
  measurementId: "G-L3K7N6W5GQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
 export const auth = getAuth(app);
 export const googleProvider = new GoogleAuthProvider();
 export const db = getFirestore(app);
 export const storage = getStorage(app);