// script.js

const ToggButt = document.getElementById('Darkner');
const body = document.body;

// Check for saved theme preference on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('pimeja');
}

// Event listener for the toggle button
themeToggle.addEventListener('click', () => {
    body.classList.toggle('pimeja');

    // Save theme preference to local storage
    if (body.classList.contains('pimeja')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
