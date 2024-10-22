document.addEventListener("DOMContentLoaded", function() {
    // Get today's date
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    // Format the date as YYYY-MM-DD
    const formattedDate = `${yyyy}-${mm}-${dd}`;

    // Set the value of the date input to today's date
    document.getElementById('date').value = formattedDate;

    // Handle form submission
    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const destination = document.getElementById('destination').value.trim();
        const transport = document.getElementById('transport').value.trim();
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const date = document.getElementById('date').value.trim();
        const people = document.getElementById('people').value.trim();

        
        if (!destination || !transport || !name || !phone || !email || !date || !people) {
            alert('Please fill in all fields.'); 
        } else {
            
            const confirmationMessage = document.getElementById('confirmationMessage');
            confirmationMessage.style.display = 'block'; 

            // Reset the form
            document.getElementById('bookingForm').reset(); 
            document.getElementById('date').value = formattedDate; 
    }
});
}
);
