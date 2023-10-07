// Navigation Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Form Submission (Contact Page)
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Simulate form submission (you can replace this with actual form handling)
        const name = contactForm.querySelector('#name').value;
        const email = contactForm.querySelector('#email').value;
        const message = contactForm.querySelector('#message').value;

        // You can perform form validation and submit data to your server here

        // Display a confirmation message (you can customize this)
        alert(`Thank you, ${name}! Your message has been sent.`);
    });
}
