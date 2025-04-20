function validateForm() {
    // Get values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message").value.trim();
  

    // Error elements
    const nameError = document.getElementById("NameError");
    const phoneError = document.getElementById("PhoneNoError");
    const emailError = document.getElementById("EmialError");
    const passwordError = document.getElementById("PasswordError");
    const messageError = document.getElementById("MessageError");
  
    // Regex
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  
    let valid = true;
  
    // Name validation
    if (name === "") {
      nameError.textContent = "Full name is required.";
      nameError.style.display = "block";
      valid = false;
    } else if (!nameRegex.test(name)) {
      nameError.textContent = "Enter a valid name (only letters, min 3 chars).";
      nameError.style.display = "block";
      valid = false;
    } else {
      nameError.style.display = "none";
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
      document.querySelector(".alert").classList.remove("d-none");
      document.querySelector(".alert").classList.add("d-block");

      // Clear fields after success
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("message").value = "";
    } else {
      document.querySelector(".alert").classList.remove("d-block");
      document.querySelector(".alert").classList.add("d-none");
    }
  }
  
  