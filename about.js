function updateAge() {
    // Birth date set to 15 June 2004
    let birthDate = new Date(2004, 5, 15); // Month is 0-based (June = 5)
    let currentDate = new Date();
    
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    
    if (
        currentDate.getMonth() < birthDate.getMonth() || 
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
    ) {
        age--; // Subtract 1 if birthday hasn't occurred yet this year
    }

    // Get milliseconds since birth for more precise calculation
    let millisecondsSinceBirth = currentDate - birthDate;
    let millisecondsInYear = 365.25 * 24 * 60 * 60 * 1000; // Approximate milliseconds in a year
    
    // Calculate age with high precision
    let preciseAge = millisecondsSinceBirth / millisecondsInYear;
    
    // Format to show 3 decimal places, adjust as needed
    document.getElementById("age").innerText = preciseAge.toFixed(9);
}

// Update very frequently for smooth animation
setInterval(updateAge, 10);
updateAge(); // Initial call

// Add your Instagram & LinkedIn links here
document.getElementById("instagram").href = "https://www.instagram.com/yourprofile";
document.getElementById("linkedin").href = "https://www.linkedin.com/in/yourprofile";