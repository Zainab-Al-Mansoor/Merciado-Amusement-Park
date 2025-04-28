function validateForm() {
  // Get values
  const FirstName = document.getElementById("FirstName").value.trim();
  const LastName = document.getElementById("LastName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message").value.trim();

  // Error elements
  const FirstNameError = document.getElementById("FirstNameError");
  const LastNameError = document.getElementById("LastNameError");
  const phoneError = document.getElementById("PhoneNoError");
  const emailError = document.getElementById("EmialError");
  const passwordError = document.getElementById("PasswordError");
  const messageError = document.getElementById("MessageError");

  // Regex patterns
  const nameRegex = /^[a-zA-Z\s]{3,}$/;
  const phoneRegex = /^\d{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  let valid = true;

  // FirstName validation
  if (FirstName === "") {
      FirstNameError.textContent = "First name is required.";
      FirstNameError.style.display = "block";
      valid = false;
  } else if (!nameRegex.test(FirstName)) {
      FirstNameError.textContent = "Enter a valid name (only letters, min 3 chars).";
      FirstNameError.style.display = "block";
      valid = false;
  } else {
      FirstNameError.style.display = "none";
  }

  // LastName validation
  if (LastName === "") {
      LastNameError.textContent = "Last Name is required.";
      LastNameError.style.display = "block";
      valid = false;
  } else if (!nameRegex.test(LastName)) {
      LastNameError.textContent = "Enter a valid name (only letters, min 3 chars).";
      LastNameError.style.display = "block";
      valid = false;
  } else {
      LastNameError.style.display = "none";
  }

  // Phone validation
  if (phone === "") {
      phoneError.textContent = "Phone number is required.";
      phoneError.style.display = "block";
      valid = false;
  } else if (!phoneRegex.test(phone)) {
      phoneError.textContent = "Enter a valid 10-digit phone number.";
      phoneError.style.display = "block";
      valid = false;
  } else {
      phoneError.style.display = "none";
  }

  // Email validation
  if (email === "") {
      emailError.textContent = "Email is required.";
      emailError.style.display = "block";
      valid = false;
  } else if (!emailRegex.test(email)) {
      emailError.textContent = "Enter a valid email address.";
      emailError.style.display = "block";
      valid = false;
  } else {
      emailError.style.display = "none";
  }

  // Password validation
  if (password === "") {
      passwordError.textContent = "Password is required.";
      passwordError.style.display = "block";
      valid = false;
  } else if (!passwordRegex.test(password)) {
      passwordError.textContent = "Password must be at least 6 characters, include letters and numbers.";
      passwordError.style.display = "block";
      valid = false;
  } else {
      passwordError.style.display = "none";
  }

  // Message validation
  if (message === "") {
      messageError.textContent = "Message is required.";
      messageError.style.display = "block";
      valid = false;
  } else {
      messageError.style.display = "none";
  }

  // Final validation result
  if (valid) {
    // Show alert
    document.getElementById('Alertshow').classList.remove('d-none');


    // Clear the form fields
    document.getElementById("FirstName").value = "";
    document.getElementById("LastName").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("message").value = "";

    // Clear error messages as well
    FirstNameError.style.display = "none";
    LastNameError.style.display = "none";
    phoneError.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";
    messageError.style.display = "none";
  }
}
