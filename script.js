// ==========================
// NAVIGATION TOGGLE
// ==========================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth scroll + active nav highlighting
const navAnchors = document.querySelectorAll('nav a');
navAnchors.forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove('show');
  });
});

// ==========================
// SECTION FADE-IN ON SCROLL
// ==========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in').forEach(section => observer.observe(section));

// ==========================
// PORTFOLIO FILTER
// ==========================
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');
    const category = btn.dataset.category;
    portfolioItems.forEach(item => {
      item.style.display = category === 'all' || item.dataset.category === category ? 'block' : 'none';
    });
  });
});

// ==========================
// TESTIMONIAL SLIDER
// ==========================
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

setInterval(() => {
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add('active');
}, 5000);

// ==========================
// CONTACT FORM
// ==========================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = e.target.querySelector('input[type="text"]').value.trim();
  const email = e.target.querySelector('input[type="email"]').value.trim();
  const message = e.target.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Simple email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Message sent successfully!');
  contactForm.reset();
});

// ==========================
// NEWSLETTER POPUP
// ==========================
const newsletter = document.getElementById('newsletter');
const closeNewsletter = document.getElementById('close-newsletter');
const subscribeBtn = document.getElementById('subscribe-btn');

window.addEventListener('load', () => setTimeout(() => newsletter.classList.remove('hidden'), 3000));
closeNewsletter.addEventListener('click', () => newsletter.classList.add('hidden'));
subscribeBtn.addEventListener('click', () => {
  const emailInput = newsletter.querySelector('input[type="email"]').value.trim();
  if (!emailInput) {
    alert('Please enter your email.');
    return;
  }
  alert('Subscribed successfully!');
  newsletter.classList.add('hidden');
  newsletter.querySelector('input[type="email"]').value = '';
});

// ==========================
// CHAT WIDGET
// ==========================
const chatWidget = document.getElementById('chat-widget');
const chatBody = chatWidget.querySelector('.chat-body');

chatWidget.querySelector('.chat-header').addEventListener('click', () => {
  chatBody.classList.toggle('hidden');
});

// ==========================
// PRELOADER (Optional)
// ==========================
const preloader = document.createElement('div');
preloader.id = 'preloader';
preloader.innerHTML = '<div class="spinner"></div>';
document.body.prepend(preloader);

window.addEventListener('load', () => {
  preloader.classList.add('loaded');
  setTimeout(() => preloader.remove(), 800);
});

// ==========================
// NAVIGATION ACTIVE LINK ON SCROLL
// ==========================
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) current = section.getAttribute('id');
  });

  navAnchors.forEach(anchor => {
    anchor.classList.remove('active');
    if (anchor.getAttribute('href').includes(current)) anchor.classList.add('active');
  });
});
