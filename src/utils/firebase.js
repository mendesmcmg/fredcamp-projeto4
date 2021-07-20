import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIy8GN5W42UdaRyOWgOm2cEnFrFVS_5qg",
    authDomain: "fredcamp-projeto1-34684.firebaseapp.com",
    projectId: "fredcamp-projeto1-34684",
    storageBucket: "fredcamp-projeto1-34684.appspot.com",
    messagingSenderId: "151814447803",
    appId: "1:151814447803:web:04056c97f56f8537587f9e",
    measurementId: "G-RX5FVW8STX",
    databaseURL: "https://fredcamp-projeto1-34684-default-rtdb.europe-west1.firebasedatabase.app"
  };
  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.database()
  
  export default db
