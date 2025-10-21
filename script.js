// Mobile Navigation
function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }
}

// Project pages simulation
function openProject(projectId) {
    // In a real website, this would redirect to project pages
    // For now, we'll show an alert and you can replace with actual pages
    const projectTitles = {
        'project1': 'Visioni Digitali',
        'project2': 'Schizzi Urbani', 
        'project3': 'Architetture',
        'project4': 'Emozioni Astratte',
        'project5': 'Studio Ritrattistico',
        'project6': 'Flusso d\'Acqua',
        'project7': 'Natura Viva',
        'project8': 'Character Design'
    };
    
    alert(`Progetto: ${projectTitles[projectId]}\n\nQuesta è una demo. In un sito reale, questa pagina mostrerebbe dettagli completi del progetto.`);
}

// Contact Form Handling
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Show success message
        alert('Grazie per il tuo messaggio, ' + data.name + '! Ti risponderò al più presto.');
        form.reset();
    });
}

// Set active navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
    initContactForm();
    setActiveNavLink();
    initSmoothScroll();
    
    // Add click events to all portfolio items
    document.querySelectorAll('.masonry-item, .grid-item').forEach(item => {
        item.style.cursor = 'pointer';
    });
});

// Handle video loading
window.addEventListener('load', function() {
    const video = document.querySelector('.background-video');
    if (video) {
        video.play().catch(e => {
            console.log('Video autoplay prevented:', e);
        });
    }
});