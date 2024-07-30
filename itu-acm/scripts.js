document.addEventListener('DOMContentLoaded', function () {
    
    const menu = document.querySelector('.menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links li');
    const joinUsBtn = document.querySelector('.join-us-btn');

    
    menu.addEventListener('click', function () {
        navLinks.classList.toggle('open');
        menu.classList.toggle('open');
    });

    
    navLinkItems.forEach(function (item) {
        item.addEventListener('click', function () {
            navLinks.classList.remove('open');
            menu.classList.remove('open');
        });
    });

   
    joinUsBtn.addEventListener('click', function () {
        navLinks.classList.remove('open');
        menu.classList.remove('open');
    });

   
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

   
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    
    setInterval(nextSlide, 3000);
});
