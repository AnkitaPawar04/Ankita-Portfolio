// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'light') {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
} else {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Animated counter for stats
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateCounter();
};

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate stat numbers
            if (entry.target.classList.contains('stat-number')) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
            
            // Fade in elements
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    // Observe stat numbers
    document.querySelectorAll('.stat-number').forEach(stat => {
        stat.style.opacity = '0';
        observer.observe(stat);
    });
    
    // Observe skill categories
    document.querySelectorAll('.skill-category').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Observe project cards
    document.querySelectorAll('.project-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Observe achievement cards
    document.querySelectorAll('.achievement-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Observe education cards
    document.querySelectorAll('.education-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-30px)';
        el.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(el);
    });
    
    // Observe certification cards
    document.querySelectorAll('.certification-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Observe skill cards
    document.querySelectorAll('.skill-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'scale(0.8)';
        el.style.transition = `all 0.5s ease ${index * 0.05}s`;
        observer.observe(el);
    });
});

// Project details modal
const projectsData = [
    {
        title: 'Construction Field Management System',
        description: 'A comprehensive web-based system designed to streamline and manage construction site operations efficiently.',
        fullDescription: 'This system provides a centralized platform for managing all aspects of construction site operations, from project planning to execution. It enables real-time tracking of project progress, workforce allocation, and resource management.',
        features: [
            'Project and task tracking with real-time updates',
            'Workforce management and attendance tracking',
            'Resource allocation and inventory management',
            'Centralized data handling for construction activities',
            'Report generation and analytics',
            'Multi-user access with role-based permissions'
        ],
        techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
        challenges: 'Managing real-time data synchronization and creating an intuitive interface for field workers.',
        outcome: 'Successfully deployed for academic demonstration, showcasing efficient construction management workflows.'
    },
    {
        title: 'AI/ML-Based Hybrid Movie Recommendation System',
        description: 'An intelligent recommendation engine that suggests movies using advanced hybrid AI techniques.',
        fullDescription: 'This system combines content-based filtering and collaborative filtering to provide highly accurate and personalized movie recommendations. It analyzes user preferences, viewing history, and movie attributes to suggest relevant content.',
        features: [
            'Personalized movie recommendations based on user preferences',
            'User behavior and history analysis',
            'Content-based filtering using movie attributes',
            'Collaborative filtering using user similarity',
            'Improved recommendation accuracy using hybrid approach',
            'Interactive user interface for rating and reviewing movies'
        ],
        techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask', 'Machine Learning Algorithms'],
        challenges: 'Balancing the weight between content-based and collaborative filtering to optimize recommendations.',
        outcome: 'Achieved high accuracy in recommendations with positive user feedback during testing.'
    },
    {
        title: 'Academic Administration Platform',
        description: 'A centralized digital platform developed to manage and streamline academic activities.',
        fullDescription: 'This platform serves as a comprehensive solution for educational institutions to manage student records, faculty information, course assignments, and academic performance tracking in a secure and organized manner.',
        features: [
            'Student information management system',
            'Faculty profile and assignment management',
            'Course registration and scheduling',
            'Academic record handling and transcript generation',
            'Secure authentication and data access control',
            'Dashboard with analytics and reports'
        ],
        techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
        challenges: 'Implementing secure role-based access control and handling large volumes of academic data.',
        outcome: 'Successfully created a scalable platform that digitizes academic administration processes.'
    },
    {
        title: 'CivicFix – Local Issue Reporting Platform',
        description: 'A civic engagement platform enabling citizens to report local issues directly to authorities.',
        fullDescription: 'CivicFix bridges the gap between citizens and local administration by providing an easy-to-use platform for reporting civic issues such as potholes, broken streetlights, garbage disposal problems, and more. The platform enables issue tracking and resolution monitoring.',
        features: [
            'Issue reporting with photo upload capability',
            'Location-based issue mapping with GPS integration',
            'Status tracking of reported issues',
            'Notification system for updates',
            'Admin dashboard for issue management',
            'Analytics and reporting for authorities'
        ],
        techStack: ['Laravel', 'PHP', 'MySQL', 'Google Maps API', 'Bootstrap', 'JavaScript'],
        challenges: 'Integrating location services accurately and creating an efficient issue categorization system.',
        outcome: 'Developed a functional prototype demonstrating improved communication between citizens and administration.'
    }
];

function showProjectDetails(projectIndex) {
    const project = projectsData[projectIndex];
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h2 style="color: var(--primary-color); margin-bottom: 1rem;">${project.title}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">${project.fullDescription}</p>
        
        <h3 style="color: var(--text-primary); margin-bottom: 1rem;">
            <i class="fas fa-list-check"></i> Key Features
        </h3>
        <ul style="color: var(--text-secondary); margin-bottom: 2rem; padding-left: 1.5rem;">
            ${project.features.map(feature => `<li style="margin-bottom: 0.5rem;">${feature}</li>`).join('')}
        </ul>
        
        <h3 style="color: var(--text-primary); margin-bottom: 1rem;">
            <i class="fas fa-code"></i> Technology Stack
        </h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
            ${project.techStack.map(tech => `
                <span style="background: var(--dark-tertiary); color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem; border: 1px solid var(--primary-color);">
                    ${tech}
                </span>
            `).join('')}
        </div>
        
        <h3 style="color: var(--text-primary); margin-bottom: 1rem;">
            <i class="fas fa-mountain"></i> Challenges
        </h3>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">${project.challenges}</p>
        
        <h3 style="color: var(--text-primary); margin-bottom: 1rem;">
            <i class="fas fa-trophy"></i> Outcome
        </h3>
        <p style="color: var(--text-secondary);">${project.outcome}</p>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
    
    // Reset form
    e.target.reset();
});

// Smooth scroll for all anchor links
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

// Add typing effect to hero subtitle
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    heroSubtitle.style.borderRight = '2px solid var(--primary-color)';
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            heroSubtitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        } else {
            setTimeout(() => {
                heroSubtitle.style.borderRight = 'none';
            }, 500);
        }
    }
    
    // Start typing effect after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 1000);
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add active class to nav links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add pulse animation to social links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 0.5s ease';
    });
    
    link.addEventListener('animationend', function() {
        this.style.animation = '';
    });
});

// Console message
console.log('%c👋 Welcome to Ankita Pawar\'s Portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the GitHub repository!', 'color: #8b5cf6; font-size: 14px;');
