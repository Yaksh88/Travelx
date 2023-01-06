// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import  {getAuth} from "firebase/auth";
//import firebase from 'firebase/compat/app';
//import 'firebase/compat/firestore';
//import 'firebase/compat/auth';
//import firebase from 'firebase/compat/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPZvZoXux-J2aZJp8ws3Y3ZAtsyJJdElA",
  authDomain: "travel-a1958.firebaseapp.com",
  projectId: "travel-a1958",
  storageBucket: "travel-a1958.appspot.com",
  messagingSenderId: "129596773636",
  appId: "1:129596773636:web:518662c12f7ba6c9ea6c51"
};

// Initialize Firebase

//const app = firebase.initializeApp(firebaseConfig);
//export const auth = app.auth(app);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
//const app = firebaseApp.firestore();
//export const auth = firebase.getAuth();
