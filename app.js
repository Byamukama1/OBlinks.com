// app.js
import { db, auth } from './firebase-init.js';
import { 
  collection, 
  addDoc,
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";

// Authentication state listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User logged in:", user.email);
    document.getElementById("user-email").textContent = user.email;
  } else {
    console.log("User signed out");
    window.location.href = "/login.html";
  }
});

// Example: Save data to Firestore
document.getElementById("save-btn").addEventListener("click", async () => {
  try {
    const docRef = await addDoc(collection(db, "links"), {
      url: document.getElementById("link-url").value,
      timestamp: new Date(),
      clicks: 0
    });
    console.log("Document written with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding document:", e);
  }
});