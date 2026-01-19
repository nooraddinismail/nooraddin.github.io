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
    const stats = portfolioData.stats;

    document.getElementById('about-description').textContent = about.description;
    document.getElementById('stats-experience').textContent = stats.yearsOfExperience;
    document.getElementById('stats-projects').textContent = stats.projectsCompleted;

    const highlightsList = document.getElementById('highlights-list');
    highlightsList.innerHTML = '';

    about.highlights.forEach(highlight => {
        const highlightDiv = document.createElement('div');
        highlightDiv.className = 'flex items-start space-x-3';
        highlightDiv.innerHTML = `
            <i class="fas fa-check-circle text-emerald mt-1"></i>
            <span class="text-gray-300">${highlight}</span>
        `;
        highlightsList.appendChild(highlightDiv);
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
            `<span class="bg-emerald/10 text-emerald px-2 py-1 rounded text-xs border border-emerald/20">${tech}</span>`
        ).join(' ');

        projectCard.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                    <i class="fas fa-code text-emerald text-xl"></i>
                    <h3 class="text-xl font-semibold text-white">${project.title}</h3>
                </div>
                <span class="text-xs bg-emerald/10 text-emerald px-2 py-1 rounded border border-emerald/20">
                    ${project.category}
                </span>
            </div>

            <p class="text-gray-300 mb-4 leading-relaxed">${project.description}</p>

            <div class="mb-4">
                <h4 class="text-sm font-medium text-emerald mb-2">Technologies Used:</h4>
                <div class="flex flex-wrap gap-1">
                    ${techStack}
                </div>
            </div>

            <div class="flex items-center justify-between">
                <span class="text-xs text-emerald font-medium">${project.status}</span>
                <button class="text-emerald hover:text-white transition-colors">
                    <i class="fas fa-external-link-alt"></i>
                </button>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
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
            <i class="fas fa-dot-circle text-emerald text-xs"></i>
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
            <i class="fas fa-dot-circle text-emerald text-xs"></i>
            <span>${skill}</span>
        `;
        cyberSkills.appendChild(skillItem);
    });
}

function loadEducationSection() {
    const educationGrid = document.getElementById('education-grid');
    educationGrid.innerHTML = '';

    portfolioData.education.forEach(edu => {
        const educationCard = document.createElement('div');
        educationCard.className = 'bg-cyber-dark p-6 rounded-lg border border-cyber-zinc';

        educationCard.innerHTML = `
            <div class="flex items-center space-x-3 mb-4">
                <div class="w-12 h-12 bg-cyber-emerald/10 rounded-lg flex items-center justify-center">
                    <i class="fas fa-graduation-cap text-cyber-lime"></i>
                </div>
                <div>
                    <h3 class="text-xl font-semibold text-white">${edu.degree}</h3>
                    <p class="text-cyber-lime">${edu.institution}</p>
                </div>
            </div>

            <div class="mb-4">
                <span class="inline-block bg-cyber-lime/10 text-cyber-lime px-3 py-1 rounded-full text-sm border border-cyber-lime/20">
                    ${edu.period}
                </span>
                <span class="ml-2 text-gray-400 text-sm">${edu.status}</span>
            </div>

            <p class="text-gray-300">${edu.description}</p>
        `;

        educationGrid.appendChild(educationCard);
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
            ? 'bg-cyber-emerald text-black'
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
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
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

    // Add fade-in animation CSS
    const style = document.createElement('style');
    style.textContent = `
        .animate-fade-in {
            animation: fadeInUp 0.6s ease-out forwards;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Terminal typing effect for hero description
function initializeTypingEffect() {
    const terminalElement = document.querySelector('.terminal-text');
    if (terminalElement) {
        const text = "> Cybersecurity & Digital Forensics Student";
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                terminalElement.textContent = text.substring(0, index + 1);
                index++;
                setTimeout(typeWriter, 100);
            }
        }

        setTimeout(typeWriter, 2000);
    }
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeTypingEffect, 1000);
});
