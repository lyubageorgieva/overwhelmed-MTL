import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBmV4URImTgNXVllSKcMGPgtAdHII7ckws",
  authDomain: "uchange2-721d1.firebaseapp.com",
  projectId: "uchange2-721d1",
  storageBucket: "uchange2-721d1.appspot.com",
  messagingSenderId: "670533101083",
  appId: "1:670533101083:web:5c32f0967fb1cf3da7fabe"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };