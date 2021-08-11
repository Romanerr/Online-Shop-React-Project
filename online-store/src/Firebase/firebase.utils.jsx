import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyA3dSRDrfqx9AM1ij0xRV1BJ27AuHieerQ",
    authDomain: "onlinestore-79bec.firebaseapp.com",
    projectId: "onlinestore-79bec",
    storageBucket: "onlinestore-79bec.appspot.com",
    messagingSenderId: "420564748516",
    appId: "1:420564748516:web:1b87d927ff500ccfa944f1",
    measurementId: "G-CYCZPP8QFJ"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;