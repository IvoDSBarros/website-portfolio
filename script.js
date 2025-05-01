const nav = document.querySelector(".nav-header");
const intro = document.querySelector(".intro-section");
const navLinksContainer = document.querySelector(".nav-links"); // Get the container of your links
const navLinks = navLinksContainer.querySelectorAll(".nav-link"); // Get all the individual navigation links
const hamburger = document.querySelector(".hamburger");

const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
            nav.classList.remove("nav-hidden");
        } else {
            nav.classList.add("nav-hidden");
        }
    },
    {
        root: null,
        threshold: 0.2,
    }
);

observer.observe(intro);

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Add event listeners to each navigation link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active"); // Remove the 'active' class to hide the mobile menu
    });
});