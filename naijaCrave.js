// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission
const form = document.querySelector('.contact form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    // You can send this data to your server using fetch or XMLHttpRequest
    console.log('Form submitted:', Object.fromEntries(formData.entries()));
    alert('Thank you for contacting us!');
    form.reset();
});

