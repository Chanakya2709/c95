//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDNUMFksAe6AWGwmVL48SRHfdCH7wGMudo",
    authDomain: "classtest-d25f7.firebaseapp.com",
    databaseURL: "https://classtest-d25f7-default-rtdb.firebaseio.com",
    projectId: "classtest-d25f7",
    storageBucket: "classtest-d25f7.appspot.com",
    messagingSenderId: "481060973080",
    appId: "1:481060973080:web:3a275f4b909485bc9eb16d",
    measurementId: "G-8HXE8CG87Z"
  };
  const app = initializeApp(firebaseConfig);
function addUser()
{
    user_name=document.getElementById("user_name"). value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}