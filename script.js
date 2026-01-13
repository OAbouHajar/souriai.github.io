document.addEventListener('DOMContentLoaded', () => {
    // Splash Screen Logic
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        // Start progress bar animation
        const progressBar = splashScreen.querySelector('.progress-bar-fill');
        if (progressBar) {
            progressBar.style.width = '100%';
        }
        
        // Hide splash screen after 2 seconds
        setTimeout(() => {
            splashScreen.style.opacity = '0';
            splashScreen.style.transition = 'opacity 0.5s ease-out';
            setTimeout(() => {
                splashScreen.style.display = 'none';
            }, 500);
        }, 2000);
    }

    // Maintenance Message Logic
    const showMaintenanceMessage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const banner = document.getElementById('maintenance-toast');
        if (banner) {
            banner.classList.add('show');
            setTimeout(() => {
                banner.classList.remove('show');
            }, 3000);
        }
    };

    // Block all interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, .interactive');
    interactiveElements.forEach(el => {
        el.addEventListener('click', showMaintenanceMessage);
        el.addEventListener('submit', showMaintenanceMessage);
        el.addEventListener('keydown', (e) => {
             if (e.key === 'Enter') showMaintenanceMessage(e);
        });
    });

    // Special handling for the input form
    const chatForm = document.getElementById('chat-form');
    if (chatForm) {
        chatForm.addEventListener('submit', showMaintenanceMessage);
    }
});
