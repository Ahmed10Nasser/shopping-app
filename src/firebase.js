// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIB4hHVRELGyQmeG_irCkHvL3W-ZWewFU",
  authDomain: "shopping-app-dev-dc0df.firebaseapp.com",
  projectId: "shopping-app-dev-dc0df",
  storageBucket: "shopping-app-dev-dc0df.appspot.com",
  messagingSenderId: "51928212965",
  appId: "1:51928212965:web:50aa0962dbd7a6158c3b0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;