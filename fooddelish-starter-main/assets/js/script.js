// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active');
        this.classList.toggle('active');
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on Scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.popular-menu-item, .chicken-box, .states-grid-item, .satay-box, .chef-info');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Element is visible in viewport
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('visible');
        }
    });
});

// Counter Animation for Statistics
function startCounters() {
    const counters = document.querySelectorAll('.states-grid-item h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.innerText);
        let count = 0;
        
        const updateCounter = () => {
            const increment = target / 100;
            
            if(count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCounter();
    });
}

// Start counters when statistics section is in view
const observer = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting) {
        startCounters();
        observer.unobserve(entries[0].target);
    }
});

const statsSection = document.querySelector('.statistics');
if(statsSection) {
    observer.observe(statsSection);
}