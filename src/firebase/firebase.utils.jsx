import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyCQutKeEixPHTNPNYPxWaqxv992rotYcMg",
  authDomain: "crwn-dt.firebaseapp.com",
  projectId: "crwn-dt",
  storageBucket: "crwn-dt.appspot.com",
  messagingSenderId: "469211658320",
  appId: "1:469211658320:web:bc9657fe73fa3804ddf955",
  measurementId: "G-5882D84LJS"
};

firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase