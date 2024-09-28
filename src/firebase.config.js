// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQJjpwFw5-sThal6-IlrIqjiuS391KULM",
  authDomain: "fdr-2314-2bd58.firebaseapp.com",
  databaseURL: "https://fdr-2314-2bd58-default-rtdb.firebaseio.com",
  projectId: "fdr-2314-2bd58",
  storageBucket: "fdr-2314-2bd58.appspot.com",
  messagingSenderId: "599077087601",
  appId: "1:599077087601:web:87ee3329d890db7202aed0",
  measurementId: "G-RCL9PN74T6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig