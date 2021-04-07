
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAgNTWLl1T2WK2clSm0AMjvWEPaZbivnxs",
      authDomain: "kwitter-ed3ef.firebaseapp.com",
      databaseURL: "https://kwitter-ed3ef-default-rtdb.firebaseio.com",
      projectId: "kwitter-ed3ef",
      storageBucket: "kwitter-ed3ef.appspot.com",
      messagingSenderId: "541431471186",
      appId: "1:541431471186:web:855e490b96aa5da101538b"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("Welcome").innerHTML = "Welcome, " + user_name;
console.log(user_name);

function logout(){
      window.location = "index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}

function add_room(){
      room_name = document.getElementById("room_name_").value;
      console.log(room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}