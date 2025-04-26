
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






