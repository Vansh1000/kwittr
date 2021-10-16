
var firebaseConfig = {
      apiKey: "AIzaSyDFM-oXer_3vLOyISgdAiXooSXghPjhaVk",
      authDomain: "kwitter-48b8a.firebaseapp.com",
      databaseURL: "https://kwitter-48b8a-default-rtdb.firebaseio.com",
      projectId: "kwitter-48b8a",
      storageBucket: "kwitter-48b8a.appspot.com",
      messagingSenderId: "941091262741",
      appId: "1:941091262741:web:967a0ce246cbe2c668d91c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom (){

room_name = document.getElementById("room_name").value;

firebase.database.ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Rooms_names" + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML += row;
    

      //End code
      });});}
getData();


function redirectToRoomName(name){
console.log(name);
localStorage.setItem("Room_name", name);
window.location = "kwitter_page.html";
}


function logout(){

      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}

            

