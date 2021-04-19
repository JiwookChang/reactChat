import firebase from "firebase"

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDCTPdGjiR1PeKErHClj0d3mm6_IyThzhM",
    authDomain: "react-chat-ed4c9.firebaseapp.com",
    projectId: "react-chat-ed4c9",
    storageBucket: "react-chat-ed4c9.appspot.com",
    messagingSenderId: "540596411019",
    appId: "1:540596411019:web:85dea5eca72c007df2528e",
    measurementId: "G-DD50WPP07G"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;