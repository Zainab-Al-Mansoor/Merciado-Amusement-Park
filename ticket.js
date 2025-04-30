// Getting the alert element for single ticket purchase
let ALertTicket = document.getElementById('ALertTicket');

//.....................................................................Then Show Single Ticket Alert Function .....................................
function ShowAlert() {
  // Display the single ticket alert
  ALertTicket.style.display = "block";
}

// Getting the alert element for booking form submission
let ALertTicketForm = document.getElementById('ALertTicketForm');

//.....................................................................Then Show Booking Form Alert Function .....................................
function OpeAlert(event) {
  event.preventDefault(); // ⛔ Stops the form from actually submitting
  // Display the booking confirmation alert
  ALertTicketForm.style.display = "block";
}
