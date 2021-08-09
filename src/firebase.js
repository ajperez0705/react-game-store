import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5LvvaddtQTJsFdZY7GL-xe9DKSUbii7o",
  authDomain: "react-steam-project.firebaseapp.com",
  databaseURL: "https://react-steam-project-default-rtdb.firebaseio.com",
  projectId: "react-steam-project",
  storageBucket: "react-steam-project.appspot.com",
  messagingSenderId: "565157680939",
  appId: "1:565157680939:web:0e51d5049e63c76e12176e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
