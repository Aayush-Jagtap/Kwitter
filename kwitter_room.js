
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA9UgJx8HkIPFBqLNQlgbepx47x-vEbv0k",
      authDomain: "kwitter-9c156.firebaseapp.com",
      databaseURL: "https://kwitter-9c156-default-rtdb.firebaseio.com/",
      projectId: "kwitter-9c156",
      storageBucket: "kwitter-9c156.appspot.com",
      messagingSenderId: "113456724261",
      appId: "1:113456724261:web:8fa68d4d10de45fa8082cc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name"); 
    
    function getData() {
           firebase.database().ref("/").on('value', function(snapshot) {
                  document.getElementById("output").innerHTML = "";
                   snapshot.forEach(function(childSnapshot) {
                          childKey = childSnapshot.key;
                           Room_names = childKey;
                            //Start code 
                            console.log("Room Name - " + Room_names);
                             row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + " </div><hr>"; document.getElementById("output").innerHTML += row;
                              //End code 
                        }); }); }
      
getData();

function addroom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
 function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
 }
 function logout()
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "kwitter.html";
 }