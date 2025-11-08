// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation anchor links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add IDs to sections for navigation
    const sections = document.querySelectorAll('h2');
    sections.forEach(section => {
        const id = section.textContent.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');
        section.id = id;
    });
    
    // Highlight active navigation item on scroll
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        if (section.id) {
            observer.observe(section);
        }
    });
    
    // Add copy-to-clipboard for code blocks
    const codeBlocks = document.querySelectorAll('code');
    codeBlocks.forEach(code => {
        code.style.cursor = 'pointer';
        code.title = 'Click to copy';
        code.addEventListener('click', function() {
            navigator.clipboard.writeText(this.textContent).then(() => {
                const original = this.textContent;
                this.textContent = 'Copied!';
                setTimeout(() => {
                    this.textContent = original;
                }, 1000);
            });
        });
    });
});

