// Global Application State
const appState = {
    currentUser: {
        name: 'Jane Smith',
        school: 'Green Valley High School',
        level: 12,
        points: 2450,
        avatar: 'https://via.placeholder.com/60x60/4ade80/ffffff?text=JS'
    },
    sidebarOpen: false,
    currentSection: 'dashboard'
};

// Utility Functions
function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

function toggleClass(element, className) {
    element.classList.toggle(className);
}

function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}

function show(element) {
    removeClass(element, 'hidden');
}

function hide(element) {
    addClass(element, 'hidden');
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAuthForms();
    initializeDashboard();
    initializeChatbot();
    initializeModals();
    
    console.log('EcoEdu Application Initialized');
});

// Navigation Functions
function initializeNavigation() {
    // Mobile navigation toggle
    const navToggle = $('#navToggle');
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileNav);
    }
    
    // Smooth scrolling for anchor links
    $$('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = $(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function toggleMobileNav() {
    const navLinks = $('.nav-links');
    toggleClass(navLinks, 'active');
    
    // Animate hamburger menu
    const navToggle = $('#navToggle');
    toggleClass(navToggle, 'active');
}

// Authentication Form Functions
function initializeAuthForms() {
    const loginToggle = $('#loginToggle');
    const signupToggle = $('#signupToggle');
    const loginForm = $('#loginForm');
    const signupForm = $('#signupForm');
    
    if (loginToggle && signupToggle) {
        loginToggle.addEventListener('click', () => showForm('login'));
        signupToggle.addEventListener('click', () => showForm('signup'));
        
        // Check URL parameters for signup
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('signup') === 'true') {
            showForm('signup');
        }
    }
    
    // Password toggle functionality
    $$('.password-toggle').forEach(toggle => {
        toggle.addEventListener('click', togglePassword);
    });
    
    // Form submissions
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
        
        // Password strength checker
        const passwordInput = $('#signupPassword');
        if (passwordInput) {
            passwordInput.addEventListener('input', checkPasswordStrength);
        }
    }
}

function showForm(formType) {
    const loginToggle = $('#loginToggle');
    const signupToggle = $('#signupToggle');
    const loginForm = $('#loginForm');
    const signupForm = $('#signupForm');
    
    if (formType === 'login') {
        addClass(loginToggle, 'active');
        removeClass(signupToggle, 'active');
        show(loginForm);
        hide(signupForm);
    } else {
        addClass(signupToggle, 'active');
        removeClass(loginToggle, 'active');
        show(signupForm);
        hide(loginForm);
    }
}

function togglePassword(e) {
    const button = e.target.closest('.password-toggle');
    const input = button.previousElementSibling;
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fas fa-eye-slash';
    } else {
        input.type = 'password';
        icon.className = 'fas fa-eye';
    }
}

function checkPasswordStrength(e) {
    const password = e.target.value;
    const strengthBar = $('.strength-bar');
    const strengthText = $('.strength-text');
    
    if (!strengthBar || !strengthText) return;
    
    let strength = 0;
    let message = 'Weak';
    
    // Check password criteria
    if (password.length >= 8) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    // Update strength indicator
    const percentage = (strength / 5) * 100;
    strengthBar.style.setProperty('--strength-width', `${percentage}%`);
    
    if (strength < 2) {
        message = 'Weak';
        strengthBar.style.backgroundColor = '#ef4444';
    } else if (strength < 4) {
        message = 'Medium';
        strengthBar.style.backgroundColor = '#f59e0b';
    } else {
        message = 'Strong';
        strengthBar.style.backgroundColor = '#10b981';
    }
    
    strengthText.textContent = message;
}

function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    console.log('Login attempt:', { email, password: '***' });
    
    // Simulate login process
    showLoadingState(e.target);
    
    setTimeout(() => {
        hideLoadingState(e.target);
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    }, 1500);
}

function handleSignup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData);
    
    console.log('Signup attempt:', { ...userData, password: '***' });
    
    // Simulate signup process
    showLoadingState(e.target);
    
    setTimeout(() => {
        hideLoadingState(e.target);
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    }, 2000);
}

function showLoadingState(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    }
}

function hideLoadingState(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = submitButton.dataset.originalText || 'Submit';
    }
}

// Dashboard Functions
function initializeDashboard() {
    if (!$('.dashboard-body')) return;
    
    // Sidebar functionality
    const menuToggle = $('#menuToggle');
    const sidebar = $('#sidebar');
    const sidebarToggle = $('#sidebarToggle');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleSidebar);
    }
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', closeSidebar);
    }
    
    // Navigation items
    $$('.nav-item').forEach(item => {
        item.addEventListener('click', handleNavigation);
    });
    
    // Quick action buttons
    $$('.action-card').forEach(card => {
        card.addEventListener('click', handleQuickAction);
    });
    
    // Initialize dashboard widgets
    updateDashboardData();
    
    // Notification handler
    const notificationButton = $('.notifications');
    if (notificationButton) {
        notificationButton.addEventListener('click', showNotifications);
    }
}

function toggleSidebar() {
    const sidebar = $('#sidebar');
    toggleClass(sidebar, 'active');
    appState.sidebarOpen = !appState.sidebarOpen;
}

function closeSidebar() {
    const sidebar = $('#sidebar');
    removeClass(sidebar, 'active');
    appState.sidebarOpen = false;
}

function handleNavigation(e) {
    e.preventDefault();
    const navItem = e.currentTarget;
    const href = navItem.getAttribute('href');
    
    // Handle logout
    if (navItem.classList.contains('logout')) {
        handleLogout();
        return;
    }
    
    // Update active navigation
    $$('.nav-item').forEach(item => removeClass(item, 'active'));
    addClass(navItem, 'active');
    
    // Update page title
    const pageTitle = $('#pageTitle');
    const itemText = navItem.querySelector('span').textContent;
    if (pageTitle) {
        pageTitle.textContent = itemText;
    }
    
    // Handle different sections
    if (href === '#quizzes') {
        showQuizModal();
    } else if (href === '#missions') {
        showMissionModal();
    } else if (href === '#chatbot') {
        showChatbot();
    } else if (href === '#leaderboard') {
        showLeaderboard();
    } else if (href === '#progress') {
        showProgress();
    } else if (href === '#waste-sorting') {
        showWasteSorting();
    }
    
    console.log('Navigation to:', itemText);
}

function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        console.log('User logged out');
        window.location.href = 'index.html';
    }
}

function handleQuickAction(e) {
    const card = e.currentTarget;
    const cardText = card.querySelector('h3').textContent;
    
    console.log('Quick action clicked:', cardText);
    
    // Add visual feedback
    addClass(card, 'clicked');
    setTimeout(() => removeClass(card, 'clicked'), 200);
    
    // Handle different actions
    if (cardText.includes('Quiz')) {
        showQuizModal();
    } else if (cardText.includes('Mission')) {
        showMissionModal();
    } else if (cardText.includes('Challenge')) {
        showDailyChallenge();
    } else if (cardText.includes('Waste Sorting')) {
        showWasteSorting();
    }
}

function updateDashboardData() {
    // Update user information
    const userName = $('#userName');
    const userSchool = $('#userSchool');
    const userLevel = $('.level-badge');
    const ecoPoints = $('.eco-points');
    const headerPoints = $('#headerPoints');
    
    if (userName) userName.textContent = appState.currentUser.name;
    if (userSchool) userSchool.textContent = appState.currentUser.school;
    if (userLevel) userLevel.textContent = `Level ${appState.currentUser.level}`;
    if (ecoPoints) ecoPoints.innerHTML = `<i class="fas fa-leaf"></i> ${appState.currentUser.points} pts`;
    if (headerPoints) headerPoints.textContent = `${appState.currentUser.points} pts`;
    
    // Animate points counter
    animateCounter('.points-number', appState.currentUser.points);
}

function animateCounter(selector, target) {
    const element = $(selector);
    if (!element) return;
    
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 20);
}

function showNotifications() {
    console.log('Showing notifications');
    // This would typically show a dropdown or modal with notifications
    alert('You have 3 new notifications:\n\n1. Quiz completed - 75 points earned\n2. Mission approved - 150 points earned\n3. New daily challenge available');
}

// Modal Functions
function initializeModals() {
    // Modal close buttons
    $$('.modal-close').forEach(button => {
        button.addEventListener('click', closeModal);
    });
    
    // Click outside to close
    const modalOverlay = $('#modalOverlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }
    
    // Prevent modal content clicks from closing modal
    $$('.modal-content').forEach(content => {
        content.addEventListener('click', e => e.stopPropagation());
    });
}

function showModal(modalId) {
    const modal = $(modalId);
    const overlay = $('#modalOverlay');
    
    if (modal && overlay) {
        show(modal);
        show(overlay);
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    $$('.modal').forEach(modal => hide(modal));
    const overlay = $('#modalOverlay');
    if (overlay) hide(overlay);
    document.body.style.overflow = '';
}

function showQuizModal() {
    const quizContent = $('#quizContent');
    if (quizContent) {
        quizContent.innerHTML = generateQuizContent();
    }
    showModal('#quizModal');
}

function showMissionModal() {
    const missionContent = $('#missionContent');
    if (missionContent) {
        missionContent.innerHTML = generateMissionContent();
    }
    showModal('#missionModal');
}

function generateQuizContent() {
    return `
        <div class="quiz-container">
            <div class="quiz-question">
                <h4>Question 1 of 5</h4>
                <p>What percentage of plastic waste is actually recycled globally?</p>
                <div class="quiz-options">
                    <button class="quiz-option" data-answer="false">A) 50%</button>
                    <button class="quiz-option" data-answer="false">B) 25%</button>
                    <button class="quiz-option" data-answer="true">C) 9%</button>
                    <button class="quiz-option" data-answer="false">D) 75%</button>
                </div>
            </div>
            <div class="quiz-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 20%"></div>
                </div>
                <span>Question 1 of 5</span>
            </div>
        </div>
    `;
}

function generateMissionContent() {
    return `
        <div class="mission-list">
            <div class="mission-item">
                <div class="mission-icon">
                    <i class="fas fa-broom"></i>
                </div>
                <div class="mission-info">
                    <h4>Park Cleanup Mission</h4>
                    <p>Clean up litter in your local park and submit photo proof</p>
                    <div class="mission-reward">
                        <i class="fas fa-leaf"></i>
                        150 eco-points
                    </div>
                </div>
                <button class="btn btn-primary btn-sm">Accept</button>
            </div>
            
            <div class="mission-item">
                <div class="mission-icon">
                    <i class="fas fa-seedling"></i>
                </div>
                <div class="mission-info">
                    <h4>Plant a Tree</h4>
                    <p>Plant a tree in your community and track its growth</p>
                    <div class="mission-reward">
                        <i class="fas fa-leaf"></i>
                        200 eco-points
                    </div>
                </div>
                <button class="btn btn-primary btn-sm">Accept</button>
            </div>
            
            <div class="mission-item">
                <div class="mission-icon">
                    <i class="fas fa-recycle"></i>
                </div>
                <div class="mission-info">
                    <h4>Recycling Challenge</h4>
                    <p>Set up a recycling system at home or school</p>
                    <div class="mission-reward">
                        <i class="fas fa-leaf"></i>
                        100 eco-points
                    </div>
                </div>
                <button class="btn btn-primary btn-sm">Accept</button>
            </div>
        </div>
    `;
}

function showDailyChallenge() {
    console.log('Showing daily challenge');
    alert('Today\'s Challenge: Use a reusable water bottle instead of single-use plastic bottles. Complete this challenge to earn 25 eco-points!');
}

function showLeaderboard() {
    console.log('Showing leaderboard');
    // This would typically load and display the full leaderboard
}

function showProgress() {
    console.log('Showing progress tracking');
    // This would typically load and display detailed progress charts
}

function showWasteSorting() {
    console.log('Showing waste sorting game');
    alert('Waste Sorting Game!\n\nDrag items to the correct bins:\n- Plastic bottles → Recycling\n- Food scraps → Compost\n- Paper → Recycling\n- Batteries → Hazardous waste\n\nEarn points for correct sorting!');
}

// Chatbot Functions
function initializeChatbot() {
    const chatbotFloat = $('#chatbotFloat');
    const chatbotClose = $('#chatbotClose');
    const chatbotSend = $('#chatbotSend');
    const chatbotInput = $('#chatbotInput');
    
    if (chatbotFloat) {
        chatbotFloat.addEventListener('click', showChatbot);
    }
    
    if (chatbotClose) {
        chatbotClose.addEventListener('click', hideChatbot);
    }
    
    if (chatbotSend) {
        chatbotSend.addEventListener('click', sendChatMessage);
    }
    
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
    }
}

function showChatbot() {
    const chatbot = $('#chatbot');
    const chatbotFloat = $('#chatbotFloat');
    
    if (chatbot && chatbotFloat) {
        show(chatbot);
        hide(chatbotFloat);
    }
}

function hideChatbot() {
    const chatbot = $('#chatbot');
    const chatbotFloat = $('#chatbotFloat');
    
    if (chatbot && chatbotFloat) {
        hide(chatbot);
        show(chatbotFloat);
    }
}

function sendChatMessage() {
    const input = $('#chatbotInput');
    const messagesContainer = $('#chatbotMessages');
    
    if (!input || !messagesContainer) return;
    
    const message = input.value.trim();
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    input.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const response = generateBotResponse(message);
        addChatMessage(response, 'bot');
    }, 1000);
}

function addChatMessage(message, sender) {
    const messagesContainer = $('#chatbotMessages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `${sender}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = sender === 'bot' ? '🤖' : '👤';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    content.textContent = message;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateBotResponse(userMessage) {
    const responses = {
        'hello': 'Hello! I\'m here to help you with your environmental journey. How can I assist you today?',
        'points': 'You currently have 2,450 eco-points! You can earn more by completing quizzes, missions, and daily challenges.',
        'quiz': 'Ready for a quiz? You can take environmental knowledge quizzes to test what you\'ve learned and earn points!',
        'mission': 'Missions are real-world environmental activities you can do in your community. Complete them with photo proof to earn rewards!',
        'recycle': 'Recycling is crucial for reducing waste! Remember the 3 R\'s: Reduce, Reuse, Recycle. Start by reducing consumption first.',
        'energy': 'Great question about energy! You can save energy by using LED bulbs, unplugging devices when not in use, and using natural light when possible.',
        'water': 'Water conservation is important! Take shorter showers, fix leaks promptly, and collect rainwater for plants.',
        'default': 'That\'s an interesting question! I can help you with information about recycling, energy conservation, water saving, and your EcoEdu progress. What would you like to know more about?'
    };
    
    const lowerMessage = userMessage.toLowerCase();
    
    for (const keyword in responses) {
        if (lowerMessage.includes(keyword)) {
            return responses[keyword];
        }
    }
    
    return responses.default;
}

// Utility Functions for Visual Effects
function addClickEffect(element) {
    addClass(element, 'clicked');
    setTimeout(() => removeClass(element, 'clicked'), 150);
}

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Handle responsive layout changes
    if (window.innerWidth > 1024 && appState.sidebarOpen) {
        const sidebar = $('#sidebar');
        if (sidebar) {
            removeClass(sidebar, 'active');
            appState.sidebarOpen = false;
        }
    }
}, 250));

// Add some CSS for click effects
const style = document.createElement('style');
style.textContent = `
    .clicked {
        transform: scale(0.95);
        transition: transform 0.1s ease;
    }
    
    .quiz-option {
        display: block;
        width: 100%;
        padding: var(--space-md);
        margin-bottom: var(--space-sm);
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-light);
        border-radius: var(--radius-md);
        text-align: left;
        cursor: pointer;
        transition: all var(--transition-fast);
    }
    
    .quiz-option:hover {
        background-color: var(--primary-green);
        color: var(--text-white);
        border-color: var(--primary-green);
    }
    
    .mission-item {
        display: flex;
        align-items: center;
        gap: var(--space-lg);
        padding: var(--space-lg);
        border: 1px solid var(--border-light);
        border-radius: var(--radius-lg);
        margin-bottom: var(--space-md);
        transition: all var(--transition-fast);
    }
    
    .mission-item:hover {
        border-color: var(--primary-green);
        box-shadow: var(--shadow-sm);
    }
    
    .mission-icon {
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--primary-green) 0%, var(--success-green) 100%);
        border-radius: var(--radius-lg);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-white);
        font-size: 1.2rem;
    }
    
    .mission-info {
        flex: 1;
    }
    
    .mission-info h4 {
        margin-bottom: var(--space-xs);
        color: var(--text-primary);
    }
    
    .mission-info p {
        color: var(--text-secondary);
        margin-bottom: var(--space-sm);
    }
    
    .mission-reward {
        display: flex;
        align-items: center;
        gap: var(--space-xs);
        color: var(--primary-green);
        font-weight: 600;
        font-size: 0.9rem;
    }
`;
document.head.appendChild(style);

console.log('EcoEdu Script Loaded Successfully');