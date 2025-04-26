// Submit emial with validation and show alert 
function SubmittedEmail() {
  let EmailInput = document.getElementById("EmailInput").value;
  let EmailError = document.getElementById("EmailError");

  if (EmailInput === "") {
    EmailError.textContent = "Please enter your email.";
    EmailError.style.display = "block";
    return false;
  }

  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(EmailInput)) {
    EmailError.textContent = "Please enter a valid email address.";
    EmailError.style.display = "block";
    return false;
  }

  EmailError.style.display = "none";
  alert("Thanks for subscribing!");
  return false;
}


// Show details for the selected testimonial
function showTestimonialDetails(testimonial) {
    alert("More details about this testimonial will be shown in Our Merciado Amusement Park!");
}


// rides
document.getElementById('favoriteRideForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing the page
    
    // Get the selected radio button (ride)
    const selectedRide = document.querySelector('input[name="ride"]:checked');
    
    if (selectedRide) {
        // If a ride is selected, display a confirmation message 
        document.getElementById('confirmationMessage').style.display = 'block';
        document.getElementById('selectedRide').innerText = selectedRide.value; // Display selected ride name
    } else {
        // If no ride is selected, show an alert
        alert("Please select a ride before submitting.");
    }
});






