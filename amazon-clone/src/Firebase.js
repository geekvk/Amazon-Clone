import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBsMGY0hVSxWLR_ICuY7lGGU0Z6RI4TKAc",
    authDomain: "clone-19882.firebaseapp.com",
    projectId: "clone-19882",
    storageBucket: "clone-19882.appspot.com",
    messagingSenderId: "212261085480",
    appId: "1:212261085480:web:9681292be35ec7224cf01d",
    measurementId: "G-04W5NS90MF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   const auth = firebase.auth();

   export {db, auth };
