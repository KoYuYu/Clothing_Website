import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCkISRc5fQFdb2bfIK9a9BZDC2B5TDfRfE",
    authDomain: "clothing-db-c51a3.firebaseapp.com",
    databaseURL: "https://clothing-db-c51a3.firebaseio.com",
    projectId: "clothing-db-c51a3",
    storageBucket: "clothing-db-c51a3.appspot.com",
    messagingSenderId: "966385943938",
    appId: "1:966385943938:web:71466e68c0742458277b9b",
    measurementId: "G-WKD13MQZGP"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
//popup google
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;