// Import the functions you need from 
import { initializeApp } from "firebase/app";
import { getDatabase  } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb1k970rif2Li_5vab_gTBSA_RCjrt0C4",
  authDomain: "crud-application-94f59.firebaseapp.com",
  databaseURL: "https://crud-application-94f59-default-rtdb.firebaseio.com",
  projectId: "crud-application-94f59",
  storageBucket: "crud-application-94f59.appspot.com",
  messagingSenderId: "975159926559",
  appId: "1:975159926559:web:931ef5490033afb43a5a2a",
  measurementId: "G-42BEY63SZ1"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
export const database = getDatabase(App);