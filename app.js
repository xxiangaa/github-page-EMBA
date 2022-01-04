//Unique Firebase Object
var firebaseConfig = {
  apiKey: "AIzaSyAxYmVWCC052ZGGco0--6ZWufV8iPYW_yQ",
  authDomain: "blockchainemba-cf0ba.firebaseapp.com",
  projectId: "blockchainemba-cf0ba",
  storageBucket: "blockchainemba-cf0ba.appspot.com",
  messagingSenderId: "317488766246",
  appId: "1:317488766246:web:f3fb134ee6ebdc398c35e7",
  measurementId: "G-KYCZ66C8M2"
};

//Initialize Firebase 
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("fomData")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  let firstName = document.getElementById('fname').value
  let lastName = document.getElementById('lname').value
  let mail = document.getElementById('mail').value
  let refer = document.getElementById('refer').value

  //Save Form Data To Firebase
  db.doc().set({
    fname: firstName,
    lname: lastName,
	mail: mail,
	refer: refer
  }).then( () => {
    console.log("Data saved")
  }).catch((error) => {
    console.log(error)
  })

  //alert
  alert("Your Form Has Been Submitted Successfully")
})