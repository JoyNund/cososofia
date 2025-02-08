// Header scroll effect
const header = document.querySelector('.header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Custom Slider functionality
class Slider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.dotsContainer = document.querySelector('.slider-dots');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.init();
    }

    init() {
        // Create dots
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });

        // Start autoplay
        this.startAutoplay();
    }

    goToSlide(index) {
        // Remove active class from current slide and dot
        this.slides[this.currentSlide].classList.remove('active');
        this.dotsContainer.children[this.currentSlide].classList.remove('active');

        // Update current slide
        this.currentSlide = index;

        // Add active class to new slide and dot
        this.slides[this.currentSlide].classList.add('active');
        this.dotsContainer.children[this.currentSlide].classList.add('active');
    }

    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(next);
    }

    startAutoplay() {
        if (this.slideInterval) clearInterval(this.slideInterval);
        this.slideInterval = setInterval(() => this.nextSlide(), 5000);
    }

    stopAutoplay() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
}

// Initialize slider
const slider = new Slider();

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        logo.setAttribute('fill', '#0F94B9');
    } else {
        header.classList.remove('scrolled');
        logo.setAttribute('fill', '#FFFFFF');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Close mobile menu when window is resized above mobile breakpoint
window.addEventListener('resize', () => {
    if (window.innerWidth > 968) {
        navLinks.classList.remove('active');
    }
});


// Smooth scroll functionality
document.querySelector('.scroll-down').addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo svg');
    const heroSection = document.querySelector('.hero');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navbar.classList.add('scrolled');
                logo.setAttribute('fill', '#0F94B9');
            } else {
                navbar.classList.remove('scrolled');
                logo.setAttribute('fill', '#FFFFFF');
            }
        });
    });

    observer.observe(heroSection);
});

// Contador animado
const counters = document.querySelectorAll('.stat h2');

counters.forEach(counter => {
    counter.innerText = '0'; // Inicializa el contador en 0
    const target = +counter.getAttribute('data-target'); // Obtiene el valor objetivo

    const updateCounter = () => {
        const c = +counter.innerText; // Obtiene el valor actual

        let increment;
        if (target === 8) {
            increment = target / 1000; // Velocidad para +8
        } else if (target === 500) {
            increment = target / 500; // Velocidad para +500
        } else if (target === 2) {
            increment = target / 2000; // Velocidad para 2
        }

        if (c < target) {
            counter.innerText = Math.ceil(c + increment); // Incrementa el contador
            setTimeout(updateCounter, 1); // Llama a la función nuevamente
        } else {
            counter.innerText = target; // Asegúrate de que el contador llegue al objetivo
        }
    };

    updateCounter(); // Inicia el contador
});

// Manejo del submenú
const institucionalBtn = document.querySelector('.institucional-btn');
const submenu = document.querySelector('.submenu');

// Mostrar y ocultar el submenú al hacer clic
institucionalBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex'; // Alternar la visibilidad
});

// Cerrar el submenú al hacer clic fuera de él
document.addEventListener('click', (e) => {
    if (!institucionalBtn.contains(e.target) && !submenu.contains(e.target)) {
        submenu.style.display = 'none'; // Ocultar el submenú
    }
});

