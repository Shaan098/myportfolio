// ============================================
// PORTFOLIO INITIALIZATION & DOM ELEMENTS
// ============================================

const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const scrollProgress = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');
const menuToggle = document.getElementById('menuToggle');
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const contactForm = document.getElementById('contactForm');

// ============================================
// SKILLS DATA
// ============================================

const skillsData = {
    languages: [
        { name: 'C++', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'C', level: 85 },
        { name: 'PHP', level: 70 },
        { name: 'Python', level: 75 }
    ],
    frameworks: [
        { name: 'React', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 }
    ],
    tools: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'VS Code', level: 95 },
        { name: 'Thunder Client', level: 85 },
        { name: 'Git & GitHub', level: 88 },
        { name: 'AWS', level: 75 }
    ],
    soft: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Team Player', level: 90 },
        { name: 'Adaptability', level: 88 },
        { name: 'Communication', level: 85 },
        { name: 'Leadership', level: 80 },
        { name: 'Creative Thinking', level: 85 }
    ]
};

// ============================================
// PROJECTS DATA
// ============================================

const projectsData = [
    {
        id: 1,
        title: 'Online Multi-Language Compiler',
        category: 'full-stack',
        image: '🖥️',
        description: 'A powerful online compiler that supports multiple programming languages with secure code execution and real-time editing.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        features: [
            'Multi-language execution (C, C++, Java, JS)',
            'Secure code execution with sandboxing',
            'Real-time collaborative editor'
        ],
        github: 'https://github.com/Shaan098/online-compiler',
        live: 'https://compiler-client-9wha.vercel.app/',
        color: ''
    },
    {
        id: 2,
        title: 'AR Educational Content Viewer',
        category: 'full-stack',
        image: '🎨',
        description: 'Interactive AR application for visualizing 3D educational models with intuitive controls and responsive design.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Three.js', 'AR.js'],
        features: [
            '3D model rendering and manipulation',
            'AR placement in real world',
            'Responsive UI for mobile & desktop'
        ],
        github: 'https://github.com/Shaan098/ar-viewer',
        live: '',
        color: 'from-purple-500 to-pink-500'
    },
    {
        id: 3,
        title: 'Appointment System',
        category: 'full-stack',
        image: '📅',
        description: 'Complete appointment booking system with JWT authentication, role-based access control, and dynamic scheduling.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
        features: [
            'JWT authentication and authorization',
            'Role-based access control',
            'Dynamic appointment scheduling'
        ],
        github: 'https://github.com/Shaan098/appointment-system',
        live: '',
        color: 'from-green-500 to-teal-500'
    }
];

// ============================================
// CHATBOT RESPONSES
// ============================================

const chatbotResponses = {
    hello: 'Hey there! 👋 How can I help you today?',
    hi: 'Hello! 👋 What would you like to know?',
    projects: 'I\'ve worked on several projects including:\n1. Online Multi-Language Compiler\n2. AR Educational Content Viewer\n3. Appointment System\n\nWould you like details about any specific project?',
    skills: 'My main skills include React, Node.js, MongoDB, JavaScript, C++, and more! Check the Skills section for a complete breakdown.',
    experience: 'I\'ve completed virtual experiences with EA and AWS, focusing on system design and cloud architecture.',
    contact: 'You can reach me at shaansaurav633@gmail.com or +91 6204566381. I\'m also on LinkedIn and GitHub!',
    resume: 'You can download my resume from the hero section. Click the "Download Resume" button!',
    education: 'I\'m a B.Tech CSE student at Lovely Professional University, graduating in 2026.',
    hello: 'That\'s interesting! Feel free to ask about my projects, skills, experience, or how to contact me.'
};

// ============================================
// THEME TOGGLE (Dark Mode)
// ============================================

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-mode');
        updateThemeIcon();
    }
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        icon.style.color = '#fbbf24';
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        icon.style.color = '#64748b';
    }
}

// ============================================
// SCROLL PROGRESS BAR
// ============================================

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrolled + '%';

    // Show back-to-top button
    if (scrollTop > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Back to top button
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// TYPING EFFECT
// ============================================

const words = [
    'Full Stack Developer',
    'Problem Solver',
    'Web Developer',
    'Tech Enthusiast'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text');

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// ============================================
// SKILLS SECTION
// ============================================

function renderSkills(category = 'all') {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = '';

    let skillsToShow = [];
    
    if (category === 'all') {
        Object.values(skillsData).forEach(cat => {
            skillsToShow = skillsToShow.concat(cat);
        });
    } else {
        skillsToShow = skillsData[category] || [];
    }

    skillsToShow.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <h4><i class="fas fa-code-branch"></i> ${skill.name}</h4>
            <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 0%"></div>
            </div>
            <div class="skill-level">${skill.level}%</div>
        `;
        skillsGrid.appendChild(skillCard);

        // Animate progress bar
        setTimeout(() => {
            const progressBar = skillCard.querySelector('.skill-progress-bar');
            progressBar.style.width = skill.level + '%';
        }, 100);
    });
}

// Skills filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderSkills(this.dataset.filter);
    });
});

renderSkills('all');

// ============================================
// PROJECTS SECTION
// ============================================

function renderProjects(category = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    const filteredProjects = category === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === category);

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-color', project.color);
        projectCard.innerHTML = `
            <div class="project-header">${project.image}</div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                
                <div class="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                        ${project.features.slice(0, 3).map(f => `<li><span>→</span> ${f}</li>`).join('')}
                    </ul>
                </div>

                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>

                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link-btn">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    ${project.live ? `<a href="${project.live}" target="_blank" class="project-link-btn">
                        <i class="fas fa-external-link-alt"></i> Live
                    </a>` : ''}
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Projects filter buttons
document.querySelectorAll('.project-filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.project-filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderProjects(this.dataset.filter);
    });
});

renderProjects('all');

// ============================================
// ANIMATED COUNTERS
// ============================================

function animateCounters() {
    document.querySelectorAll('[data-count]').forEach(element => {
        const finalCount = parseInt(element.dataset.count);
        let currentCount = 0;
        const increment = Math.ceil(finalCount / 50);

        const counter = setInterval(() => {
            currentCount += increment;
            if (currentCount >= finalCount) {
                element.textContent = finalCount + '+';
                clearInterval(counter);
            } else {
                element.textContent = currentCount + '+';
            }
        }, 30);
    });
}

// Trigger when achievements section is visible
const achievementsSection = document.getElementById('achievements');
if (achievementsSection) {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateCounters();
            observer.unobserve(achievementsSection);
        }
    }, { threshold: 0.1 });

    observer.observe(achievementsSection);
}

// ============================================
// CONTACT FORM
// ============================================

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create mailto link
    const mailtoLink = `mailto:shaansaurav633@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;

    // Show success message
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = '✓ Message sent! I\'ll get back to you soon.';
    formMessage.style.display = 'block';
    formMessage.style.background = '#d1fae5';
    formMessage.style.color = '#065f46';
    formMessage.style.borderLeftColor = '#10b981';

    // Reset form
    contactForm.reset();

    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 3000);
});

// ============================================
// CHATBOT FUNCTIONALITY
// ============================================

chatbotToggle.addEventListener('click', () => {
    chatbotWindow.style.display = chatbotWindow.style.display === 'none' ? 'flex' : 'none';
});

chatbotClose.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
});

function addChatMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message ' + (sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.innerHTML = `<p>${escapeHtml(text)}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    for (const [key, response] of Object.entries(chatbotResponses)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }

    return 'That\'s interesting! Feel free to ask about my projects, skills, experience, or how to contact me.';
}

chatSend.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        sendChatMessage();
    }
});

function sendChatMessage() {
    const message = chatInput.value.trim();
    if (message) {
        addChatMessage(message, 'user');
        chatInput.value = '';

        setTimeout(() => {
            const response = getBotResponse(message);
            addChatMessage(response, 'bot');
        }, 500);
    }
}

// ============================================
// RESUME DOWNLOAD
// ============================================

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'my final cv.pdf';
    link.download = 'Shaan_Saurav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ============================================
// SMOOTH SCROLLING NAV LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    updateThemeIcon();
});
