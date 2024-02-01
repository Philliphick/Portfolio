
// nav bar
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

// animate text

document.addEventListener("DOMContentLoaded", function () {
// const animatedText = document.getElementById("text");
// get the elements
const textElement = document.getElementById("text");
let text = new SplitType('.char');
console.log('text.chars')
let characters = document.querySelectorAll('.char')

for(let i = 0; i < characters.length; i++) {
    characters[i].classList.add('translate-y-full')
}


// check if element is in the viewport 

function elementInViewport(element) {
    let rectangle = element.getBoundingClientRect();
    return (
        rectangle.top >= 0 &&
        rectangle.left >= 0 &&
        rectangle.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rectangle.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function handleScroll() {
    if(elementInViewport(textElement)) {

        gsap.to('.char', {
            y: 0,
            stagger: 0.05,
            delay: 0.8,
            duration: 1
        });

        window.removeEventListener('scroll', handleScroll);

    }
}

        window.addEventListener('scroll', handleScroll);

    });



