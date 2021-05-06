import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlwZH61IWm_U0m41GLXglKMMp7Tuzlx9I",
    authDomain: "txtme-app-679f6.firebaseapp.com",
    projectId: "txtme-app-679f6",
    storageBucket: "txtme-app-679f6.appspot.com",
    messagingSenderId: "472005065561",
    appId: "1:472005065561:web:f9021e8999fffd7d152a48",
    measurementId: "G-ZW8XY61PPL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;