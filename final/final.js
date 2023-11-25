document.addEventListener("DOMContentLoaded", function () {
    // Click event listener
    document.getElementById("clickButton").addEventListener("click", function () {
        alert("Click event triggered!");
    });

    // Mouseover event listener with animation
    const mouseoverDiv = document.getElementById("mouseoverDiv");
    mouseoverDiv.addEventListener("mouseover", function () {
        mouseoverDiv.style.backgroundColor = "#ffb9b9"; // Change background color on mouseover
    });

    mouseoverDiv.addEventListener("mouseout", function () {
        mouseoverDiv.style.backgroundColor = ""; // Reset background color on mouseout
    });

    // Keypress event listener with animation
    document.addEventListener("keypress", function (event) {
        alert("Keypress event triggered! Key code: " + event.keyCode);

        // Example animation: Scale the element on keypress
        const scaleElement = document.getElementById("scaleElement");
        scaleElement.style.transition = "transform 0.5s ease-in-out";
        scaleElement.style.transform = "scale(1.2)";
    });

    // Sound effect on page load
    const audio = new Audio("swoosh.mp3"); 
    audio.play();
    
});
