import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDNOinTIVdU-rZxo6zS2j67N4uk_FnRIVk",
  authDomain: "catch-of-the-day-pt.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-pt-default-rtdb.europe-west1.firebasedatabase.app",
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp };

export default base;