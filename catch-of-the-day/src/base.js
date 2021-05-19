import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCq8tLikXeMqSyP5IPZ9aY88fnT_ZtYqso",
    authDomain: "cotd-pt.firebaseapp.com",
  databaseURL: "https://cotd-pt-default-rtdb.firebaseio.com/"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp };

export default base;