document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Check if both elements exist
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // Toggle the 'active' class on the navigation menu
            navMenu.classList.toggle('active');
        });
    }
});