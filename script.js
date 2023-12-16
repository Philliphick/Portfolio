document.addEventListener("DOMContentLoaded", function () {
    // Get the elements
    const navToggle = document.getElementById("navToggle");
    const navBar = document.getElementById("navBar");

    // Toggle the visibility of the nav bar
    navToggle.addEventListener("click", function () {
        console.log("Toggle clicked!");

        // Toggle the hidden class for the nav bar
        navBar.classList.toggle("hidden");

        // Adjust the transform property for the nav bar
        navBar.style.transform = navBar.classList.contains("hidden") ? "translateX(-100%)" : "translateX(0)";

        // Adjust the transform property for the nav toggle button
        navToggle.style.transform = navBar.classList.contains("hidden") ? "translateX(0)" : "translateX(21rem)";
    });
});