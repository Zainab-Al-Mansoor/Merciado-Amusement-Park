    // Toggle the display of rule details
    function toggleRule(ruleItem) {
        const ruleDetails = ruleItem.querySelector('.rule-details');
        ruleDetails.style.display = ruleDetails.style.display === 'block' ? 'none' : 'block';
    }

    // Show acknowledgement modal
    function acknowledgeRules() {
        const confirmation = confirm("By acknowledging, you agree to follow all park rules. Are you ready to enjoy your day?");
        if (confirmation) {
            alert("Thank you for acknowledging the rules. Have a great time at the park!");
        }
    }
// Show details for the selected testimonial
function showTestimonialDetails(testimonial) {
    alert("More details about this testimonial will be shown in Our Merciado Amusement Park!");
}
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






// newsletter 
// Validation of email 
function SubmittedEmail(){
let EmailInput=document.getElementById('EmailInput').value;
isValid=true;

if (EmailInput===""){
   let EmailError=document.getElementById('EmailError');
   EmailError.style=display='block';
   isValid=false;

}




return isValid=true;








}
