//Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA-mUavHKONDNhuczNfGePShkRctJL3ywA",
  authDomain: "blog-web-6ee52.firebaseapp.com",
  databaseURL: "https://blog-web-6ee52.firebaseio.com",
  projectId: "blog-web-6ee52",
  storageBucket: "blog-web-6ee52.appspot.com",
  messagingSenderId: "327836992810",
  appId: "1:327836992810:web:f3efd196533f8f8980ca53",
  measurementId: "G-3Q2M2J8GZC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let formMsg = firebase.database().ref("register");

let Form = document.getElementById("form-card");
Form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault()

  let fName = document.querySelector("#fName").value;
  let sName = document.querySelector("#sName").value;
  let Email = document.querySelector("#emailAddress").value;
  let Password = document.querySelector("#Password").value;
  let cPassword = document.querySelector("#cPassword").value;
  let Address = document.querySelector("#inputAddress").value;
  let Country = document.querySelector("#Country").value;
  let Gender = document.querySelector("#Gender").value;

  sendMsg(fName, sName, Email, Password, cPassword, Address, Country, Gender);  

  let Form = document.getElementById("form-card").reset();


  if(cPassword == Password){
    alert("Password & Confirm password Have different values!!!")
  }
}

 


  function sendMsg(fName, sName, Email, Password, cPassword, Address, Country, Gender){
    let newFormMsg = formMsg.push();
    newFormMsg.set({
      FirstName: fName,
      Surname: sName,
      EmailAddress: Email,
      Password:  Password,
      Address: Address,
      Country: Country,
      Gender: Gender
    })
  }











  
 
 