// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHurpck3BL59qUifmjwMvjuVIta6GEigw",
  authDomain: "swigg-38aa4.firebaseapp.com",
  projectId: "swigg-38aa4",
  storageBucket: "swigg-38aa4.appspot.com",
  messagingSenderId: "289326200445",
  appId: "1:289326200445:web:1203ace700764f4fdc6314"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => {
  auth.signOut()
}
export default firebase;