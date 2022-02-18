const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const menuIcon = document.querySelector('.menu-btn i');

menuBtn.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})