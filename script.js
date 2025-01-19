//your JS code here. If required.
// Function to update the timer
function updateTimer() {
    const timerElement = document.getElementById('timer');
    const now = new Date();
    // Format the date and time
    const formattedTime = now.toLocaleString(); 
    timerElement.textContent = formattedTime;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initialize the timer on page load
updateTimer();
