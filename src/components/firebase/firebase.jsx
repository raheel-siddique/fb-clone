import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCxdvtBl5dimw7A0SY2yJhlD_XUY25-68I",
  authDomain: "facebook-clone-bb23e.firebaseapp.com",
  projectId: "facebook-clone-bb23e",
  storageBucket: "facebook-clone-bb23e.appspot.com",
  messagingSenderId: "405256970283",
  appId: "1:405256970283:web:5d3565fcc8186b8fea4a6e",
  measurementId: "G-9KYMQR2X3D",
};
const provider = new firebase.auth.GoogleAuthProvider();

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, provider };
export default db;
