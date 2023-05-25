const newAccount = document.getElementById("createAccount");
const signUpPage = document.getElementById("sign-up-container");
const closeSignUp = document.getElementById("close-sign-up");
const signInpage = document.getElementById("full-body-container");

newAccount.addEventListener("click",function(){
    signUpPage.style.display="block";
    signInpage.style.opacity="50%"
})

closeSignUp.addEventListener("click",function(){
    signUpPage.style.display="none";
    signInpage.style.opacity="100%"
})
//=====================================================================================VALIDATION-GMAIL============

function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const Createemail = document.getElementById("number-email").value;
    const Creatapassword = document.getElementById("sign-up-pass").value;
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const date = document.getElementById("date").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    // Create form object
    const formObj = {
      name: firstName,
      lastname: lastName,
      email: Createemail,
      pass: Creatapassword,
      dateOfBirth: {
        year: year,
        month: month,
        date: date
      },
      gender: gender
    };
  
    // Check if there are already stored forms
    const storedForms = JSON.parse(localStorage.getItem("login-forms")) || [];
  
    // Check if form with the same email and password already exists
    const existingForm = storedForms.find(form => form.email === Createemail && form.pass === Creatapassword);
    if (existingForm) {
      alert("This email is already registered.");
      return;
    }
  
    // Add new form to array and store in local storage
    storedForms.push(formObj);
    localStorage.setItem("login-forms", JSON.stringify(storedForms));
    alert("Form successfully submitted.");
        signUpPage.style.display="none";
        signInpage.style.opacity="100%"

  
    // Clear form fields
    document.getElementById("number-email").value = "";
    document.getElementById("sign-up-pass").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
  }

  function login(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email && password) {
      // Get forms from local storage
      const storedForms = JSON.parse(localStorage.getItem("login-forms")) || [];
  
      // Check if form with the same email and password exists
      const existingForm = storedForms.find(form => form.email === email && form.pass === password);
  
      if (existingForm) {
        alert("Welcome to Facebook");
      } else {
        alert("Invalid account, please click to create an account.");
      }
  
      // Clear form fields
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    } else {
      alert("Please enter an email and password.");
    }
  }
 