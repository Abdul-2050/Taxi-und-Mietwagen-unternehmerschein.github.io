import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMKzU7_2yHCM028kWmovUBOxn-qGYxktY",
  authDomain: "taxi-company-e1a23.firebaseapp.com",
  databaseURL: "https://taxi-company-e1a23-default-rtdb.firebaseio.com",
  projectId: "taxi-company-e1a23",
  storageBucket: "taxi-company-e1a23.appspot.com",
  messagingSenderId: "835882517766",
  appId: "1:835882517766:web:206757f55e5ecf3f0bca87",
  measurementId: "G-0KF8YNXQDJ",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);

// Check if user is logged in on page load
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is logged in, continue with the current page
  } else {
    // User is not logged in, redirect to authentication.html
    window.location.href = "authentication.html";
  }
});
