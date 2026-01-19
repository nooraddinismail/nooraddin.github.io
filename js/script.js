// Cybersecurity Portfolio Script
document.addEventListener('DOMContentLoaded', function() {
    // Load data and populate content
    loadHeroSection();
    loadAboutSection();
    loadExperienceSection();
    loadSkillsSection();
    loadProjectsSection();
    loadContactSection();

    // Initialize other functionality
    initializeMobileMenu();
    initializeContactForm();
    initializeScrollEffects();
});

function loadHeroSection() {
    const personal = portfolioData.personal;

    // Update hero content
    document.getElementById('status-badge').textContent = personal.status;
    document.getElementById('hero-title').textContent = personal.title;
    document.getElementById('hero-university').textContent = personal.university;
    document.getElementById('profile-image').src = personal.profileImage;

    // Update stats
    document.getElementById('stat-experience').textContent = portfolioData.stats.experience;
    document.getElementById('stat-projects').textContent = portfolioData.stats.projects;
}

function loadAboutSection() {
    const about = portfolioData.about;

    document.getElementById('about-description').textContent = about.description;

    const highlightsList = document.getElementById('highlights-list');
    highlightsList.innerHTML = '';

    about.highlights.forEach(highlight => {
        const highlightDiv = document.createElement('div');
        highlightDiv.className = 'flex items-start space-x-3';
        highlightDiv.innerHTML = `
            <i class="fas fa-check-circle text-lime mt-1"></i>
            <span class="text-gray-300">${highlight}</span>
        `;
        highlightsList.appendChild(highlightDiv);
    });
}

function loadExperienceSection() {
    const experience = portfolioData.experience;

    // Update Network Security
    document.getElementById('network-title').textContent = experience.networkSecurity.title;
    document.getElementById('network-description').textContent = experience.networkSecurity.description;

    const networkSkills = document.getElementById('network-skills');
    networkSkills.innerHTML = '';
    experience.networkSecurity.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'text-gray-300 text-sm flex items-center space-x-2';
        skillItem.innerHTML = `
            <i class="fas fa-dot-circle text-lime text-xs"></i>
            <span>${skill}</span>
        `;
        networkSkills.appendChild(skillItem);
    });

    // Update Software Development
    document.getElementById('software-title').textContent = experience.softwareDev.title;
    document.getElementById('software-description').textContent = experience.softwareDev.description;

    const softwareSkills = document.getElementById('software-skills');
    softwareSkills.innerHTML = '';
    experience.softwareDev.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'text-gray-300 text-sm flex items-center space-x-2';
        skillItem.innerHTML = `
            <i class="fas fa-dot-circle text-blue text-xs"></i>
            <span>${skill}</span>
        `;
        softwareSkills.appendChild(skillItem);
    });

    // Update Cyber Operations
    document.getElementById('cyber-title').textContent = experience.cyberOperations.title;
    document.getElementById('cyber-description').textContent = experience.cyberOperations.description;

    const cyberSkills = document.getElementById('cyber-skills');
    cyberSkills.innerHTML = '';
    experience.cyberOperations.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'text-gray-300 text-sm flex items-center space-x-2';
        skillItem.innerHTML = `
            <i class="fas fa-dot-circle text-lime text-xs"></i>
            <span>${skill}</span>
        `;
        cyberSkills.appendChild(skillItem);
    });
}

function loadSkillsSection() {
    const skills = portfolioData.skills;

    // Programming Skills
    document.getElementById('programming-title').textContent = skills.programming.title;
    const programmingSkills = document.getElementById('programming-skills');
    programmingSkills.innerHTML = '';
    skills.programming.skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        programmingSkills.appendChild(skillTag);
    });

    // Tools Skills
    document.getElementById('tools-title').textContent = skills.tools.title;
    const toolsSkills = document.getElementById('tools-skills');
    toolsSkills.innerHTML = '';
    skills.tools.skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        toolsSkills.appendChild(skillTag);
    });

    // Specialized Skills
    document.getElementById('specialized-title').textContent = skills.specialized.title;
    const specializedSkills = document.getElementById('specialized-skills');
    specializedSkills.innerHTML = '';
    skills.specialized.skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        specializedSkills.appendChild(skillTag);
    });
}

function loadProjectsSection() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    portfolioData.projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card glass-card p-6 animate-fade-in-up';
        projectCard.style.animationDelay = `${index * 0.1}s`;

        const techStack = project.technologies.map(tech =>
            `<span class="bg-lime/10 text-lime px-2 py-1 rounded text-xs border border-lime/20">${tech}</span>`
        ).join(' ');

        projectCard.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                    <i class="fas fa-code text-lime text-xl"></i>
                    <h3 class="text-xl font-semibold text-white">${project.title}</h3>
                </div>
                <span class="text-xs bg-lime/10 text-lime px-2 py-1 rounded border border-lime/20">
                    ${project.category}
                </span>
            </div>

            <p class="text-gray-300 mb-4 leading-relaxed">${project.description}</p>

            <div class="mb-4">
                <h4 class="text-sm font-medium text-lime mb-2">Technologies Used:</h4>
                <div class="flex flex-wrap gap-1">
                    ${techStack}
                </div>
            </div>

            <div class="flex items-center justify-between">
                <span class="text-xs text-lime font-medium">${project.status}</span>
                <button class="text-lime hover:text-white transition-colors">
                    <i class="fas fa-external-link-alt"></i>
                </button>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

function loadContactSection() {
    const contact = portfolioData.contact;

    document.getElementById('contact-location').textContent = contact.location;
    document.getElementById('contact-phone').textContent = contact.phone;
    document.getElementById('contact-email').textContent = contact.email;
    document.getElementById('github-link').href = contact.github;
    document.getElementById('linkedin-link').href = contact.linkedin;
}

function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // For now, just show success message
        // In a real application, you'd send this to a backend
        showNotification('Thank you for your message! I will get back to you soon.', 'success');

        // Reset form
        contactForm.reset();
    });
}

function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
        type === 'success'
            ? 'bg-lime text-black'
            : 'bg-red-500 text-white'
    }`;
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

function initializeScrollEffects() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading animation
const style = document.createElement('style');
style.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }

    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);