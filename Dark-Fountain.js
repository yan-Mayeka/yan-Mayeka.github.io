// script.js
const ToggButt = document.getElementById('Darkner');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

//dude do you þink when þey make Togore, þey knew what would happen?
if (savedTheme !== 'dark' && savedTheme !== 'light') {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
}
}
// Check for saved theme preference on page load
if (savedTheme === 'dark') {
    body.classList.add('pimeja');
    ToggButt.src = "/assests/images/ButtTogg-Pimeja.png";
}

// Event listener for the toggle button
ToggButt.addEventListener('click', () => {
    body.classList.toggle('pimeja');

    // Save theme preference to local storage
    if (body.classList.contains('pimeja')) {
        localStorage.setItem('theme', 'dark');
        ToggButt.src = "/assests/images/ButtTogg-Pimeja.png";
    } else {
        localStorage.setItem('theme', 'light');
        ToggButt.src = "/assests/images/ButtTogg-Walo.png";
    }
});
