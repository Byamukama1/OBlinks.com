// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGVVpcWS9ae1DH1J8qoaK1TwnSX_W5FkQ",
  authDomain: "oblinks-7fdb1.firebaseapp.com",
  projectId: "oblinks-7fdb1",
  storageBucket: "oblinks-7fdb1.firebasestorage.app",
  messagingSenderId: "587017639779",
  appId: "1:587017639779:web:d11b60f40f431cfc202556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Make available to other modules
export { db, auth };