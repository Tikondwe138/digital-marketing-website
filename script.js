// NAV TOGGLE
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));

// SMOOTH SCROLL
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove('show');
  });
});

// SECTION FADE-IN ON SCROLL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in').forEach(section => observer.observe(section));

// PORTFOLIO FILTER
const filterButtons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.portfolio-item');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');
    const category = btn.dataset.category;
    items.forEach(item => {
      item.style.display = category === 'all' || item.dataset.category === category ? 'block' : 'none';
    });
  });
});

// TESTIMONIAL SLIDER
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
setInterval(() => {
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add('active');
}, 5000);

// CONTACT FORM
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent successfully!');
  e.target.reset();
});

// NEWSLETTER POPUP
const newsletter = document.getElementById('newsletter');
const closeNewsletter = document.getElementById('close-newsletter');
window.addEventListener('load', () => setTimeout(() => newsletter.classList.remove('hidden'), 3000));
closeNewsletter.addEventListener('click', () => newsletter.classList.add('hidden'));

// CHAT WIDGET
const chatWidget = document.getElementById('chat-widget');
const chatBody = document.querySelector('.chat-body');
chatWidget.querySelector('.chat-header').addEventListener('click', () => chatBody.classList.toggle('hidden'));
