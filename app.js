const firebaseConfig = {

        apiKey: "AIzaSyDFiydBWwvrzpPvBh4aisHXo1du7FlAmZA",
        authDomain: "ms-printer.firebaseapp.com",
        databaseURL: "https://ms-printer-default-rtdb.firebaseio.com",
        projectId: "ms-printer",
        storageBucket: "ms-printer.appspot.com",
        messagingSenderId: "519528067336",
        appId: "1:519528067336:web:3c1fb2956b3e190e37bcbd"
      
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };