// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCisZ-HZX9OqnhG81iHkh9Nc2ra8CTWcaQ",
  authDomain: "realtor-react-web.firebaseapp.com",
  projectId: "realtor-react-web",
  storageBucket: "realtor-react-web.appspot.com",
  messagingSenderId: "644231320894",
  appId: "1:644231320894:web:01c2ebff0a8aacb3dc486f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
