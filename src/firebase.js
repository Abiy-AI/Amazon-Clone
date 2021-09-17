// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCXk1Obmhc2PHOusDerPM1PdpbL-WOrrzs",
  authDomain: "clone-d0e2c.firebaseapp.com",
  projectId: "clone-d0e2c",
  storageBucket: "clone-d0e2c.appspot.com",
  messagingSenderId: "314436334560",
  appId: "1:314436334560:web:56e9bbfcf4305a265c7185",
  measurementId: "G-EPG907LEQ0",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
