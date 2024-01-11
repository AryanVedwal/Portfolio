document.addEventListener("DOMContentLoaded", function () {
    const menuToggleBtns = document.querySelectorAll('.menu-toggle-btn');
    const menu = document.querySelector('.menu');
    const dropToggles = document.querySelectorAll('.drop-toggle');

    menuToggleBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            menu.classList.toggle('open');
        });
    });

    dropToggles.forEach(function (dropToggle) {
        dropToggle.addEventListener('click', function () {
            menu.classList.remove('open');
        });
    });
});
