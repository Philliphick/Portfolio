document.addEventListener("DOMContentLoaded", function () {
    // Get the elements
    const textElement = document.getElementById("text");
    let text = new SplitType(textElement);
    let characters = document.querySelectorAll('.char');

    for (let i = 0; i < characters.length; i++) {
        characters[i].classList.add('translate-y-full');
    }

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the scroll event
    function handleScroll() {
        if (isElementInViewport(textElement)) {
            gsap.to('.char', {
                y: 0,
                stagger: 0.05,
                delay: 0.02,
                duration: 0.5
            });

            // Remove the scroll event listener after the animation has been triggered
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});