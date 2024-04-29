// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLz1zLYaHPipUeoNiWZO58Cs0E47uL5vo",
  authDomain: "walletpe-916ab.firebaseapp.com",
  projectId: "walletpe-916ab",
  storageBucket: "walletpe-916ab.appspot.com",
  messagingSenderId: "194649681422",
  appId: "1:194649681422:web:ae0b93f82e9f077124165f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth()
