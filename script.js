// =================================================================
// TERMINAL UI PORTFOLIO - JAVASCRIPT
// Interactive Terminal Features
// =================================================================

// =================================================================
// Page Load Initialization
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    setupNavigation();
    setupContactInput();
    setupScrollAnimations();
    updateDateTime();
    calculateUptime();
    calculateCareerUptime();
});

// =================================================================
// Initialize Page
// =================================================================
function initializePage() {
    // Fade in all sections
    const sections = document.querySelectorAll('.terminal-section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('fade-in');
        }, 300 * index);
    });
}

// =================================================================
// Navigation System - Command Line Simulation
// =================================================================
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const commandOutput = document.getElementById('nav-command');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const command = link.getAttribute('data-command');
            const targetId = link.getAttribute('href');

            // Display the command in the terminal
            displayCommand(command, commandOutput);

            // Scroll to the target section after a short delay
            setTimeout(() => {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 500);
        });
    });
}

// =================================================================
// Display Command with Typewriter Effect
// =================================================================
function displayCommand(command, outputElement) {
    if (!outputElement) return;

    // Clear previous command
    outputElement.textContent = '';

    let charIndex = 0;
    const typingSpeed = 50; // milliseconds per character

    function typeNextChar() {
        if (charIndex < command.length) {
            outputElement.textContent += command[charIndex];
            charIndex++;
            setTimeout(typeNextChar, typingSpeed);
        }
    }

    typeNextChar();
}

// =================================================================
// Contact Input Handler
// =================================================================
function setupContactInput() {
    const contactInput = document.getElementById('contact-input');

    if (contactInput) {
        contactInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const message = contactInput.value.trim();

                if (message) {
                    // Simulate sending email
                    handleSendMail(message);
                } else {
                    showInputHelp('Error: Message cannot be empty', true);
                }
            }
        });

        contactInput.addEventListener('focus', () => {
            showInputHelp('Press Enter to send (opens email client)', false);
        });
    }
}

// =================================================================
// Handle Send Mail Command
// =================================================================
function handleSendMail(message) {
    const inputHelp = document.getElementById('input-help');
    const contactInput = document.getElementById('contact-input');

    // Show processing message
    showInputHelp('[OK] Processing command...', false);

    setTimeout(() => {
        // Create mailto link with the message
        const subject = encodeURIComponent('Portfolio Contact');
        const body = encodeURIComponent(message);
        const mailtoLink = `mailto:govindhasamyk16@gmail.com?subject=${subject}&body=${body}`;

        // Open email client
        window.location.href = mailtoLink;

        // Clear input and show success
        contactInput.value = '';
        showInputHelp('[OK] Email client opened. Message ready to send.', false);

        // Reset help text after 3 seconds
        setTimeout(() => {
            showInputHelp('Press Enter to send (opens email client)', false);
        }, 3000);
    }, 500);
}

// =================================================================
// Show Input Help Message
// =================================================================
function showInputHelp(message, isError) {
    const inputHelp = document.getElementById('input-help');
    if (inputHelp) {
        inputHelp.textContent = message;
        inputHelp.style.color = isError ? 'var(--terminal-red)' : 'var(--text-dim)';
    }
}

// =================================================================
// Scroll Animations - Reveal on Scroll
// =================================================================
function setupScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        }
    );

    // Observe all sections
    const sections = document.querySelectorAll('.terminal-section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// =================================================================
// Update Date & Time
// =================================================================
function updateDateTime() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const now = new Date();
        const options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        dateElement.textContent = now.toLocaleDateString('en-US', options);
    }
}

// =================================================================
// Calculate System Uptime
// =================================================================
let startTime = Date.now();

function calculateUptime() {
    const uptimeElement = document.getElementById('uptime');

    if (uptimeElement) {
        function updateUptime() {
            const elapsed = Date.now() - startTime;
            const seconds = Math.floor(elapsed / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);

            let uptimeString = '';

            if (hours > 0) {
                uptimeString = `${hours}h ${minutes % 60}m`;
            } else if (minutes > 0) {
                uptimeString = `${minutes}m ${seconds % 60}s`;
            } else {
                uptimeString = `${seconds}s`;
            }

            uptimeElement.textContent = uptimeString;
        }

        // Update immediately and then every second
        updateUptime();
        setInterval(updateUptime, 1000);
    }
}

// =================================================================
// Calculate Career Uptime (Duration for Each Role)
// =================================================================
function calculateCareerUptime() {
    const careerEntries = document.querySelectorAll('.career-entry');

    careerEntries.forEach(entry => {
        const startDate = entry.getAttribute('data-start');
        const uptimeElement = entry.querySelector('.uptime-value');

        if (startDate && uptimeElement) {
            const start = new Date(startDate);
            const now = new Date();

            // Calculate the difference in months
            const years = now.getFullYear() - start.getFullYear();
            const months = now.getMonth() - start.getMonth();

            let totalMonths = (years * 12) + months;

            // If we haven't reached the start day of target month yet, subtract 1 month
            if (now.getDate() < start.getDate()) {
                totalMonths--;
            }

            // Format the duration
            let durationText = '';

            if (totalMonths < 1) {
                durationText = '< 1 mo';
            } else {
                const uptimeYears = Math.floor(totalMonths / 12);
                const uptimeMonths = totalMonths % 12;

                if (uptimeYears > 0 && uptimeMonths > 0) {
                    durationText = `${uptimeYears} yr ${uptimeMonths} mo${uptimeMonths > 1 ? 's' : ''}`;
                } else if (uptimeYears > 0) {
                    durationText = `${uptimeYears} yr${uptimeYears > 1 ? 's' : ''}`;
                } else {
                    durationText = `${uptimeMonths} mo${uptimeMonths > 1 ? 's' : ''}`;
                }
            }

            uptimeElement.textContent = durationText;
        }
    });
}


// =================================================================
// Typewriter Effect for Specific Elements
// =================================================================
function typewriterEffect(element, text, speed = 50) {
    let charIndex = 0;
    element.textContent = '';

    function type() {
        if (charIndex < text.length) {
            element.textContent += text[charIndex];
            charIndex++;
            setTimeout(type, speed);
        }
    }

    type();
}

// =================================================================
// Terminal Command Simulation (for future enhancements)
// =================================================================
function simulateCommand(command, targetElement) {
    const commands = {
        'whoami': 'AI/DS Engineering Student | NLP Enthusiast | Building Autonomous Agents',
        'pwd': '/home/portfolio/projects',
        'date': new Date().toString(),
        'uname -a': 'Terminal Portfolio System v2.0.1 (AI/DS Edition)',
    };

    const output = commands[command] || `Command not found: ${command}`;

    if (targetElement) {
        targetElement.textContent = output;
    }

    return output;
}

// =================================================================
// Smooth Scroll Polyfill for Older Browsers
// =================================================================
if (!('scrollBehavior' in document.documentElement.style)) {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =================================================================
// Easter Egg: Konami Code
// =================================================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiSequence.length);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    const terminalContainer = document.querySelector('.terminal-container');
    if (terminalContainer) {
        terminalContainer.style.animation = 'terminal-glitch 0.3s ease-in-out 3';
    }

    console.log('%c🚀 CHEAT CODE ACTIVATED!', 'color: #3fb950; font-size: 20px; font-weight: bold;');
    console.log('%cYou found the secret! Here\'s a bonus command:', 'color: #58a6ff;');
    console.log('%c$ sudo make-me-awesome', 'color: #f0883e; font-family: monospace;');
}

// =================================================================
// Performance Optimization: Lazy Load Images (if any added later)
// =================================================================
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// =================================================================
// Console Greeting
// =================================================================
console.log('%c╔═══════════════════════════════════════════════════════════════╗', 'color: #00ff00');
console.log('%c║                   OPSPILOT PORTFOLIO v2.0.1                   ║', 'color: #00ff00');
console.log('%c║                   Built with ❤️ and JavaScript                ║', 'color: #00ff00');
console.log('%c╚═══════════════════════════════════════════════════════════════╝', 'color: #00ff00');
console.log('%c> System initialized successfully', 'color: #00ff00');
console.log('%c> Govindhasamy K - Aspiring AI Engineer', 'color: #8b949e');
