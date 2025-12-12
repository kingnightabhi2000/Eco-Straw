/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Highlight Active Nav Link
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 2. Scroll Animation Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Target elements to animate
    const hiddenElements = document.querySelectorAll('.card, h1, h2, p, .btn');
    hiddenElements.forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});