// Validate email and show alert
function SubmittedEmail() {
  let EmailInput = document.getElementById("EmailInput").value;
  let EmailError = document.getElementById("EmailError");
// Clear the email input field
document.getElementById("EmailInput").value = '';  // Check if email is empty
  if (EmailInput === "") {
    EmailError.textContent = "Please enter your email.";
    EmailError.style.display = "block";
    return false;
  }

  // Check if email format is valid
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(EmailInput)) {
    EmailError.textContent = "Please enter a valid email address.";
    EmailError.style.display = "block";
    return false;
  }

  // Hide error and show success alert
  EmailError.style.display = "none";
  alert("Thanks for subscribing!");
  return false;
}

// Show alert with testimonial details
function showTestimonialDetails() {
  alert(
    "More details about this testimonial will be shown in Our Merciado Amusement Park!"
  );
}

// Handle favorite ride form submission
document
  .getElementById("favoriteRideForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh

    const selectedRide = document.querySelector('input[name="ride"]:checked');

    // If a ride is selected, show confirmation message
    if (selectedRide) {
      document.getElementById("confirmationMessage").style.display = "block";
      document.getElementById("selectedRide").innerText = selectedRide.value;
    } else {
      // If no ride is selected, show alert
      alert("Please select a ride before submitting.");
    }
  });
