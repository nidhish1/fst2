import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqb_kyIENypBNW_EfzWEoREY6BHxsGAW4",
  authDomain: "fst2-1fc64.firebaseapp.com",
  databaseURL: "https://fst2-1fc64.firebaseio.com",
  projectId: "fst2-1fc64",
  storageBucket: "fst2-1fc64.appspot.com",
  messagingSenderId: "314322656411",
  appId: "1:314322656411:web:19ab586e56a1b2ea707a3e",
  measurementId: "G-HPCLTNJCJT"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db

