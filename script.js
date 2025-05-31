// Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! We will contact you soon.');
            contactForm.reset();
        });

        // Scroll animation
        const fadeElements = document.querySelectorAll('.fade-in');

        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        };

        // Run once on page load
        fadeInOnScroll();

        // Run on scroll
        window.addEventListener('scroll', fadeInOnScroll);