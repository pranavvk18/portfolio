document.addEventListener("DOMContentLoaded", function () {
    let text = "Best is yet to come!!!";
    let index = 0;
    let speed = 100; // Adjust typing speed

    function typeText() {
        if (index < text.length) {
            document.getElementById("animated-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, speed);
        } else {
            document.getElementById("animated-text").style.borderRight = "none"; // Remove cursor effect
        }
    }

    typeText();
});
