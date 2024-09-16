document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic project loading
    const projects = [
        { title: 'Project 1', description: 'Description of Project 1', image: 'path/to/image1.jpg', link: '#' },
        { title: 'Project 2', description: 'Description of Project 2', image: 'path/to/image2.jpg', link: '#' },
        { title: 'Project 3', description: 'Description of Project 3', image: 'path/to/image3.jpg', link: '#' }
    ];

    const projectGrid = document.querySelector('.project-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">Learn More</a>
            </div>
        `;
        projectGrid.appendChild(projectCard);
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        // Here you would typically send the form data to a server
        console.log('Form submitted:', Object.fromEntries(formData));
        contactForm.reset();
        alert('Thank you for your message! I will get back to you soon.');
    });

    // Intersection Observer for fade-in animations
    const fadeInElements = document.querySelectorAll('section');
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(element => {
        fadeInObserver.observe(element);
    });
});