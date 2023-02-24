
//ADD YOUR FIREBASE LINKS HERE
 var firebaseConfig={
      apiKey: "AIzaSyDNUMFksAe6AWGwmVL48SRHfdCH7wGMudo",
  authDomain: "classtest-d25f7.firebaseapp.com",
  databaseURL: "https://classtest-d25f7-default-rtdb.firebaseio.com",
  projectId: "classtest-d25f7",
  storageBucket: "classtest-d25f7.appspot.com",
  messagingSenderId: "481060973080",
  appId: "1:481060973080:web:3a275f4b909485bc9eb16d",
 };
 firebase.initializeApp(firebaseConfig);
 function addUser()
{
    user_name=document.getElementById("user_name"). value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();
function addRoom(
    {
        room_name=document.getElementById("room_name").value ;
        firebase.database().ref("/").child(room_name).update({

        });
        localStorage.setItem("room_name" , room_name);
        window.location="kwitter_page.html";
    }
)
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}