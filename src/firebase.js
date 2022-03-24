import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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