// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqz-k02DjKdr12myA3Ot76uiAUOBJt00I",
  authDomain: "gmym-34d70.firebaseapp.com",
  projectId: "gmym-34d70",
  storageBucket: "gmym-34d70.appspot.com",
  messagingSenderId: "952043191416",
  appId: "1:952043191416:web:e86cae3d41af2c0282018d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the authentication instance
const auth = getAuth(app);

// Function to handle Google sign-in
window.onload = () => {
  if (localStorage.getItem('user')) {
    document.getElementById("btns_login").style.display = "none"
    document.getElementById("course").style.display = "unset"
    document.getElementById("user_name").innerHTML = localStorage.getItem('user')
  } else {
    document.getElementById("course").style.display = "none"
    document.getElementById("user_name").style.display = 'none'
    document.getElementById("log_out").style.display = "none"
  }
}
document.getElementById("loginBtn").onclick = function () {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
      // The user is signed in with Google. You can handle the user data here.
      const user = result.user;
      localStorage.setItem("user", user.displayName)
      console.log("User signed in:", user);
      document.getElementById("btns_login").style.display = "none"
      document.getElementById("log_out").style.display = "unset"
      document.getElementById("user_name").style.display = 'unset'
      document.getElementById("course").style.display = "unset"
      document.getElementById("user_name").innerHTML = user.displayName
    })
    .catch((error) => {
      // Handle any errors here.
      console.error("Sign-in error:", error);
    });
};
document.getElementById('log_out').onclick= ()=>{
  signOut(auth).then(()=>{
    localStorage.removeItem('user')
    document.getElementById("log_out").style.display = "none"
    document.getElementById("btns_login").style.display = "unset"
    document.getElementById("user_name").style.display = 'none'
    document.getElementById("course").style.display = "none"
  })
}
//Creator is an idiot
//Aravattu

