import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {

  apiKey: "AIzaSyCgCW67WQVX5OHM-FDHWPHauKByI3olsSM",

  authDomain: "uchange3-98b61.firebaseapp.com",

  projectId: "uchange3-98b61",

  storageBucket: "uchange3-98b61.appspot.com",

  messagingSenderId: "1041434161742",

  appId: "1:1041434161742:web:a5f8e5b43f6ac089f1891f"

};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };