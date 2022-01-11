import firebase from 'firebase';

const firebaseConfig = {


  apiKey: "AIzaSyDHmLm1BL88H2E128sFfmZp-IcowMjS9-Y",
  authDomain: "react-poc-6a917.firebaseapp.com",
  databaseURL: "https://react-poc-6a917-default-rtdb.firebaseio.com",
  projectId: "react-poc-6a917",
  storageBucket: "react-poc-6a917.appspot.com",
  messagingSenderId: "11999727201",
  appId: "1:11999727201:web:5d2a651918730d8c17e420",
  measurementId: "G-PRVHJ8G190"
};

// initialize our app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initial database
const db = firebaseApp.firestore();

// // set auth
// const auth = firebase.auth();

// // set provider
// const provider = new firebase.auth.GoogleAuthProvider();


// export { auth, provider };
export default db;