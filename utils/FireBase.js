import firebase from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWYO3674e_ejxxSIkpLbJ8Q65WxbwSFBM",
    authDomain: "residencia-a9954.firebaseapp.com",
    databaseURL: "https://residencia-a9954.firebaseio.com",
    projectId: "residencia-a9954",
    storageBucket: "residencia-a9954.appspot.com",
    messagingSenderId: "709439659974",
    appId: "1:709439659974:web:42523e67d6b3d8344adcc7",
    measurementId: "G-HXXP0BJCMQ"
  };
 
  export const firebaseApp= firebase.initializeApp(firebaseConfig);