import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAuYoZO_ExZiKY2t2MnrzO_UnLk6ecvHUo",
    authDomain: "taxi-unternehmerschein.firebaseapp.com",
    databaseURL: "https://taxi-unternehmerschein-default-rtdb.firebaseio.com",
    projectId: "taxi-unternehmerschein",
    storageBucket: "taxi-unternehmerschein.appspot.com",
    messagingSenderId: "753758307661",
    appId: "1:753758307661:web:c2a4fcbedbd0eb9a2a2304"
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
