import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBuzSTMLOSg7DuRKgzPJRlgQCw-S2-OmO8",
  authDomain: "cotd-pt-fixed.firebaseapp.com",
  projectId: "cotd-pt-fixed",
  storageBucket: "cotd-pt-fixed.appspot.com",
  messagingSenderId: "486314137041",
  appId: "1:486314137041:web:f8d8fb9372c170646d3cf0",
  measurementId: "G-ZMNFB38CS3"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp };

export default base;