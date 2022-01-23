import firebase from 'firebase/compat/app';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCxaDuJFWou3Ac7DNlNKonAvO12AzX6KfQ",
  authDomain: "uchange-1c51c.firebaseapp.com",
  projectId: "uchange-1c51c",
  storageBucket: "uchange-1c51c.appspot.com",
  messagingSenderId: "959111341797",
  appId: "1:959111341797:web:78d64edc30e4692b0f560c",
  measurementId: "G-4ZP069MLC6"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };