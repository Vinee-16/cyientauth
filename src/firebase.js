// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5sHDh_rvzIaJUE1WSH4xAhEvCA2ChMDI",
  authDomain: "firbaseauthentication-5883d.firebaseapp.com",
  projectId: "firbaseauthentication-5883d",
  storageBucket: "firbaseauthentication-5883d.appspot.com",
  messagingSenderId: "623770308218",
  appId: "1:623770308218:web:87dbd854e191ed7354f5c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
