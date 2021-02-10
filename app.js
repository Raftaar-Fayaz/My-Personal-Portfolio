var firebaseConfig = {
  apiKey: "AIzaSyAlv0UOevXh5zJNyPaxEc3xqsZGZhj3iAk",
  authDomain: "fayaz-portfolio.firebaseapp.com",
  projectId: "fayaz-portfolio",
  storageBucket: "fayaz-portfolio.appspot.com",
  messagingSenderId: "176329082514",
  appId: "1:176329082514:web:bc7e16d201dd572104084b",
  measurementId: "G-Z8DTFLGGJ3"
};

firebase.initializeApp(firebaseConfig);
  
let contactInfo = firebase.database().ref("contacts");
  
document.querySelector(".contactForm").addEventListener("submit", submitForm);
  
function submitForm(e) {
  e.preventDefault();
  
  let firstName = document.querySelector(".firstName").value;
  let lastName = document.querySelector(".lastName").value;
  let gmail = document.querySelector(".gmail").value;
  let number = document.querySelector(".number").value;
  let message = document.querySelector(".message").value;
  
  saveContactInfo(firstName, lastName, gmail, number, message);
  
  document.querySelector(".contactForm").reset();

  sendEmail(firstName, lastName, gmail, number, message)
}
  
function saveContactInfo(firstName, lastName, gmail, number, message) {
  let newContactInfo = contactInfo.push();
  
  newContactInfo.set({
    firstName : firstName,
    lastName : lastName,
    gmail : gmail,
    number : number,
    message : message,
  });
}

function sendEmail(firstName, lastName, gmail, number, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "this.is.fayaz.ahamed@gmail.com",
    Password: "peyqtdzeipakediz",
    To: "mr.fayaz.rf@gmail.com",
    From: 'this.is.fayaz.ahamed@gmail.com',
    Subject: `${firstName} sent you message from Portfolio`,
    Body: `Name: ${firstName} ${lastName} <br/> Gmail: ${gmail} <br/> Number: ${number} <br/> Message: ${message}`, 
  })
  .then((message) => alert("Thank You, Your Message sent successfully"))
}