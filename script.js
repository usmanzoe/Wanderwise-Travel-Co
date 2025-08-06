const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Client-side validation
function validateForm() {
  let firstName = document.getElementById('first-name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  let emailError = document.getElementById('email-error');
  
  // Check if the fields are filled (for required fields)
  if (!firstName || !email || !message) {
    alert("All required fields must be filled out.");
    return false;
  }
  
  // Email validation
  if (!validateEmailFormat(email)) {
    emailError.style.display = "inline";
    return false;
  }
  
  // If everything is valid
  return true;
}

function validateEmailFormat(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
}

function validateEmail() {
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('email-error');
  
  if (validateEmailFormat(email)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "inline";
  }
}
