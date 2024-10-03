import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8d4oyrlYJ1UJQ53K2T2RT1HNf6SO0ROY",
  authDomain: "olx-cln.firebaseapp.com",
  projectId: "olx-cln",
  storageBucket: "olx-cln.appspot.com",
  messagingSenderId: "19045255475",
  appId: "1:19045255475:web:b6883bdc3552e44c7b1646",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firestore = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export default firebaseApp;
