import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGFcW-VHptnDZZ71n5oebCsOewxOaPshY",
  authDomain: "vue-firebase-sites-48878.firebaseapp.com",
  projectId: "vue-firebase-sites-48878",
  storageBucket: "vue-firebase-sites-48878.appspot.com",
  messagingSenderId: "1059987544565",
  appId: "1:1059987544565:web:b81ef7fbb09e7faa41a8bc",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
