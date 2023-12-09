import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDtjmPPMdDRUiYusyOApn0Sp1fhnnUluKc",
  authDomain: "rappid-app-test.firebaseapp.com",
  projectId: "rappid-app-test",
  storageBucket: "rappid-app-test.appspot.com",
  messagingSenderId: "348942972209",
  appId: "1:348942972209:web:2183f61fac9302273cec10",
  measurementId: "G-831P5ET7HG"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default firebase; 
export { db }; 