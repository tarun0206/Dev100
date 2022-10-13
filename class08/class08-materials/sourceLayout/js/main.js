const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.hLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
})
