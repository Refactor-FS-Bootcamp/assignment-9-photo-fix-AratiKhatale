import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyCUmoAYUkLtBubg40aGeu8i8I3OHu0eZVw",
  authDomain: "career-firebase-project.firebaseapp.com",
  projectId: "career-firebase-project",
  storageBucket: "career-firebase-project.appspot.com",
  messagingSenderId: "605900688507",
  appId: "1:605900688507:web:3edf68ec6bc7b2df9b26de",
  measurementId: "G-4XZ1T8XQT0"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { auth, db }