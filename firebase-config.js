// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyA6qJQATdxVxAeACL3Hie3_iQijkUPZDj4",
  authDomain: "synapse-multi-2f6d4.firebaseapp.com",
  databaseURL: "https://synapse-multi-2f6d4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "synapse-multi-2f6d4",
  storageBucket: "synapse-multi-2f6d4.firebasestorage.app",
  messagingSenderId: "491116770518",
  appId: "1:491116770518:web:72dfa149ef2aecb7358577",
  measurementId: "G-P3P2S6MFSZ"
};

// Inisialisasi Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();
