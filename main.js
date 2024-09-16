document.addEventListener('DOMContentLoaded', () => {
    // Dynamic project loading
    const projects = [
        { title: 'Project 1', description: 'Description of Project 1', image: 'https://via.placeholder.com/300x200.png?text=Project+1' },
        { title: 'Project 2', description: 'Description of Project 2', image: 'https://via.placeholder.com/300x200.png?text=Project+2' },
        { title: 'Project 3', description: 'Description of Project 3', image: 'https://via.placeholder.com/300x200.png?text=Project+3' }
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
            </div>
        `;
        projectGrid.appendChild(projectCard);
    });

    // Dynamic social links loading
    const socialLinks = [
        { icon: 'fab fa-github', url: 'https://github.com/yourusername' },
        { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/yourusername' },
        { icon: 'fas fa-envelope', url: 'mailto:your.email@example.com' }
    ];

    const socialLinksContainer = document.querySelector('.social-links');
    socialLinks.forEach(link => {
        const socialLink = document.createElement('a');
        socialLink.href = link.url;
        socialLink.target = '_blank';
        socialLink.rel = 'noopener noreferrer';
        socialLink.classList.add('social-link');
        socialLink.innerHTML = `<i class="${link.icon}"></i>`;
        socialLinksContainer.appendChild(socialLink);
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